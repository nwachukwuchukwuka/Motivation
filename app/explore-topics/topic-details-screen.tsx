import { useAppContext } from "@/context/context";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type Quote = {
  id: string;
  text: string;
  author: string;
};

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

type QuoteCardProps = {
  item: Quote;
  onToggleFavorite: () => void;
  isFavorite: boolean;
  textStyles: {
    fontSize: number;
    fontFamily: string;
    color: string;
    textAlign: "center" | "left" | "right";
    textShadowStyle: object;
  };
};

const QuoteCard = ({
  item,
  onToggleFavorite,
  isFavorite,
  textStyles,
}: QuoteCardProps) => {
  const router = useRouter();
  return (
    <View
      style={{ height: SCREEN_HEIGHT }}
      className="w-full justify-center items-center px-8"
    >
      <View>
        <View className="items-center">
          <Text
            className="text-center leading-relaxed"
            style={[
              {
                fontFamily: textStyles.fontFamily,
                fontSize: textStyles.fontSize,
                color: textStyles.color,
                textAlign: textStyles.textAlign,
              },
              textStyles.textShadowStyle,
            ]}
          >
            {item.text}
          </Text>
        </View>
        <View className="flex-row justify-center items-center gap-8 mt-12">
          <Pressable onPress={() => router.push("/share-quote-modal")}>
            <Feather name="share" size={28} color="white" />
          </Pressable>

          <TouchableOpacity onPress={onToggleFavorite}>
            {isFavorite ? (
              <AntDesign name="heart" size={32} color="white" />
            ) : (
              <Feather name="heart" size={32} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const TopicDetailsScreen = () => {
  const router = useRouter();
  const { topicName } = useLocalSearchParams<{ topicName: string }>();
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [likedQuotes, setLikedQuotes] = useState<string[]>([]);
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  const {
    themeSource,
    isFavorite,
    toggleFavorite,
    feedQuotes,
    fontSize,
    fontFamily,
    textColor,
    textAlign,
    textShadowStyle,
  } = useAppContext();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const triggerLikeAnimation = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 120 });
    opacity.value = withTiming(0.8, { duration: 100 });
    scale.value = withDelay(500, withSpring(0));
    opacity.value = withDelay(500, withTiming(0, { duration: 200 }));
  };

  const handleLikePress = (quoteId: string) => {
    toggleFavorite(quoteId);
    if (!isFavorite(quoteId)) {
      triggerLikeAnimation();
    }
  };

  const isImageBackground = typeof themeSource === "object" && themeSource.uri;

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(offsetY / SCREEN_HEIGHT);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const MainContent = () => (
    <View className="flex-1">
      <FlatList
        ref={flatListRef}
        // data={QUOTES}
        data={feedQuotes}
        renderItem={({ item }) => (
          <QuoteCard
            item={item}
            onToggleFavorite={() => handleLikePress(item.id)}
            isFavorite={likedQuotes.includes(item.id)}
            textStyles={{
              fontSize,
              fontFamily,
              color: textColor,
              textAlign,
              textShadowStyle,
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        snapToInterval={SCREEN_HEIGHT}
        snapToAlignment={"start"}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        decelerationRate="fast"
      />

      <View className="absolute top-0 left-0 right-0 p-4">
        <View className="flex-row justify-between items-center h-14">
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold">
            {topicName || "Topic"}
          </Text>
          <TouchableOpacity
            onPress={() => setIsFollowing(!isFollowing)}
            className={`rounded-full border px-5 py-1.5 flex-row items-center ${
              isFollowing ? "border-white" : "border-gray-500"
            }`}
          >
            {isFollowing && (
              <Feather
                name="check"
                size={16}
                color="white"
                style={{ marginRight: 4 }}
              />
            )}
            <Text className="text-white font-semibold">
              {isFollowing ? "Following" : "Follow"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return isImageBackground ? (
    <ImageBackground source={themeSource} resizeMode="cover" className="flex-1">
      <View className="flex-1 bg-black/20">
        <MainContent />
      </View>
    </ImageBackground>
  ) : (
    <View
      className="flex-1"
      style={{
        backgroundColor:
          typeof themeSource === "object" ? themeSource.color : "black",
      }}
    >
      <MainContent />
    </View>
  );
};

export default TopicDetailsScreen;

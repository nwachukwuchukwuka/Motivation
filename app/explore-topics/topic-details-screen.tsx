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
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type Quote = {
  id: string;
  text: string;
  author: string;
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

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
      style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      className="justify-center items-center px-10"
    >
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
        
        <View className="flex-row justify-center items-center gap-12 mt-16">
          <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => router.push("/share-quote-modal")}
            className="w-14 h-14 rounded-full bg-white/5 items-center justify-center border border-white/10"
          >
            <Feather name="share" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity 
            activeOpacity={0.7}
            onPress={onToggleFavorite}
            className={`w-14 h-14 rounded-full items-center justify-center border transition-all ${
              isFavorite ? "bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/30" : "bg-white/5 border-white/10"
            }`}
          >
            {isFavorite ? (
              <AntDesign name="heart" size={24} color="black" />
            ) : (
              <Feather name="heart" size={24} color="white" />
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
    const currentlyFavorited = isFavorite(quoteId);
    toggleFavorite(quoteId);
    if (!currentlyFavorited) {
      triggerLikeAnimation();
    }
  };

  const isImageBackground = typeof themeSource === "object" && themeSource.uri;

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / SCREEN_WIDTH);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const MainContent = () => (
    <View className="flex-1">
      <FlatList
        ref={flatListRef}
        data={feedQuotes}
        renderItem={({ item }) => (
          <QuoteCard
            item={item}
            onToggleFavorite={() => handleLikePress(item.id)}
            isFavorite={isFavorite(item.id)}
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
        horizontal
        snapToInterval={SCREEN_WIDTH}
        snapToAlignment={"center"}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        decelerationRate="fast"
      />

      {/* Floating Header Area */}
      <SafeAreaView edges={["top"]} className="absolute top-0 left-0 right-0 z-50">
        <View className="flex-row justify-between items-center h-14 px-8 mt-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full bg-black/40 items-center justify-center border border-white/10 backdrop-blur-md"
          >
            <Feather name="chevron-left" size={24} color="#E2E8F0" />
          </TouchableOpacity>
          
          <Text className="text-[#E2E8F0] text-xl font-bold tracking-tighter">
            {topicName || "Topic"}
          </Text>

          <TouchableOpacity
            onPress={() => setIsFollowing(!isFollowing)}
            className={`rounded-full px-5 py-2 flex-row items-center transition-all ${
              isFollowing ? "bg-emerald-500 shadow-lg shadow-emerald-500/30" : "bg-white/5 border border-white/10"
            }`}
          >
            {isFollowing && (
              <Feather
                name="check"
                size={14}
                color="black"
                style={{ marginRight: 4 }}
              />
            )}
            <Text className={`font-bold text-xs uppercase tracking-widest ${isFollowing ? "text-black" : "text-white"}`}>
              {isFollowing ? "Following" : "Follow"}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Like Animation Overlay */}
      <View className="absolute inset-0 pointer-events-none items-center justify-center">
        <Animated.View style={animatedStyle}>
          <AntDesign name="heart" size={100} color="#10b981" />
        </Animated.View>
      </View>
    </View>
  );

  return isImageBackground ? (
    <ImageBackground source={themeSource} resizeMode="cover" className="flex-1">
      <View className="flex-1 bg-black/30">
        <MainContent />
      </View>
    </ImageBackground>
  ) : (
    <View
      className="flex-1 bg-[#050505]"
      style={{
        backgroundColor:
          typeof themeSource === "object" ? themeSource.color : "#050505",
      }}
    >
      <MainContent />
    </View>
  );
};

export default TopicDetailsScreen;

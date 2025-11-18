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
          {item.author ? (
            <Text
              className="text-lg mt-4"
              style={[
                { color: textStyles.color, fontFamily: textStyles.fontFamily },
                textStyles.textShadowStyle,
              ]}
            >
              {item.author}
            </Text>
          ) : null}
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

const ShowAllInFeed = () => {
  const router = useRouter();

  const {
    feedQuotes,
    themeSource,
    isFavorite,
    toggleFavorite,
    fontSize,
    fontFamily,
    textColor,
    textAlign,
    textShadowStyle,
  } = useAppContext();
  const { topicName } = useLocalSearchParams<{ topicName: string }>();
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const [showLargeHeart, setShowLargeHeart] = useState(false);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(offsetY / SCREEN_HEIGHT);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };
  const isImageBackground = typeof themeSource === "object" && themeSource.uri;

  type MainContentProps = {
    showLargeHeart: boolean;
    setShowLargeHeart: React.Dispatch<React.SetStateAction<boolean>>;
  };

  const MainContent = ({
    showLargeHeart,
    setShowLargeHeart,
  }: MainContentProps) => {
    const handleLikePress = (quoteId: string) => {
      if (!isFavorite(quoteId)) {
        setShowLargeHeart(true);

        setTimeout(() => {
          setShowLargeHeart(false);
        }, 800);
      }
      toggleFavorite(quoteId);
    };
    return (
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
          snapToInterval={SCREEN_HEIGHT}
          snapToAlignment={"start"}
          showsVerticalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          decelerationRate="fast"
        />
        {showLargeHeart && (
          <View className="absolute inset-0 justify-center items-center pointer-events-none">
            <AntDesign name="heart" size={150} color="white" />
          </View>
        )}

        <View className="absolute top-0 left-0 right-0 p-4">
          <View className="flex-row justify-between items-center h-14">
            <TouchableOpacity onPress={() => router.back()}>
              <Feather name="chevron-left" size={28} color="white" />
            </TouchableOpacity>
            <Text className="text-white text-lg font-bold">
              {topicName || "Favorites"}
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
  };
  return isImageBackground ? (
    <ImageBackground source={themeSource} resizeMode="cover" className="flex-1">
      <View className="flex-1 bg-black/20">
        <MainContent
          showLargeHeart={showLargeHeart}
          setShowLargeHeart={setShowLargeHeart}
        />
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
      <MainContent
        showLargeHeart={showLargeHeart}
        setShowLargeHeart={setShowLargeHeart}
      />
    </View>
  );
};

export default ShowAllInFeed;

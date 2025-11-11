import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
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
import { useSafeAreaInsets } from "react-native-safe-area-context";

const QUOTES = [
  {
    id: "1",
    text: "Sometimes when things are falling apart, they may actually be falling into place.",
    author: "-Jessica Redland",
  },
  {
    id: "2",
    text: "The only way to do great work is to love what you do.",
    author: "-Steve Jobs",
  },
  {
    id: "3",
    text: "The journey of a thousand miles begins with a single step.",
    author: "-Lao Tzu",
  },
];

type Quote = {
  id: string;
  text: string;
  author: string;
};

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

type QuoteCardProps = {
  item: Quote;
  onLike: () => void;
  isLiked: boolean;
};

const QuoteCard = ({ item, onLike, isLiked }: QuoteCardProps) => {
  const router = useRouter();
  return (
    <View
      style={{ height: SCREEN_HEIGHT }}
      className="w-full justify-center items-center px-8"
    >
      <View>
        <View className="items-center">
          <Text className="text-white text-4xl font-semibold text-center leading-relaxed">
            {item.text}
          </Text>
          {item.author ? (
            <Text className="text-white text-lg mt-4">{item.author}</Text>
          ) : null}
        </View>
        <View className="flex-row justify-center items-center gap-8 mt-12">
          <Pressable onPress={() => router.push("/share-quote-modal")}>
            <Feather name="share" size={28} color="white" />
          </Pressable>
          <TouchableOpacity onPress={onLike}>
            <Feather
              name="heart"
              size={28}
              color={isLiked ? "white" : "white"}
              fill={isLiked ? "white" : "transparent"}
            />
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
    const isAlreadyLiked = likedQuotes.includes(quoteId);

    if (isAlreadyLiked) {
      setLikedQuotes((prev) => prev.filter((id) => id !== quoteId));
    } else {
      setLikedQuotes((prev) => [...prev, quoteId]);
      triggerLikeAnimation();
    }
  };

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(offsetY / SCREEN_HEIGHT);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-black">
      <FlatList
        ref={flatListRef}
        data={QUOTES}
        renderItem={({ item }) => (
          <QuoteCard
            item={item}
            onLike={() => handleLikePress(item.id)}
            isLiked={likedQuotes.includes(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        snapToInterval={SCREEN_HEIGHT}
        snapToAlignment={"start"}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        decelerationRate="fast"
      />

      {/* <Animated.View
        style={animatedStyle}
        className="absolute inset-0 justify-center items-center"
      >
        <Feather name="heart" size={150} color="white" fill="white" />
      </Animated.View> */}

      <View
        // style={{ paddingTop: insets.top }}
        className="absolute top-0 left-0 right-0 p-4"
      >
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
};

export default TopicDetailsScreen;

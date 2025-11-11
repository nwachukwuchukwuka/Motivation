import ThemeChangedToast from "@/components/ThemeChangedToast";
import { QUOTES } from "@/constants/constants";
import { useAppContext } from "@/context/context";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Redirect, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
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
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Quote = {
  id: string;
  text: string;
  author: string;
};

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

type QuoteCardProps = {
  item: Quote;
  textStyles: {
    fontSize: number;
    fontFamily: string;
    color: string;
    textAlign: "center" | "left" | "right";
    textShadowStyle: object;
  };
};

const QuoteCard = ({ item, textStyles }: QuoteCardProps) => {
  const router = useRouter();
  return (
    <View
      style={{ height: SCREEN_HEIGHT }}
      className="w-full justify-center items-center p-6"
    >
      <View>
        <View className="items-center mb-52 mt-52">
          <Text
            className="text-center"
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
          <Text
            className="text-white text-lg mt-2"
            style={{
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 8,
            }}
          >
            {item.author}
          </Text>
        </View>
        <View className="flex-row justify-center items-center gap-8 mt-16">
          <Pressable onPress={() => router.push("/share-quote-modal")}>
            <Feather name="share" size={32} color="white" />
          </Pressable>
          <TouchableOpacity>
            <Feather name="heart" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const MainContent = ({
  flatListRef,
  handleMomentumScrollEnd,
  insets,
  likes,
  maxLikes,
  progress,
  router,
  textStyles,
  showThemeToast,
}: any) => (
  <View className="flex-1">
    <FlatList
      ref={flatListRef}
      data={QUOTES}
      renderItem={({ item }) => (
        <QuoteCard item={item} textStyles={textStyles} />
      )}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      onMomentumScrollEnd={handleMomentumScrollEnd}
      decelerationRate="fast"
    />

    <View
      style={{ paddingTop: insets.top }}
      className="absolute top-0 left-0 right-0 p-4"
    >
      <View className="flex-row justify-between items-center">
        <View className="mr-10" />
        <Pressable className="flex-row items-center">
          <Feather name="heart" size={16} color="white" />
          <Text className="text-white font-semibold mx-2 text-sm">
            {likes}/{maxLikes}
          </Text>
          <View className="w-32 h-1.5 bg-white/30 rounded-full">
            <View
              style={{ width: `${progress}%` }}
              className="h-1.5 bg-white rounded-full"
            />
          </View>
        </Pressable>

        <TouchableOpacity
          className="bg-black/40 p-2.5 rounded-lg"
          onPress={() => router.push("/free-trial-details-screen")}
        >
          <AntDesign name="crown" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>

    {/* Bottom Section */}
    <View
      style={{ paddingBottom: insets.bottom }}
      className="absolute bottom-0 left-0 right-0 p-4"
    >
      <View className="flex-row justify-between items-center">
        <TouchableOpacity
          className="flex-row items-center bg-black/50 rounded-2xl px-4 py-5"
          onPress={() => router.push("/explore-topics/explore-topics-screen")}
        >
          <Feather name="grid" size={20} color="white" />
          <Text className="text-white font-semibold ml-2">General</Text>
          <View className="absolute -top-3.5 -right-1 bg-[#ff8a8a] rounded-full px-2 py-1">
            <Text className="text-white text-md">NEW</Text>
          </View>
        </TouchableOpacity>

        <View className="flex-row items-center gap-6 mr-4">
          <Pressable
            className="items-center bg-black/50 rounded-2xl px-4 py-5"
            onPress={() => router.push("/themes/themes-screen")}
          >
            <Feather name="sliders" size={18} color="white" />
          </Pressable>
          <Pressable
            className="items-center bg-black/50 rounded-2xl px-4 py-5"
            onPress={() => router.push("/settings")}
          >
            <Feather name="user" size={18} color="white" />
          </Pressable>
        </View>
      </View>
    </View>

    <ThemeChangedToast visible={showThemeToast} />
  </View>
);

const QuoteScreen = () => {
  // const isAuthenticated = false;
  const {
    themeSource,
    fontSize,
    fontFamily,
    textColor,
    textAlign,
    textShadowStyle,
    setActiveQuote,
    isAuthenticated,
    setIsAuthenticated,
  } = useAppContext();
  if (!isAuthenticated) return <Redirect href="/welcome-screen" />;

  const router = useRouter();
  const likes = 0;
  const maxLikes = 5;
  const progress = (likes / maxLikes) * 100;

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // const handleMomentumScrollEnd = (
  //   event: NativeSyntheticEvent<NativeScrollEvent>
  // ) => {
  //   const offsetY = event.nativeEvent.contentOffset.y;
  //   const newIndex = Math.round(offsetY / SCREEN_HEIGHT);
  //   if (newIndex !== currentIndex) {
  //     setCurrentIndex(newIndex);
  //     setActiveQuote(QUOTES[newIndex]);
  //   }
  // };

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(offsetY / SCREEN_HEIGHT);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      // Ensure QUOTES[newIndex] exists before setting
      if (QUOTES[newIndex]) {
        setActiveQuote(QUOTES[newIndex]);
      }
    }
  };

  const insets = useSafeAreaInsets();

  const isImageBackground = typeof themeSource === "object" && themeSource.uri;

  console.log("themeSource", themeSource);
  const [showThemeToast, setShowThemeToast] = useState(false);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setShowThemeToast(true);

      const timer = setTimeout(() => {
        setShowThemeToast(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [themeSource]);

  const contentProps = {
    flatListRef,
    handleMomentumScrollEnd,
    insets,
    likes,
    maxLikes,
    progress,
    router,
    textStyles: {
      fontSize,
      fontFamily,
      color: textColor,
      textAlign,
      textShadowStyle,
    },
    showThemeToast,
  };

  // const MainContent = () => (
  //   <View className="flex-1">
  //     <FlatList
  //       ref={flatListRef}
  //       data={QUOTES}
  //       renderItem={({ item }) => (
  //         <QuoteCard
  //           item={item}
  //           textStyles={{
  //             fontSize,
  //             fontFamily,
  //             color: textColor,
  //             textAlign,
  //             textShadowStyle,
  //           }}
  //         />
  //       )}
  //       keyExtractor={(item) => item.id}
  //       pagingEnabled
  //       showsVerticalScrollIndicator={false}
  //       onMomentumScrollEnd={handleMomentumScrollEnd}
  //       decelerationRate="fast"
  //     />

  //     {/* Top Section */}
  // <View
  //   style={{ paddingTop: insets.top }}
  //   className="absolute top-0 left-0 right-0 p-4"
  // >
  //   <View className="flex-row justify-between items-center">
  //     <View className="mr-10" />
  //     <Pressable className="flex-row items-center">
  //       <Feather name="heart" size={16} color="white" />
  //       <Text className="text-white font-semibold mx-2 text-sm">
  //         {likes}/{maxLikes}
  //       </Text>
  //       <View className="w-32 h-1.5 bg-white/30 rounded-full">
  //         <View
  //           style={{ width: `${progress}%` }}
  //           className="h-1.5 bg-white rounded-full"
  //         />
  //       </View>
  //     </Pressable>

  //     <TouchableOpacity
  //       className="bg-black/40 p-2.5 rounded-lg"
  //       onPress={() => router.push("/free-trial-details-screen")}
  //     >
  //       <AntDesign name="crown" size={24} color="white" />
  //     </TouchableOpacity>
  //   </View>
  // </View>

  //     {/* Bottom Section */}
  // <View
  //   style={{ paddingBottom: insets.bottom }}
  //   className="absolute bottom-0 left-0 right-0 p-4"
  // >
  //   <View className="flex-row justify-between items-center">
  //     <TouchableOpacity
  //       className="flex-row items-center bg-black/50 rounded-2xl px-4 py-5"
  //       onPress={() => router.push("/explore-topics/explore-topics-screen")}
  //     >
  //       <Feather name="grid" size={20} color="white" />
  //       <Text className="text-white font-semibold ml-2">General</Text>
  //       <View className="absolute -top-3.5 -right-1 bg-[#ff8a8a] rounded-full px-2 py-1">
  //         <Text className="text-white text-md">NEW</Text>
  //       </View>
  //     </TouchableOpacity>

  //     <View className="flex-row items-center gap-6 mr-4">
  //       <Pressable
  //         className="items-center bg-black/50 rounded-2xl px-4 py-5"
  //         onPress={() => router.push("/themes/themes-screen")}
  //       >
  //         <Feather name="sliders" size={18} color="white" />
  //       </Pressable>
  //       <Pressable
  //         className="items-center bg-black/50 rounded-2xl px-4 py-5"
  //         onPress={() => router.push("/settings")}
  //       >
  //         <Feather name="user" size={18} color="white" />
  //       </Pressable>
  //     </View>
  //   </View>
  // </View>

  //     <ThemeChangedToast visible={showThemeToast} />
  //   </View>
  // );

  return isImageBackground ? (
    <ImageBackground source={themeSource} resizeMode="cover" className="flex-1">
      <View className="flex-1 bg-black/20">
        <MainContent {...contentProps} />
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
      <MainContent {...contentProps} />
    </View>
  );
};

export default QuoteScreen;

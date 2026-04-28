import ResonateQuotesModal from "@/components/ResonateQuotesModal";
import StreakToast from "@/components/StreakToast";
import ThemeChangedToast from "@/components/ThemeChangedToast";
import { QUOTES } from "@/constants/constants";
import { useAppContext } from "@/context/context";
import { AntDesign, Feather } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Redirect, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Quote = {
  id: string;
  text: string;
  author: string;
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

type QuoteCardProps = {
  item: Quote;
  textStyles: {
    fontSize: number;
    fontFamily: string;
    color: string;
    textAlign: "center" | "left" | "right";
    textShadowStyle: object;
  };
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

const QuoteCard = ({
  item,
  textStyles,
  isFavorite,
  onToggleFavorite,
}: QuoteCardProps) => {
  const router = useRouter();

  return (
    <View
      style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      className="justify-start pt-48 px-10"
    >
      <View className="mb-12">
        <Text
          style={[
            {
              fontFamily: textStyles.fontFamily,
              fontSize: textStyles.fontSize,
              color: textStyles.color,
              textAlign: textStyles.textAlign,
            },
            textStyles.textShadowStyle,
          ]}
          className="leading-tight tracking-tight"
        >
          {item.text}
        </Text>
        <View className="flex-row items-center mt-6">
          <View className="w-8 h-[2px] bg-emerald-500 mr-4" />
          <Text
            className="text-white/60 text-lg font-medium italic"
            style={{
              textShadowColor: "rgba(0, 0, 0, 0.5)",
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 4,
            }}
          >
            {item.author}
          </Text>
        </View>
      </View>

      {/* Floating Action Sidebar */}
      <View className="absolute right-6 top-1/2 -translate-y-1/2 space-y-8">
        <TouchableOpacity
          onPress={onToggleFavorite}
          className="w-16 h-16 bg-black/30 backdrop-blur-md rounded-full items-center justify-center border border-white/10"
        >
          {isFavorite ? (
            <AntDesign name="heart" size={28} color="#10b981" />
          ) : (
            <Feather name="heart" size={28} color="white" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/share-quote-modal")}
          className="w-16 h-16 bg-black/30 backdrop-blur-md rounded-full items-center justify-center border border-white/10 mt-6"
        >
          <Feather name="share-2" size={28} color="white" />
        </TouchableOpacity>
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
  isFavorite,
  toggleFavorite,
  showStreakToast,
  handleProgressBarPress,
}: any) => {
  const [showLargeHeart, setShowLargeHeart] = useState(false);

  const handleLikePress = (quoteId: string) => {
    if (!isFavorite(quoteId)) {
      setShowLargeHeart(true);
      setTimeout(() => setShowLargeHeart(false), 800);
    }
    toggleFavorite(quoteId);
  };

  return (
    <View className="flex-1 ">
      <FlatList
        ref={flatListRef}
        data={QUOTES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <QuoteCard
            item={item}
            textStyles={textStyles}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={() => handleLikePress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        decelerationRate="fast"
      />

      {showLargeHeart && (
        <View className="absolute inset-0 justify-center items-center pointer-events-none">
          <AntDesign name="heart" size={120} color="#10b981" style={{ opacity: 0.6 }} />
        </View>
      )}

      {/* Floating HUD Top */}
      <View
        style={{ top: insets.top + 10 }}
        className="absolute left-6 right-6 flex-row justify-between items-center"
      >
        {likes < 5 ? (
          <TouchableOpacity
            className="flex-row items-center bg-[#111111]/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-emerald-500/20"
            onPress={handleProgressBarPress}
          >
            <View className="mr-3">
              <Text className="text-white font-semibold text-[15px] tracking-widest  mb-1">Curation</Text>
              <View className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <View
                  style={{ width: `${progress}%` }}
                  className="h-full bg-emerald-500 rounded-full"
                />
              </View>
            </View>
            <Text className="text-emerald-500 font-bold text-xs ml-1">{likes}/{maxLikes}</Text>
          </TouchableOpacity>
        ) : <View />}

        <TouchableOpacity
          className="w-14 h-14 bg-[#111111]/80 backdrop-blur-md rounded-2xl border border-emerald-500/20 items-center justify-center"
          onPress={() => router.push("/free-trial-details-screen")}
        >
          <AntDesign name="crown" size={24} color="#10b981" />
        </TouchableOpacity>
      </View>

      {/* Floating Island Navigation */}
      <View
        style={{ bottom: insets.bottom + 20 }}
        className="absolute left-6 right-6"
      >
        <View
          className="flex-row items-center justify-between bg-[#111111]/90 backdrop-blur-xl px-2 py-2 rounded-[32px] border border-white/5"
        >
          <TouchableOpacity
            className="flex-row items-center bg-emerald-500 rounded-[24px] px-8 py-4"
            onPress={() => router.push("/explore-topics/explore-topics-screen")}
          >
            <Feather name="grid" size={20} color="black" />
            <Text className="text-black font-bold ml-3 tracking-tight">Explore</Text>
          </TouchableOpacity>

          <View className="flex-row items-center gap-2 pr-2">
            <TouchableOpacity
              className="w-14 h-14 bg-white/5 rounded-[24px] items-center justify-center"
              onPress={() => router.push("/themes/themes-screen")}
            >
              <Feather name="sliders" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-14 h-14 bg-white/5 rounded-[24px] items-center justify-center"
              onPress={() => router.push("/settings")}
            >
              <Feather name="user" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ThemeChangedToast visible={showThemeToast} />
      <StreakToast visible={showStreakToast} streakCount={1} />
    </View>
  );
};

const QuoteScreen = () => {
  const {
    themeSource,
    fontSize,
    fontFamily,
    textColor,
    textAlign,
    textShadowStyle,
    setActiveQuote,
    isAuthenticated,
    isFavorite,
    toggleFavorite,
    favoriteQuoteIds,
  } = useAppContext();

  if (!isAuthenticated) return <Redirect href="/welcome-screen" />;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleProgressBarPress = () => {
    bottomSheetModalRef.current?.present();
  };

  const router = useRouter();
  const maxLikes = 5;
  const likes = favoriteQuoteIds.length;
  const progress = Math.min((likes / maxLikes) * 100, 100);

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [showStreakToast, setShowStreakToast] = useState(false);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / SCREEN_WIDTH);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      if (QUOTES[newIndex]) {
        setActiveQuote(QUOTES[newIndex]);
      }
    }
  };

  const insets = useSafeAreaInsets();
  const isImageBackground = typeof themeSource === "object" && themeSource.uri;
  const [showThemeToast, setShowThemeToast] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      setShowStreakToast(true);
      const streakTimer = setTimeout(() => setShowStreakToast(false), 4000);
      return () => clearTimeout(streakTimer);
    } else {
      setShowThemeToast(true);
      const themeTimer = setTimeout(() => setShowThemeToast(false), 4000);
      return () => clearTimeout(themeTimer);
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
    isFavorite,
    toggleFavorite,
    showStreakToast,
    handleProgressBarPress,
  };

  return (
    <BottomSheetModalProvider>
      <View className="flex-1 bg-[#050505]">
        {isImageBackground ? (
          <ImageBackground source={themeSource} resizeMode="cover" className="flex-1">
            <View className="flex-1 bg-black/40">
              <MainContent {...contentProps} />
            </View>
          </ImageBackground>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: typeof themeSource === "object" ? themeSource.color : "#050505",
            }}
          >
            <MainContent {...contentProps} />
          </View>
        )}
        <ResonateQuotesModal ref={bottomSheetModalRef} />
      </View>
    </BottomSheetModalProvider>
  );
};

export default QuoteScreen;

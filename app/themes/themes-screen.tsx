import {
  ALL_THEMES,
  THEME_MIXES_HALF,
  ThemeTypes,
} from "@/constants/constants";
import { useAppContext } from "@/context/context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";

const FILTERS = ["All", "Free", "New", "Seasonal", "Most popular", "Recent"];

const ThemesScreen = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");

  const { themeSource, setThemeSource, activeQuote } = useAppContext();

  const allDisplayThemes = useMemo(() => {
    const isCustomPhoto =
      typeof themeSource === "object" &&
      themeSource.uri &&
      !ALL_THEMES.some(
        (t) => t.image === themeSource.uri || t.video === themeSource.uri
      );

    if (isCustomPhoto) {
      const myPhotoTheme: ThemeTypes = {
        id: "my-photo-theme",
        image: themeSource.uri,
        isFree: true,
      };
      return [myPhotoTheme, ...ALL_THEMES];
    }

    return ALL_THEMES;
  }, [themeSource]);

  const [filteredThemes, setFilteredThemes] = useState(allDisplayThemes);

  const findInitialThemeId = () => {
    if (typeof themeSource === "object" && themeSource.uri) {
      const currentTheme = allDisplayThemes.find(
        (theme) => (theme.video || theme.image) === themeSource.uri
      );
      return currentTheme ? currentTheme.id : allDisplayThemes[0].id;
    }
    return allDisplayThemes[0].id;
  };

  const [selectedThemeId, setSelectedThemeId] = useState(findInitialThemeId);

  useEffect(() => {
    let newFiltered = allDisplayThemes;

    if (activeFilter !== "All") {
      newFiltered = allDisplayThemes.filter((theme) => {
        if (theme.id === "my-photo-theme") {
          return ["All", "Free"].includes(activeFilter);
        }

        if (activeFilter === "Free") return theme.isFree;
        if (activeFilter === "New") return theme.isNew;
        if (activeFilter === "Seasonal") return theme.category === "Seasonal";
        return false;
      });
    }

    const sortedThemes = [...newFiltered].sort((a, b) => {
      if (a.id === selectedThemeId) return -1;
      if (b.id === selectedThemeId) return 1;
      return 0;
    });

    setFilteredThemes(sortedThemes);
  }, [activeFilter, selectedThemeId, allDisplayThemes]);

  const handleThemePress = (theme: (typeof allDisplayThemes)[0]) => {
    if (theme.id === "my-photo-theme") {
      router.push("/editor");
      return;
    }

    if (theme.isFree) {
      const sourceUri = theme.video || theme.image;
      const source = { uri: sourceUri! };
      setSelectedThemeId(theme.id);
      setThemeSource(source);
      setTimeout(() => router.back(), 200);
    } else {
      router.push("/free-trial-details-screen");
    }
  };

  return (
    <MenuProvider>
      <SafeAreaView className="flex-1 bg-[#050505]">
        {/* Premium Header */}
        <View className="flex-row justify-between items-center px-6 py-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-[#222222]"
          >
            <Feather name="x" size={24} color="white" />
          </TouchableOpacity>

          <Text className="text-white text-lg font-bold tracking-tight">Themes</Text>

          <TouchableOpacity
            onPress={() => router.push("/free-trial-details-screen")}
            className="bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20"
          >
            <Text className="text-emerald-400 text-xs font-bold">Unlock all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Modern Action Bar */}
          <View className="flex-row px-6 py-4 gap-3">
            <TouchableOpacity
              onPress={() => router.push("/editor")}
              className="flex-1 flex-row items-center justify-center bg-[#111111] border border-[#222222] rounded-2xl py-4"
            >
              <Feather name="plus" size={18} color="#10b981" />
              <Text className="text-white ml-2 font-bold">Create</Text>
            </TouchableOpacity>

            <Menu style={{ flex: 1 }}>
              <MenuTrigger
                customStyles={{
                  triggerOuterWrapper: { flex: 1 },
                  triggerWrapper: { flex: 1 },
                }}
              >
                <View className="flex-1 flex-row items-center justify-center bg-[#111111] border border-[#222222] rounded-2xl py-4">
                  <Feather name="sliders" size={18} color="#10b981" />
                  <Text className="text-white ml-2 font-bold">Filters</Text>
                  {activeFilter !== "All" && (
                    <View className="ml-2 w-2 h-2 bg-emerald-500 rounded-full" />
                  )}
                </View>
              </MenuTrigger>

              <MenuOptions
                customStyles={{
                  optionsContainer: {
                    backgroundColor: "#111111",
                    borderRadius: 24,
                    padding: 8,
                    width: 220,
                    marginTop: 50,
                    borderWidth: 1,
                    borderColor: "#222222",
                    shadowColor: "#000",
                    shadowOpacity: 0.5,
                    shadowRadius: 20,
                    elevation: 10,
                  },
                }}
              >
                {FILTERS.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <MenuOption
                      key={filter}
                      onSelect={() => setActiveFilter(filter)}
                      customStyles={{
                        optionWrapper: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingHorizontal: 16,
                          paddingVertical: 14,
                          borderRadius: 16,
                          backgroundColor: isActive ? "rgba(16, 185, 129, 0.1)" : "transparent",
                          marginVertical: 2,
                        },
                      }}
                    >
                      <Text className={`font-bold ${isActive ? "text-emerald-500" : "text-zinc-400"}`}>
                        {filter}
                      </Text>
                      {isActive && <Feather name="check" size={16} color="#10b981" />}
                    </MenuOption>
                  );
                })}
              </MenuOptions>
            </Menu>
          </View>

          {/* Immersive Theme Mixes */}
          <View className="mt-8">
            <View className="px-6 flex-row justify-between items-center mb-6">
              <Text className="text-white text-xl font-bold tracking-tight">Theme mixes</Text>
              <TouchableOpacity
                onPress={() => router.push("/themes/theme-mixes-screen")}
              >
                <Text className="text-zinc-500 text-sm font-bold">See all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 24, paddingRight: 24 }}
            >
              {THEME_MIXES_HALF.map((mix, index) => (
                <Pressable
                  key={index}
                  className="mr-4"
                  onPress={() => router.push("/free-trial-details-screen")}
                >
                  <View className="w-56 h-36 rounded-[32px] overflow-hidden border border-[#222222]">
                    <ImageBackground
                      source={{ uri: mix.image }}
                      className="flex-1 items-center justify-center"
                      resizeMode="cover"
                    >
                      <View className="absolute inset-0 bg-black/40" />
                      <Text className="text-white text-base font-bold text-center px-4">
                        {mix.name}
                      </Text>
                    </ImageBackground>
                  </View>
                </Pressable>
              ))}

              <Pressable
                onPress={() => router.push("/themes/theme-mixes-screen")}
                className="w-40 h-36 rounded-[32px] items-center justify-center bg-[#111111] border border-[#222222]"
              >
                <View className="items-center">
                  <Text className="text-white text-3xl font-bold">+21</Text>
                  <Text className="text-zinc-500 text-xs font-bold mt-1">More</Text>
                </View>
              </Pressable>
            </ScrollView>
          </View>

          {/* Dynamic Editorial Theme Grid */}
          <View className="px-6 mt-12 pb-32">
            <Text className="text-white text-xl font-bold mb-8 tracking-tight">For you</Text>
            <View className="flex-row flex-wrap justify-between">
              {filteredThemes.map((theme, index) => {
                const isSelected = selectedThemeId === theme.id;
                const sourceUri = theme.image || theme.video;

                // Dynamic layout: First item is full width, others are 2 per row
                const isFullWidth = index === 0;
                const cardWidth = isFullWidth ? "w-full" : "w-[48%]";
                const aspectClass = isFullWidth ? "aspect-[16/10]" : "aspect-[9/14]";

                return (
                  <View key={theme.id} className={`${cardWidth} mb-6`}>
                    <Pressable onPress={() => handleThemePress(theme)}>
                      <View
                        className={`${aspectClass} w-full rounded-[36px] relative overflow-hidden border-2 ${isSelected ? "border-emerald-500" : "border-[#111111]"
                          }`}
                      >
                        {sourceUri ? (
                          <Image
                            source={{ uri: sourceUri }}
                            contentFit="cover"
                            style={{
                              position: "absolute",
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                            }}
                          />
                        ) : (
                          <View className="flex-1 bg-zinc-900" />
                        )}

                        {/* Premium Overlays */}
                        <LinearGradient
                          colors={["rgba(0,0,0,0.4)", "transparent", "rgba(0,0,0,0.4)"]}
                          className="absolute inset-0"
                        />

                        {/* Theme Badges */}
                        <View className="absolute top-4 left-4 flex-row gap-2">
                          {theme.id === "my-photo-theme" && (
                            <View className="bg-black/60 w-10 h-10 rounded-full items-center justify-center backdrop-blur-md border border-white/10">
                              <Feather name="user" size={16} color="white" />
                            </View>
                          )}
                          {theme.video && (
                            <View className="bg-black/60 w-10 h-10 rounded-full items-center justify-center backdrop-blur-md border border-white/10">
                              <MaterialCommunityIcons
                                name="motion-play-outline"
                                size={22}
                                color="white"
                              />
                            </View>
                          )}
                        </View>

                        {theme.isFree && !isSelected && theme.id !== "my-photo-theme" && (
                          <View className="absolute top-4 right-4 bg-emerald-500 rounded-full px-3 py-1 shadow-lg">
                            <Text className="text-white text-[9px] font-bold tracking-widest">FREE</Text>
                          </View>
                        )}

                        {/* Preview Center */}
                        <View className="absolute inset-0 items-center justify-center">
                          <Text
                            style={{ textShadowColor: 'rgba(0,0,0,0.5)', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 10 }}
                            className={`text-white font-bold opacity-90 ${isFullWidth ? "text-5xl" : "text-3xl"}`}
                          >
                            Aa
                          </Text>
                        </View>

                        {/* Quick Edit for Selected */}
                        {isSelected && (
                          <View className="absolute inset-0 bg-emerald-500/10 items-center justify-center">
                            <Pressable
                              className="bg-white rounded-full px-8 py-3 shadow-2xl"
                              onPress={() =>
                                router.push({
                                  pathname: "/editor",
                                  params: {
                                    quoteText: activeQuote.text,
                                    quoteAuthor: activeQuote.author,
                                  },
                                })
                              }
                            >
                              <Text className="text-black text-sm font-bold">Customize</Text>
                            </Pressable>
                          </View>
                        )}

                        {/* Selection Indicator for Staggered View */}
                        {isSelected && !isFullWidth && (
                          <View className="absolute bottom-4 left-4 bg-emerald-500 w-8 h-8 rounded-full items-center justify-center">
                            <Feather name="check" size={16} color="white" />
                          </View>
                        )}
                      </View>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </MenuProvider>

  );
};

export default ThemesScreen;

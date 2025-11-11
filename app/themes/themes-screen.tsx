// import { ALL_THEMES, THEME_MIXES_HALF } from "@/constants/constants";
// import { useAppContext } from "@/context/context";
// import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
// import { Image } from "expo-image";
// import { useRouter } from "expo-router";
// import React, { useEffect, useState } from "react";
// import {
//   ImageBackground,
//   Pressable,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const FILTERS = ["All", "Free", "New", "Seasonal", "Most popular", "Recent"];

// const ThemesScreen = () => {
//   const router = useRouter();
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [filteredThemes, setFilteredThemes] = useState(ALL_THEMES);

//   const { themeSource, setThemeSource } = useAppContext();

//   const findInitialTheme = () => {
//     if (typeof themeSource === "object" && themeSource.uri) {
//       return ALL_THEMES.find(
//         (theme) => (theme.video || theme.image) === themeSource.uri
//       );
//     }
//     return undefined;
//   };

//   const [selectedFreeTheme, setSelectedFreeTheme] = useState(() => {
//     const initialTheme = findInitialTheme();
//     return initialTheme && initialTheme.isFree ? initialTheme : null;
//   });

//   useEffect(() => {
//     let newFiltered = ALL_THEMES;

//     if (activeFilter !== "All") {
//       newFiltered = ALL_THEMES.filter((theme) => {
//         if (activeFilter === "Free") return theme.isFree;
//         if (activeFilter === "New") return theme.isNew;
//         if (activeFilter === "Seasonal") return theme.category === "Seasonal";
//         return false;
//       });
//     }

//     if (selectedFreeTheme) {
//       const sortedThemes = [...newFiltered].sort((a, b) => {
//         if (a.id === selectedFreeTheme.id) return -1;
//         if (b.id === selectedFreeTheme.id) return 1;
//         return 0;
//       });
//       setFilteredThemes(sortedThemes);
//     } else {
//       setFilteredThemes(newFiltered);
//     }
//   }, [activeFilter, selectedFreeTheme]);

//   const handleThemePress = (theme: (typeof ALL_THEMES)[0]) => {
//     if (theme.isFree) {
//       const sourceUri = theme.video || theme.image;
//       const source = { uri: sourceUri! };

//       setSelectedFreeTheme(theme);
//       setThemeSource(source);
//       setTimeout(() => router.back(), 200);
//     } else {
//       router.push("/free-trial-details-screen");
//     }
//   };

//   return (
//     <SafeAreaView className="flex-1 bg-[#262e3d]">
//       <View className="flex-row justify-between items-center px-4 py-4">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Feather name="x" size={28} color="white" />
//         </TouchableOpacity>
//         <Text className="text-white text-2xl font-bold">Themes</Text>
//         <TouchableOpacity>
//           <Text className="text-white text-xl">Unlock all</Text>
//         </TouchableOpacity>
//       </View>

//       <ScrollView>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
//         >
//           <TouchableOpacity className="flex-row items-center bg-[#3a4151] rounded-full px-4 py-4 mr-2">
//             <Feather name="plus" size={16} color="white" />
//             <Text className="text-white ml-1 font-semibold">Create</Text>
//           </TouchableOpacity>
//           {FILTERS.map((filter) => (
//             <Pressable
//               key={filter}
//               onPress={() => setActiveFilter(filter)}
//               className={`rounded-3xl px-4 py-4 mx-1 ${
//                 activeFilter === filter ? "bg-white" : "bg-[#3a4151]"
//               }`}
//             >
//               <Text
//                 className={` ${
//                   activeFilter === filter ? "text-black" : "text-white"
//                 }`}
//               >
//                 {filter}
//               </Text>
//             </Pressable>
//           ))}
//         </ScrollView>

//         <View className="px-4 mt-4">
//           <View className="flex-row justify-between items-center mb-2">
//             <Text className="text-white text-xl font-bold">Theme mixes</Text>
//             <TouchableOpacity
//               onPress={() => router.push("/themes/theme-mixes-screen")}
//             >
//               <Text className="text-[#969da8] text-lg">See all</Text>
//             </TouchableOpacity>
//           </View>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={{ paddingRight: 16 }}
//           >
//             {THEME_MIXES_HALF.map((mix, index) => (
//               <Pressable
//                 key={index}
//                 className="mr-3"
//                 onPress={() => router.push("/free-trial-details-screen")}
//               >
//                 <ImageBackground
//                   source={{ uri: mix.image }}
//                   className="w-48 h-32 rounded-2xl items-center justify-center overflow-hidden"
//                   resizeMode="cover"
//                 >
//                   <View className="absolute inset-0 bg-black/30 rounded-2xl" />
//                   <Text className="text-white text-lg font-semibold">
//                     {mix.name}
//                   </Text>
//                 </ImageBackground>
//               </Pressable>
//             ))}

//             <Pressable
//               onPress={() => router.push("/themes/theme-mixes-screen")}
//               className="w-40 h-32 rounded-2xl items-center justify-center bg-[#3a4151]"
//             >
//               <Text className="text-white text-2xl ">+21</Text>
//             </Pressable>
//           </ScrollView>
//         </View>

//         <View className="px-4 mt-6">
//           <Text className="text-white text-xl font-bold mb-2">For you</Text>
//           <View className="flex-row flex-wrap justify-between">
//             {filteredThemes.map((theme) => {
//               const isSelected = selectedFreeTheme?.id === theme.id;

//               const sourceUri = theme.video || theme.image;

//               return (
//                 <View key={theme.id} className="w-1/3 p-1.5">
//                   <Pressable onPress={() => handleThemePress(theme)}>
//                     <View
//                       className={`h-48 w-full rounded-2xl relative overflow-hidden ${
//                         isSelected ? "border border-gray-400" : ""
//                       }`}
//                     >
//                       <Image
//                         source={{ uri: sourceUri }}
//                         contentFit="cover"
//                         style={{
//                           position: "absolute",
//                           top: 0,
//                           bottom: 0,
//                           left: 0,
//                           right: 0,
//                         }}
//                       />

//                       {theme.isFree && !isSelected && (
//                         <View className="absolute top-2 right-2 bg-white rounded-full px-2 py-0.5">
//                           <Text className=" text-xs">Free</Text>
//                         </View>
//                       )}
//                       {theme.video && (
//                         <View className="absolute top-2 left-2">
//                           <MaterialCommunityIcons
//                             name="motion-play-outline"
//                             size={24}
//                             color="white"
//                           />
//                         </View>
//                       )}

//                       <View className="absolute inset-0 bg-black/10 items-center justify-center">
//                         <Text className="text-white text-2xl font-bold">
//                           Aa
//                         </Text>
//                         {isSelected && (
//                           <Pressable className="absolute bottom-2 bg-white/90 rounded-full px-3 py-1" onPress={() => router.push('/editor')}>
//                             <Text className="text-black font-bold text-sm">
//                               Edit
//                             </Text>
//                           </Pressable>
//                         )}
//                       </View>
//                     </View>
//                   </Pressable>
//                 </View>
//               );
//             })}
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ThemesScreen;

import { ALL_THEMES, THEME_MIXES_HALF } from "@/constants/constants";
import { useAppContext } from "@/context/context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
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
      const myPhotoTheme = {
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
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center px-4 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="x" size={28} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Themes</Text>
        <TouchableOpacity>
          <Text className="text-white text-xl">Unlock all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
        >
          <TouchableOpacity
            onPress={() => router.push("/editor")}
            className="flex-row items-center bg-[#3a4151] rounded-full px-4 py-4 mr-2"
          >
            <Feather name="plus" size={16} color="white" />
            <Text className="text-white ml-1 font-semibold">Create</Text>
          </TouchableOpacity>
          {FILTERS.map((filter) => (
            <Pressable
              key={filter}
              onPress={() => setActiveFilter(filter)}
              className={`rounded-3xl px-4 py-4 mx-1 ${
                activeFilter === filter ? "bg-white" : "bg-[#3a4151]"
              }`}
            >
              <Text
                className={` ${
                  activeFilter === filter ? "text-black" : "text-white"
                }`}
              >
                {filter}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View className="px-4 mt-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-white text-xl font-bold">Theme mixes</Text>
            <TouchableOpacity
              onPress={() => router.push("/themes/theme-mixes-screen")}
            >
              <Text className="text-[#969da8] text-lg">See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 16 }}
          >
            {THEME_MIXES_HALF.map((mix, index) => (
              <Pressable
                key={index}
                className="mr-3"
                onPress={() => router.push("/free-trial-details-screen")}
              >
                <ImageBackground
                  source={{ uri: mix.image }}
                  className="w-48 h-32 rounded-2xl items-center justify-center overflow-hidden"
                  resizeMode="cover"
                >
                  <View className="absolute inset-0 bg-black/30 rounded-2xl" />
                  <Text className="text-white text-lg font-semibold">
                    {mix.name}
                  </Text>
                </ImageBackground>
              </Pressable>
            ))}
            <Pressable
              onPress={() => router.push("/themes/theme-mixes-screen")}
              className="w-40 h-32 rounded-2xl items-center justify-center bg-[#3a4151]"
            >
              <Text className="text-white text-2xl ">+21</Text>
            </Pressable>
          </ScrollView>
        </View>

        <View className="px-4 mt-6">
          <Text className="text-white text-xl font-bold mb-2">For you</Text>
          <View className="flex-row flex-wrap justify-between">
            {filteredThemes.map((theme) => {
              const isSelected = selectedThemeId === theme.id;
              const sourceUri = theme.image || theme.video;

              return (
                <View key={theme.id} className="w-1/3 p-1.5">
                  <Pressable onPress={() => handleThemePress(theme)}>
                    <View
                      className={`h-48 w-full rounded-2xl relative overflow-hidden ${
                        isSelected ? "border border-gray-400" : ""
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
                        <View className="flex-1 bg-gray-700" />
                      )}

                      {theme.id === "my-photo-theme" && (
                        <View className="absolute top-2 left-2 bg-black/50 p-1.5 rounded-full">
                          <Feather name="user" size={12} color="white" />
                        </View>
                      )}

                      {theme.isFree &&
                        !isSelected &&
                        theme.id !== "my-photo-theme" && (
                          <View className="absolute top-2 right-2 bg-white rounded-full px-2 py-0.5">
                            <Text className=" text-xs">Free</Text>
                          </View>
                        )}

                      {theme.video && (
                        <View className="absolute top-2 left-2">
                          <MaterialCommunityIcons
                            name="motion-play-outline"
                            size={24}
                            color="white"
                          />
                        </View>
                      )}

                      <View className="absolute inset-0 bg-black/10 items-center justify-center">
                        <Text className="text-white text-2xl font-bold">
                          Aa
                        </Text>
                        {/* {isSelected && (
                          <Pressable
                            className="absolute bottom-2 bg-white/90 rounded-full px-3 py-1"
                            onPress={() => router.push("/editor")}
                          >
                            <Text className="text-black font-bold text-sm">
                              Edit
                            </Text>
                          </Pressable>
                        )} */}

                        {isSelected && (
                          <Pressable
                            className="absolute bottom-2 bg-white/90 rounded-full px-3 py-1"
                            onPress={() =>
                              router.push({
                                pathname: "/editor",
                                // 6. PASS the active quote's text and author as params
                                params: {
                                  quoteText: activeQuote.text,
                                  quoteAuthor: activeQuote.author,
                                },
                              })
                            }
                          >
                            <Text className="text-black font-bold text-sm">
                              Edit
                            </Text>
                          </Pressable>
                        )}
                      </View>
                    </View>
                  </Pressable>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThemesScreen;

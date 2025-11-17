import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Href, router } from "expo-router";

export const TOPIC_SECTIONS = [
  {
    title: "Most popular",
    items: [
      { name: "Mental toughness", isLocked: true },
      { name: "Feeling blessed", isLocked: true },
      { name: "Self-worth", isLocked: true },
      { name: "Bible verses", isLocked: true },
      { name: "Love", isLocked: true },
      { name: "Fitness", isLocked: true },
      { name: "Encouraging words", isLocked: true },
      { name: "Affirmations", isLocked: true },
    ],
  },
  {
    title: "Personal growth",
    items: [
      { name: "Self-esteem", isLocked: true },
      { name: "Self-development", isLocked: true },
      { name: "Start change", isLocked: true },
      { name: "Be strong", isLocked: true },
      { name: "Accept yourself", isLocked: true },
      { name: "Positive thinking", isLocked: true },
      { name: "Happiness", isLocked: true },
      { name: "Growth", isLocked: true },
      { name: "Self-love", isLocked: true },
      { name: "New beginnings", isLocked: true },
      { name: "Love yourself", isLocked: true },
      { name: "Gratitude", isLocked: true },
    ],
  },
  {
    title: "Relationships",
    items: [
      { name: "Forgiveness", isLocked: true },
      { name: "Trust", isLocked: true },
      { name: "Being single", isLocked: true },
      { name: "Relationships", isLocked: true },
      { name: "Social anxiety", isLocked: true },
      { name: "Introvert", isLocked: true },
      { name: "Unconditional love", isLocked: true },
      { name: "Marriage", isLocked: true },
      { name: "Cheating", isLocked: true },
      { name: "Friendship", isLocked: true },
      { name: "Loyalty", isLocked: true },
    ],
  },
  {
    title: "Work & Productivity",
    items: [
      { name: "Success", isLocked: true },
      { name: "Discipline", isLocked: true },
      { name: "Focus", isLocked: true },
    ],
  },
];
export const SETTINGS_DATA = [
  {
    title: "MAKE IT YOURS",
    items: [
      {
        name: "Content Preference",
        route: "/settings/content-preferences-screen" as Href,
      },
      {
        name: "Gender identity",
        route: "/settings/gender-identity-screen" as Href,
      },
      {
        name: "Muted content",
        route: "/settings/muted-content-screen" as Href,
      },
      { name: "Language" },
      { name: "Name", route: "/settings/name-screen" as Href },
      { name: "Sound", route: "/settings/sound-screen" as Href },
      { name: "Voice", route: "/settings/voice-screen" as Href },
      {
        name: "Add Siri Shortcuts",
        route: "/settings/siri-shortcuts-screen" as Href,
      },
    ],
  },
  {
    title: "ACCOUNT",
    items: [{ name: "Sign in", route: "/settings/sign-in-screen" as Href }],
  },
  {
    title: "SUPPORT US",
    items: [
      { name: "Share Motivation" },
      {
        name: "More by Monkey Taps",
        route: "/settings/monkey-taps-screen" as Href,
      },
      { name: "Leave us a review" },
      { name: "Give feedback" },
    ],
  },
  {
    title: "HELP",
    items: [{ name: "Help" }],
  },
  {
    title: "FOLLOW US",
    items: [{ name: "Success" }, { name: "Discipline" }, { name: "Focus" }],
  },
  {
    title: "OTHER",
    items: [{ name: "Success" }, { name: "Discipline" }, { name: "Focus" }],
  },
];

export const THEME_MIXES = [
  {
    name: "Seasonal",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800",
  },
  {
    name: "Most popular",
    image:
      "https://images.unsplash.com/photo-1447014421976-7f4415b8e863?q=80&w=800",
  },
  {
    name: "Plain",
    image:
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800",
  },
  {
    name: "ANIMATED",
    image:
      "https://images.unsplash.com/photo-1551436239-23b965fca66b?q=80&w=800",
  },
  {
    name: "Abstract",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800",
  },
  {
    name: "Natural phenomena",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800",
  },
  {
    name: "MOTIVATION",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800",
  },
  {
    name: "COSMOS",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
  },
  {
    name: "TROPICAL",
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800",
  },
  {
    name: "Luxury",
    image:
      "https://images.unsplash.com/photo-1589421553457-427776151b68?q=80&w=800",
  },
  {
    name: "HIGH VISIBILITY",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800",
  },
  {
    name: "People/community",
    image:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=800",
  },
];

export const ALL_THEMES = [
  {
    id: 1,
    video:
      "https://media.tenor.com/zP71zGJgjGkAAAAM/ocean-waves-ocean-waves-relaxing.gif",
    isNew: true,
    isFree: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=800",
    isFree: false,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800",
    category: "Seasonal",
    isFree: false,
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz9owKmB2REQbVnQFNL7fdmn97Cw8uqzHYGQ&s",
    isNew: true,
    isFree: false,
  },
  {
    id: 5,
    image:
      "https://thumbs.dreamstime.com/b/amazing-surreal-background-crescent-moon-rising-above-serene-s-sea-sunset-sky-glowing-horizon-bright-stars-elements-118064752.jpg",
    isFree: true,
  },
  {
    id: 6,
    image:
      "https://thumbs.dreamstime.com/b/serene-spa-background-stones-candles-water-flowers-steam-relaxation-meditation-348350169.jpg",
    isFree: false,
  },
];

export const THEME_MIXES_HALF = [
  {
    name: "Seasonal",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800",
  },
  {
    name: "Most popular",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
  },
  {
    name: "Plain",
    image:
      "https://images.unsplash.com/photo-1554034483-04aff2358e72?q=80&w=800",
  },
  {
    name: "Animated",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800",
  },
];

export const COLORS = [
  "#FF00FF",
  "#000000",
  "#808080",
  "#C0C0C0",
  "#FFFFFF",
  "#FFC0CB",
  "#FF0000",
];

export const QUOTES = [
  {
    id: "1",
    text: "Show people, don't tell people.",
    author: "-David Goggins",
    date: "Thu, Dec 25, 2025",
  },
  {
    id: "2",
    text: "The only way to do great work is to love what you do.",
    author: "-Steve Jobs",
    date: "Thu, Dec 25, 2025",
  },
  {
    id: "3",
    text: "The journey of a thousand miles begins with a single step.",
    author: "-Lao Tzu",
    date: "Thu, Dec 25, 2025",
  },
  {
    id: "4",
    text: "That which does not kill us makes us stronger.",
    author: "-Friedrich Nietzsche",
    date: "Thu, Dec 25, 2025",
  },
  {
    id: "5",
    text: "That which does not kill us makes us stronger.",
    author: "-Friedrich Nietzsche",
    date: "Thu, Dec 25, 2025",
  },
];

export const userItems = [
  {
    name: "Favorites",
    icon: "heart",
    isLocked: false,
    // onPress: () => router.push("./favorites-screen"),
    onPress: () => router.push("/explore-topics/favorites-screen"),
  },
  {
    name: "My collections",
    icon: "bookmark",
    isLocked: false,
    onPress: () =>
      router.push({
        // pathname: "./collections-screen",
        pathname: "/explore-topics/collections-screen",
        params: { display: "collections" },
      }),
  },
  {
    name: "My own quotes",
    icon: "edit-3",
    isLocked: false,
    // onPress: () => router.push("./user-quotes"),
    onPress: () => router.push("/explore-topics/user-quotes"),
  },
  {
    name: "Recent quotes",
    icon: "shuffle",
    isLocked: true,
    onPress: () => router.push("/free-trial-details-screen"),
  },
];

export const mostPopular = [
  {
    name: "Mental toughness",
    icon: "brain",
    lib: MaterialCommunityIcons,
    isLocked: true,
  },
  { name: "Feeling blessed", icon: "sunny", lib: Ionicons, isLocked: true },
  { name: "Self-worth", icon: "sparkles", lib: Ionicons, isLocked: true },
  { name: "Bible verses", icon: "bible", lib: FontAwesome5, isLocked: true },
];

export const forYou = [
  { name: "Listening", icon: "ear", lib: Ionicons, isLocked: true },
  { name: "Family", icon: "home", lib: Feather, isLocked: true },
  { name: "Fake people", icon: "people", lib: Ionicons, isLocked: true },
  {
    name: "Honesty",
    icon: "shield-check",
    lib: MaterialCommunityIcons,
    isLocked: true,
  },
  {
    name: "Setting boundaries",
    icon: "fence",
    lib: MaterialCommunityIcons,
    isLocked: true,
  },
];

export const freeToday = [
  { name: "Finding purpose", icon: "compass", lib: Feather, isLocked: false },
  {
    name: "Mental health",
    icon: "head-side-virus",
    lib: FontAwesome5,
    isLocked: false,
  },
  { name: "Life balance", icon: "git-compare", lib: Feather, isLocked: false },
  { name: "Start your day", icon: "sunrise", lib: Feather, isLocked: false },
  { name: "Resilience", icon: "shield", lib: Feather, isLocked: false },
  { name: "Business", icon: "trending-up", lib: Feather, isLocked: false },
];

export const personalGrowth = [
  { name: "Growth", icon: "leaf", lib: Ionicons, isLocked: true },
  {
    name: "Self-love",
    icon: "hand-heart",
    lib: MaterialCommunityIcons,
    isLocked: true,
  },
  { name: "New beginnings", icon: "sun", lib: Feather, isLocked: true },
  { name: "Love yourself", icon: "heart", lib: Feather, isLocked: true },
  { name: "Gratitude", icon: "pray", lib: FontAwesome5, isLocked: true },
  {
    name: "Moving on",
    icon: "arrow-right-circle",
    lib: Feather,
    isLocked: true,
  },
];

type ImageTheme = {
  id: number;
  type: "image";
  value: { uri: string };
  video?: string; // Video is optional on image themes
  isVideo: boolean;
  textColor?: string;
};

type ColorTheme = {
  id: number;
  type: "color";
  value: string; // The hex color code
  textColor: string;
};

// 2. DEFINE the main Theme type as a union of the two
export type Theme = ImageTheme | ColorTheme;

export const THEMES: Theme[] = [
  { id: 1, type: "color", value: "#000000", textColor: "#FFFFFF" },

  {
    id: 2,
    type: "image",
    value: {
      uri: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800",
    },
    isVideo: true,
  },
  { id: 3, type: "color", value: "#4A4A4A", textColor: "#FFFFFF" },

  { id: 4, type: "color", value: "#F2D7E7", textColor: "#000000" },

  {
    id: 5,
    type: "image",
    value: {
      uri: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800",
    },
    textColor: "black",
    isVideo: false,
  },

  { id: 6, type: "color", value: "#1E1E2F", textColor: "#FFFFFF" },
];

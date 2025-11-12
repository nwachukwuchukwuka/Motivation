import { LetterCaseStyle } from "@/components/TextControls";
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

export type ThemeSource =
  | {
      uri?: string;
      color?: string;
    }
  | number;

export type Quote = {
  id: string;
  text: string;
  date: string;
};

export type Collection = {
  id: string;
  name: string;
  quoteIds: string[];
};

const ALL_QUOTES: Quote[] = [
  {
    id: "1",
    text: "I live by 3 simple rules: Love needs action. Trust needs proof. Sorry needs change.",
    date: "Wed, Nov 12, 2025",
  },
  {
    id: "2",
    text: "The best way to predict the future is to create it.",
    date: "Tue, Oct 28, 2025",
  },
  {
    id: "3",
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    date: "Mon, Sep 15, 2025",
  },
];

type AppContextType = {
  allQuotes: Quote[];
  collections: Collection[];
  themeSource: ThemeSource;
  setThemeSource: (source: ThemeSource) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  fontFamily: string;
  setFontFamily: (font: string) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  textAlign: "center" | "left" | "right";
  setTextAlign: (align: "center" | "left" | "right") => void;
  letterCaseStyle: LetterCaseStyle;
  setLetterCaseStyle: (style: LetterCaseStyle) => void;
  textShadowStyle: object;
  activeQuote: { text: string; author: string };
  setActiveQuote: (quote: { text: string; author: string }) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;

  addQuoteToCollection: (collectionId: string, quoteId: string) => void;
  isQuoteInCollection: (collectionId: string, quoteId: string) => boolean;
  quoteToAdd: Quote | null;
  setQuoteToAdd: (quote: Quote | null) => void;

  favoriteQuoteIds: string[];
  toggleFavorite: (quoteId: string) => void;
  isFavorite: (quoteId: string) => boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const defaultBackgroundImage = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5hYBeUGdL0vrfC6HWYZWs6h24FmRNSx61SA&s",
  };
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const [themeSource, setThemeSource] = useState<{ uri: string } | number>(
    defaultBackgroundImage
  );
  const [fontSize, setFontSize] = useState(28);
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [textAlign, setTextAlign] = useState<"center" | "left" | "right">(
    "center"
  );
  const [letterCaseStyle, setLetterCaseStyle] =
    useState<LetterCaseStyle>("filled");
  const [activeQuote, setActiveQuote] = useState({
    text: "Show people,\ndon't tell people.",
    author: "-David Goggins",
  });

  const [collections, setCollections] = useState<Collection[]>([]);
  const [quoteToAdd, setQuoteToAdd] = useState<Quote | null>(null);
  const [allQuotes, setAllQuotes] = useState<Quote[]>(ALL_QUOTES);
  const [favoriteQuoteIds, setFavoriteQuoteIds] = useState<string[]>(["1"]);

  const toggleFavorite = (quoteId: string) => {
    setFavoriteQuoteIds((prevIds) => {
      if (prevIds.includes(quoteId)) {
        return prevIds.filter((id) => id !== quoteId);
      } else {
        return [...prevIds, quoteId];
      }
    });
  };

  const isFavorite = (quoteId: string): boolean => {
    return favoriteQuoteIds.includes(quoteId);
  };

  console.log("isFavorite in contect", isFavorite);

  const addCollection = (name: string) => {
    const newCollection: Collection = {
      id: Date.now().toString(),
      name,
      quoteIds: [],
    };
    setCollections((prev) => [...prev, newCollection]);
  };

  const addQuoteToCollection = (collectionId: string, quoteId: string) => {
    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id === collectionId) {
          if (collection.quoteIds.includes(quoteId)) {
            return {
              ...collection,
              quoteIds: collection.quoteIds.filter((id) => id !== quoteId),
            };
          }
          return { ...collection, quoteIds: [...collection.quoteIds, quoteId] };
        }
        return collection;
      })
    );
  };

  const isQuoteInCollection = (
    collectionId: string,
    quoteId: string
  ): boolean => {
    const collection = collections.find((c) => c.id === collectionId);
    return collection?.quoteIds.includes(quoteId) ?? false;
  };

  const textShadowStyle = useMemo(() => {
    switch (letterCaseStyle) {
      case "thin":
        return {
          textShadowColor: "rgba(255, 255, 255, 0.8)",
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 2,
        };
      case "thick":
        return {
          textShadowColor: "rgba(255, 255, 255, 0.9)",
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 8,
        };
      case "filled":
      default:
        return {
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: 0, height: 2 },
          textShadowRadius: 10,
        };
    }
  }, [letterCaseStyle]);

  const value = {
    themeSource,
    setThemeSource,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    textColor,
    setTextColor,
    textAlign,
    setTextAlign,
    letterCaseStyle,
    setLetterCaseStyle,
    textShadowStyle,
    activeQuote,
    setActiveQuote,
    isAuthenticated,
    setIsAuthenticated,

    collections,
    addCollection,
    addQuoteToCollection,
    isQuoteInCollection,
    quoteToAdd,
    setQuoteToAdd,
    allQuotes,

    favoriteQuoteIds,
    toggleFavorite,
    isFavorite,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

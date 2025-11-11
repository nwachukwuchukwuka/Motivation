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

type AppContextType = {
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
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const defaultBackgroundImage = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5hYBeUGdL0vrfC6HWYZWs6h24FmRNSx61SA&s",
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

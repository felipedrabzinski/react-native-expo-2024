import { useFonts } from "expo-font";
import { createContext, useContext } from "react";

const FontContext = createContext({})

export function FontProvider({children}) {
    const [loaded, error] = useFonts ({
        regular: require("../../assets/fonts/")
    });
  return <FontContext.Provider value={{}}>{children}</FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("useFont must be used within a FonProvider");
    }
    return context;
}
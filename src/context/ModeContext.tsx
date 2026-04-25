import React, { createContext, useContext, useState, ReactNode } from "react";

type Mode = "developer" | "qa";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType>({
  mode: "developer",
  toggleMode: () => {},
  setMode: () => {},
});

export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("developer");
  const toggleMode = () => setMode((m) => (m === "developer" ? "qa" : "developer"));
  return (
    <ModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

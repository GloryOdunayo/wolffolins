// components/AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type AppContextType = {
  currentComponent: string | null;
  setCurrentComponent: (component: string | null) => void;
  textColor: string;
  setTextColor: (color: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [currentComponent, setCurrentComponent] = useState<string | null>(null);
  const [textColor, setTextColor] = useState<string>(''); // Default text color

  return (
    <AppContext.Provider value={{ currentComponent, setCurrentComponent, textColor, setTextColor }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

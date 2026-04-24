"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface PreloaderContextType {
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shown = sessionStorage.getItem("jzp-preloader-shown");
    if (shown) {
      setIsLoading(false);
    }
  }, []);

  return (
    <PreloaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export const usePreloader = () => useContext(PreloaderContext);

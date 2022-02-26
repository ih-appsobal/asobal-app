import React, { ReactNode } from 'react'
import { createContext, useState, useMemo } from "react";

interface TitleContextProps {
  title: string,
  setTitle: (title: string) => void
}

export const TitleContext = createContext<TitleContextProps>({
  title: '',
  setTitle: (string) => {}
});

export function TitleContextProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string>('');

  const value = useMemo(() => ({
    title,
    setTitle,
  }), [title, setTitle]);

  return <TitleContext.Provider value={value}>{children}</TitleContext.Provider>;
}
'use client';
import React, { useState } from 'react';
import { createContext } from 'react';
import {
  ActiveSectionContextProps,
  ActiveSectionContextType,
  SectionName,
} from '@/types/ActiveSectionContextProvider';

export const SectionContextProvider =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); //we need to keep track of the last click time to avoid setting the active section when the user clicks on a link

  return (
    <SectionContextProvider.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </SectionContextProvider.Provider>
  );
}

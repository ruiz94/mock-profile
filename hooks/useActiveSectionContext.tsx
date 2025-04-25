import { SectionContextProvider } from '@/context/active-section-context';
import { useContext } from 'react';

export default function useActiveSectionContext() {
  const context = useContext(SectionContextProvider);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    );
  }

  return context;
}

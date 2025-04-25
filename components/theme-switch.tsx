'use client';
import useThemeContext from '@/hooks/useThemeContext';
import React, { useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { theme, handleThemeSwitch } = useThemeContext();

  return (
    <button
      className='fixed bottom-5 right-5 bg-white/40 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-black/[0.2] border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all cursor-pointer dark:bg-gray-950'
      onClick={handleThemeSwitch}
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </button>
  );
}

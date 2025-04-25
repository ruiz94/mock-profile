'use client';
// import React from 'react'
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='group flex items-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full gap-2 justify-center outline-none transition-all focus:scale-110 hover:scale-110  active:scale-105 hover:bg-gray-950 cursor-pointer disabled:scale-100 disabled:bg-gray-900/65 dark:bg-white/10 dark:hover:bg-white/20'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </>
      )}
    </button>
  );
}

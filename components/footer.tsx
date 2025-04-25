import React from 'react';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 text-xs'>
        &copy; {new Date().getFullYear()} Armando. All rights reserved.
        <br />
        <p>
          <span className='font-semibold'>About this website:</span> build with
          React.js, Next.js ( App Router & Server Actions ), Typescript,
          Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </small>
    </footer>
  );
}

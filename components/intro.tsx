'use client';
import Image from 'next/image';
import React from 'react';
import ProfileImg from './../public/profile-example.jpg';
import { motion } from 'motion/react';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import useActiveSectionContext from '@/hooks/useActiveSectionContext';
import { useInView } from 'react-intersection-observer';
import useSectionInView from '@/hooks/useSectionInView';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28'
      id='home'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              duration: 0.2,
            }}
          >
            <Image
              src={ProfileImg}
              alt='Armando Ruiz'
              height={192}
              width={192}
              priority={true}
              quality={95}
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl object-top'
            />
          </motion.div>

          <motion.span
            className='text-4xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>{`Hello, I am Thena.`}</span> {`I'm a `}{' '}
        <span className='font-bold'>front-end developer</span> with{' '}
        <span className='font-bold'>6 years</span> of experience. I enjoy
        building <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>ReactJS (Next.js)</span>
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10'
          href='/CV.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <div className='flex w-full justify-center items-center gap-4 sm:w-auto'>
          <a
            className='bg-white p-4 text-gray-700 flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950  active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white/80'
            href='https://linkedin.com'
            target='_blank'
          >
            <BsLinkedin />
          </a>
          <a
            className='bg-white p-4 text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer text-[1.35rem] border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white/80'
            href='https://linkedin.com'
            target='_blank'
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'motion/react';
import useSectionInView from '@/hooks/useSectionInView';

export default function About() {
  const { ref } = useSectionInView('About', 0.75);

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati
        distinctio maiores quod aperiam illum quis, velit aliquid dolorem non
        deserunt ad odit eos est eaque hic. Reiciendis, blanditiis illum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum iure
        quo repudiandae dolorum vel officia dignissimos ipsam et, perspiciatis,
        minus impedit nobis? Blanditiis, cupiditate quos est facere magnam
        numquam!
      </p>
    </motion.section>
  );
}

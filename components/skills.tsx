'use client';
import React from 'react';
import SectionHeading from './section-heading';
import useSectionInView from '@/hooks/useSectionInView';
import { skillsData } from '@/lib/data';
import { motion } from 'motion/react';
import { animate, delay } from 'motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};
export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.5);
  return (
    <section
      ref={ref}
      id='skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.5 }}
            // transition={{ delay: 0.175 }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

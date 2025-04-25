'use client';
import useSectionInView from '@/hooks/useSectionInView';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'motion/react';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.75);

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='scroll-mt-28 mb-28 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/70'>
        Please contact me directly at{' '}
        <a href='mailto:example@gmail.com'>example@gmail.com</a> or through this
        form
      </p>
      <form
        action={async (formData: FormData) => {
          const result = await sendEmail(formData);
          if ('error' in result) {
            toast.error('Error sending email ' + result.error);
            // alert('Error sending email ' + result.error);
            return;
          }
          if ('data' in result) {
            toast.success('Email sent successfully');
            // alert('Email sent successfully');
          }
        }}
        className='mt-8 flex flex-col gap-4 dark:text-black'
      >
        <input
          type='email'
          name='email'
          placeholder='Your email'
          className='rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-gray-500 focus:ring-gray-500 dark:outline-none'
          required
          maxLength={500}
        />
        <textarea
          name='message'
          placeholder='Your message'
          className='rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-gray-500 focus:ring-gray-500 h-52 dark:outline-none'
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

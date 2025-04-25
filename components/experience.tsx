'use client';
import useSectionInView from '@/hooks/useSectionInView';
import React from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import useThemeContext from '@/hooks/useThemeContext';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.75);
  const { theme } = useThemeContext();
  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor='#9ca3af'>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(225, 229, 235, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid #9ca3af',
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === 'light' ? '#f3f4f6' : '#1f2937',
                boxShadow: 'none',
                fontSize: '2rem',
                border: '1px solid rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 className='font-semibold capitalize'>{experience.title}</h3>
              <p className='font-normal !mt-0'>{experience.location}</p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/60'>
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

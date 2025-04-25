'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import useSectionInView from '@/hooks/useSectionInView';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

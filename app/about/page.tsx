'use client';

import { Reveal } from '@/components/ui/reveal';
import Image from 'next/image';
export default function About()
{

  return (
    <div >
      <header className='h-[30vh] sm:h-[60vh] bg-[url("/assets/about/cover.webp")] bg-cover bg-bottom sm:bg-fixed bg-[0%_20%]'>
        <div className='h-full bg-black/45 flex items-center justify-center sm:justify-start px-10 sm:px-16 lg:px-24 xl:px-84'>
          <h1 className='text-4xl sm:text-6xl font-bold text-white tracking-tight'>About Us</h1>
        </div>
      </header>
      <div className='px-1 sm:px-16 lg:px-24 xl:px-56 space-y-16 text-zinc-800'>

        <div className='shadow-sm bg-white px-5 py-20 sm:p-28'>
          <Reveal>
            <div className='text-xl sm:text-2xl text-justify space-y-4 sm:space-y-8 max-w-prose'>
              <div className='relative h-40 w-40 sm:h-70 sm:w-70 aspect-square rounded-3xl overflow-hidden inline-block float-left mr-8'>
                <Image src={ '/assets/about/julia-portrait.jpg' } alt='3 year olds playing' fill className='object-cover object-[50%_25%]' />
              </div>
              <p className='inline'>Hi there! I&apos;m Julia Boakye-Yiadom, and I truly love working with young children. My teaching journey started six years ago at Rocky Mountain Elementary Pre-K, where I was a teacher&apos;s aide. From there, I gained valuable experience supporting special needs students at Foothill Elementary and then spent time as a substitute teacher in various preschools and daycares around Utah. All of these experiences have prepared me well for my favorite role yet – leading my own preschool, which is now in its second year!</p>
              <br />
              <p>What I find most rewarding about teaching is seeing that spark when a child understands something new and knowing I helped them get there. I really believe in building strong connections with my students so they know I&apos;m their biggest cheerleader and advocate. I hope that helps them feel motivated to learn and grow.</p>
              <p>I&apos;m dedicated to creating a fun and engaging learning environment where children learn through hands-on activities and play. I truly believe this individualized approach helps them thrive. I&apos;m so excited about the possibility of working with your child, and I can&apos;t wait to meet you both!</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
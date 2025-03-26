'use client';

import Image from 'next/image';
export default function About()
{

  return (
    <div className='min-h-[calc(100vh-9rem)]'>
      <header className='h-[60vh] bg-[url("/assets/about/cover.webp")] bg-cover bg-bottom bg-fixed bg-[0%_20%]'>
        <div className='h-full bg-black/60 flex items-center px-10 sm:px-16 lg:px-24 xl:px-84'>
          <h1 className='text-6xl font-bold text-white tracking-tight'>About Us</h1>
        </div>
      </header>
      <div className='px-10 sm:px-16 lg:px-24 xl:px-84 space-y-16 text-zinc-800'>

        <div  className='shadow-sm flex justify-center bg-white min-h-screen'>
          <div className='text-2xl text-justify space-y-8 max-w-prose py-36'>
            <div className='relative h-70 w-70 aspect-square rounded-3xl overflow-hidden mx-auto inline-block float-left mr-8'>
              <Image src={ '/assets/about/julia-portrait.jpg' } alt='3 year olds playing' fill className='object-cover object-[50%_25%]' />
            </div>
            <p className='inline'>Hi there! I&apos;m Julia Boakye-Yiadom, and I truly love working with young children. My teaching journey started six years ago at Rocky Mountain Elementary Pre-K, where I was a teacher&apos;s aide. From there, I gained valuable experience supporting special needs students at Foothill Elementary and then spent time as a substitute teacher in various preschools and daycares around Utah. All of these experiences have prepared me well for my favorite role yet – leading my own preschool, which is now in its second year!</p>
            <br />
            <p>What I find most rewarding about teaching is seeing that spark when a child understands something new and knowing I helped them get there. I really believe in building strong connections with my students so they know I&apos;m their biggest cheerleader and advocate. I hope that helps them feel motivated to learn and grow.</p>
            <p>I&apos;m dedicated to creating a fun and engaging learning environment where children learn through hands-on activities and play. I truly believe this individualized approach helps them thrive. I&apos;m so excited about the possibility of working with your child, and I can&apos;t wait to meet you both!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
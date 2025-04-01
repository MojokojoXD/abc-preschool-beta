'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CircleCheck } from 'lucide-react';
import { FieldTripCarousel } from './_components/FieldTripCarousel';
import Image from 'next/image';
import { Reveal } from '@/components/ui/reveal';
export default function Curriculum()
{
  const scrollLocation = useSearchParams().get( 'scroll' );

  useEffect( () =>
  {
    if ( !scrollLocation ) return;

    const locationElement = document.getElementById( scrollLocation )!;
    locationElement.scrollIntoView( { behavior: 'smooth' } );

  }, [ scrollLocation ] );

  return (
    <div >
      <header className='h-[25vh] sm:h-[60vh] bg-[url("/curriculum-cover.jpg")] bg-cover bg-center sm:bg-fixed bg-[0%_20%]'>
        <div className='h-full bg-black/50 flex items-center justify-center sm:justify-start px-10 sm:px-16 lg:px-24 xl:px-84'>
          <h1 className='text-4xl sm:text-6xl font-bold text-white tracking-tight'>Curriculum</h1>
        </div>
      </header>
      <div className='px-1 sm:px-16 lg:px-24 xl:px-56 space-y-16 text-zinc-800' id='__3-4program'>
        <div className='bg-white py-20 sm:p-28 shadow-sm'>
          <div className='grid sm:grid-cols-2 sm:auto-rows-min rounded-2xl overflow-hidden text-xl sm:text-2xl'>
            
            <div className='bg-teal-400 py-14 px-8 sm:px-12 row-span-2 border-t-8 border-b-4 border-s-8 border-e-4 flex flex-col' id='__3-4'>
              <Reveal className='space-y-8'>
                <h2 className='text-3xl sm:text-4xl font-bold text-center'>3 & 4</h2>
                <p>Our 3/4 year old program focuses on foundational skill such as:</p>
                <ul className='space-y-8 list-inside'>
                  <li><CircleCheck className='inline mr-2.5' />Name recognition and writing</li>
                  <li><CircleCheck className='inline mr-2.5' />Color and Shape identification</li>
                  <li><CircleCheck className='inline mr-2.5' />Number recognition(1-10)</li>
                  <li><CircleCheck className='inline mr-2.5' />Letter recognition and phonics introduction</li>
                  <li><CircleCheck className='inline mr-2.5' />Social development and vocabulary expansion</li>
                  <li><CircleCheck className='inline mr-2.5' />Music appreciation</li>
                </ul>
              </Reveal>
            </div>
            <div className='overflow-hidden sm:rounded-tr-3xl h-fit bg-center w-full border-t-8 border-b-4 border-e-8 border-s-4'>
              <Image src={ '/assets/curriculum/3-4_curriculum.webp' } alt='3 year olds playing' height={ 580 } width={ 660 } className='object-fit h-[300px] sm:h-[440px]' />
            </div>
            <div className='pt-14 pb-40 px-8 sm:px-12 bg-primary/80 row-span-2 border-y-4 border-e-8 border-s-4' id='__4-5'>
              <Reveal className='space-y-8'>
                <h2 className='text-3xl sm:text-4xl font-bold text-center'>4 & 5</h2>
                <p>Our 4/5 year old program builds upon these foundations emphasizing:</p>
                <ul className='space-y-8 list-inside'>
                  <li><CircleCheck className='inline mr-2.5' />Advanced letter recognition and phonics</li>
                  <li><CircleCheck className='inline mr-2.5' />Word families and early reading(Bob Books)</li>
                  <li><CircleCheck className='inline mr-2.5' />Number recognition and counting(1-100)</li>
                  <li><CircleCheck className='inline mr-2.5' />Introduction to basic addition and subtraction(number sentences)</li>
                  <li><CircleCheck className='inline mr-2.5' />Science exploration</li>
                  <li><CircleCheck className='inline mr-2.5' />Personal Informatin(phone number and address)</li>
                  <li><CircleCheck className='inline mr-2.5' />Musical enrichment</li>
                </ul>
              </Reveal>
            </div>
            <div className='h-fit w-full overflow-hidden border-4 border-s-8'>
              <Image src={ '/assets/curriculum/4-5_curriculum.webp' } alt='3 year olds playing' height={ 580 } width={ 660 } className='object-fit h-[300px] sm:h-[400px]' />
            </div>
            
            <div className='bg-purple-300 py-14 px-8 sm:px-12 sm:rounded-b-3xl border-8 border-t-4 border-e-4'>
              <Reveal className='space-y-8'>
                <h2 className='text-3xl sm:text-4xl font-bold text-center'>Field Trips</h2>
                <p>Both classes participate in monthly field trips, extending learning beyond the classroom.</p>
                <div className='space-y-4'>
                  <h3 className='font-bold text-2xl sm:text-3xl text-center'>3 & 4</h3>
                  <ul className='space-y-8 list-inside space-y-8'>
                    <li><CircleCheck className='inline mr-2.5' />Hee Haw Farms</li>
                    <li><CircleCheck className='inline mr-2.5' />Lehi Hutchings Museum</li>
                    <li><CircleCheck className='inline mr-2.5' />Museum of Ancient Life at Thanksgiving Point</li>
                    <li><CircleCheck className='inline mr-2.5' />Orem Public Library</li>
                    <li><CircleCheck className='inline mr-2.5' />Local pet store and park</li>
                    <li><CircleCheck className='inline mr-2.5' />Farm Country at Thanksgiving Point</li>
                  </ul>
                </div>
                <div className='space-y-4'>
                  <h3 className='font-bold text-2xl sm:text-3xl text-center'>4 & 5</h3>
                  <ul className='space-y-8 list-inside space-y-8'>
                    <li><CircleCheck className='inline mr-2.5' />Hee Haw Farms</li>
                    <li><CircleCheck className='inline mr-2.5' />Lehi Hutchings Museum</li>
                    <li><CircleCheck className='inline mr-2.5' />The Museum of Natural Curiosity</li>
                    <li><CircleCheck className='inline mr-2.5' />Macey&apos;s grocery store and the Post Office</li>
                    <li><CircleCheck className='inline mr-2.5' />Local pet store and park</li>
                    <li><CircleCheck className='inline mr-2.5' />Bean Museum</li>
                  </ul>
                </div>
              </Reveal>
            </div>
            <div className='h-fit w-full sm:rounded-br-3xl overflow-hidden bg-black/25 border-s-4 border-t-4 border-8'>
              {/* <Image src={ '/3-year-old-program.jpg' } alt='3 year olds playing' height={ 580 } width={ 660 } className='object-fit' /> */ }
              <FieldTripCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CircleCheck } from 'lucide-react';
import { FieldTripCarousel } from './_components/FieldTripCarousel';
import Image from 'next/image';
export default function Curriculum()
{
  const scrollLocation = useSearchParams().get( 'scroll' );

  useEffect( () =>
  {
    if ( !scrollLocation ) return;

    const locationElement = document.getElementById( scrollLocation )!;
    const navElement = document.getElementsByTagName( 'nav' )!;

    const locationHeightX = locationElement.getBoundingClientRect().top;
    const navHeight = navElement[ 0 ].getBoundingClientRect().height;

    window.scrollTo( { 'top': locationHeightX - navHeight, 'behavior': 'smooth' } );

  }, [ scrollLocation ] );

  return (
    <div className='min-h-[calc(100vh-9rem)]'>
      <header className='h-[60vh] bg-[url("/assets/curriculum/cover.jpg")] bg-cover bg-center bg-fixed bg-[0%_20%]'>
        <div className='h-full bg-black/60 flex items-center px-10 sm:px-16 lg:px-24 xl:px-84'>
          <h1 className='text-6xl font-bold text-white tracking-tight'>Curriculum</h1>
        </div>
      </header>
      <div className='px-10 sm:px-16 lg:px-24 xl:px-84 space-y-16 text-zinc-800' id='__3-4program'>
        <div className='bg-white py-28 px-5 shadow-sm'>
          <div className='grid grid-cols-2 auto-rows-fr rounded-3xl overflow-hidden'>
            <div className='overflow-hidden curriculum-segment bg-cover rounded-bl-3xl h-fit bg-center w-full'>
              <Image src={ '/assets/curriculum/3-4_curriculum.webp' } alt='3 year olds playing' height={ 580 } width={ 660 } className='object-fit' />
            </div>
            <div className='space-y-8 text-2xl bg-teal-400 py-14 px-12' id='__3-4'>
              <h2 className='text-4xl font-bold text-center'>3 & 4</h2>
              <p>Our 3/4 year old program focuses on foundational skill such as:</p>
              <ul className='space-y-8 list-inside'>
                <li><CircleCheck className='inline mr-2.5' />Name recognition and writing</li>
                <li><CircleCheck className='inline mr-2.5' />Color and Shape identification</li>
                <li><CircleCheck className='inline mr-2.5' />Number recognition(1-10)</li>
                <li><CircleCheck className='inline mr-2.5' />Letter recognition and phonics introduction</li>
                <li><CircleCheck className='inline mr-2.5' />Social development and vocabulary expansion</li>
                <li><CircleCheck className='inline mr-2.5' />Music appreciation</li>
              </ul>
            </div>
            <div className='space-y-8 text-2xl py-14 px-12 bg-primary/80 rounded-tl-3xl' id='__4-5'>
              <h2 className='text-4xl font-bold text-center'>4 & 5</h2>
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
            </div>
            <div className='h-fit w-full rounded-br-3xl overflow-hidden'>
              <Image src={ '/assets/curriculum/4-5_curriculum.webp' } alt='3 year olds playing' height={ 580 } width={ 660 } className='object-fit' />
            </div>
            <div className='h-fit w-full rounded-bl-3xl overflow-hidden bg-primary/80'>
              {/* <Image src={ '/3-year-old-program.jpg' } alt='3 year olds playing' height={ 580 } width={ 660 } className='object-fit' /> */ }
              <FieldTripCarousel/>
            </div>
            <div className='space-y-8 text-2xl bg-purple-300 py-14 px-12 rounded-bl-3xl rounded-tr-3xl'>
              <h2 className='text-4xl font-bold text-center'>Field Trips</h2>
              <p>Both classes participate in monthly field trips, extending learning beyond the classroom.</p>
              <div className='space-y-4'>
                <h3 className='text-purple-900 font-bold text-3xl'>3 & 4</h3>
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
                <h3 className='text-purple-900 font-bold text-3xl'>4 & 5</h3>
                <ul className='space-y-8 list-inside space-y-8'>
                  <li><CircleCheck className='inline mr-2.5' />Hee Haw Farms</li>
                  <li><CircleCheck className='inline mr-2.5' />Lehi Hutchings Museum</li>
                  <li><CircleCheck className='inline mr-2.5' />Museum of Ancient Life at Thanksgiving Point</li>
                  <li><CircleCheck className='inline mr-2.5' />Macey&apos;s grocery store and the Post Office</li>
                  <li><CircleCheck className='inline mr-2.5' />Local pet store and park</li>
                  <li><CircleCheck className='inline mr-2.5' />Bean Museum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
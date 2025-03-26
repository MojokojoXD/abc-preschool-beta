'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Programs()
{

  const scrollLocation = useSearchParams().get( 'scroll' );
  const router = useRouter();
  
    useEffect( () =>
    {
      if ( !scrollLocation ) return;
  
      const locationElement = document.getElementById( scrollLocation )!;
      const navElement = document.getElementsByTagName( 'nav' )!;
  
      const locationHeightX = locationElement.getBoundingClientRect().top;
      const navHeight = navElement[ 0 ].getBoundingClientRect().height;
  
      window.scrollTo({ 'top': locationHeightX - navHeight , 'behavior': 'smooth' })
  
    },[ scrollLocation ])
  
  return (
    <div className='min-h-[calc(100vh-9rem)]'>
      <header className='h-[60vh] bg-[url("/assets/programs/cover.webp")] bg-cover bg-center bg-fixed bg-[0%_20%]'>
        <div className='h-full bg-black/60 flex items-center px-10 sm:px-16 lg:px-24 xl:px-84'>
          <h1 className='text-6xl font-bold text-white tracking-tight'>Programs</h1>
        </div>
      </header>
      <div className='px-10 sm:px-16 lg:px-24 xl:px-84 space-y-16 text-zinc-700'>

        <div className='grid grid-cols-3 gap-5 bg-white pt-28 px-5 pb-40 shadow-sm'>
          <div className='space-y-8 text-2xl bg-teal-400 rounded-3xl py-14 px-12 text-center flex flex-col justify-between' id='__3-4program'>
            <h2 className='text-4xl font-bold'>3 & 4 <br /><span className='text-lg'>(Two years prior to kindergarten)</span></h2>
            <div className='space-y-8'>
            <p>Tue/Thur 9:15am - 11:45am</p>
            <p>
              <span className='relative'>
              </span>
                $100/month
            </p>
            <p>$100 registration fee*</p>
            </div>
            <div className='space-y-4 h-40 flex flex-col border-t border-zinc-700/30 justify-center'>

              <Button className='block w-full text-2xl' size={ 'lg' } variant={ 'dark' } onClick={() => router.push('/contact')}>
                Contact Us
              </Button>
              <Button className='w-full block text-inherit text-2xl underline' size={ 'lg' } variant={ 'link' } onClick={() => router.push('/curriculum?scroll=__3-4')}>View Curriculum</Button>
            </div>
          </div>
          <div className='space-y-8 text-2xl bg-primary/80 rounded-3xl py-14 px-12 text-center flex flex-col justify-between' id='__4-5program'>
            <h2 className='text-4xl font-bold'>4 & 5 <br /><span className='text-lg'>(One year prior to kindergarten)</span></h2>
            <div className='space-y-8'>
            <p>Mon/Wed/Fri 9:15am - 11:45am</p>
            <p>
              <span className='relative'>
              </span>
                $150/month
            </p>
            <p>$150 registration fee*</p>
            </div>
            <div className='space-y-4 h-40 flex flex-col border-t border-zinc-700/30 justify-center'>
            
            <Button className='block w-full text-2xl' size={'lg'} variant={'dark'} onClick={() => router.push('/contact')}>Contact Us</Button>
            <Button className='w-full block text-inherit text-2xl underline' size={'lg'} variant={'link'} onClick={() => router.push('/curriculum?scroll=__4-5')}>View Curriculum</Button>    
            </div>
          </div>
          <div className='space-y-8 text-2xl py-14 px-12'>
            {/* <h2 className='text-4xl font-bold'>4 & 5 <br /><span className='text-lg'>(One year prior to kindergarten)</span></h2> */}
            <p>* The registration fee includes:</p>
            <ul className='space-y-8 list-inside'>
              <li><CircleCheck className='inline mr-2.5' /> A comprehensive portfolio of your child&apos;s work</li>
              <li><CircleCheck className='inline mr-2.5' />Documentation of your child&apos;s learning progression</li>
              <li><CircleCheck className='inline mr-2.5' /> A collection of photographs capturing your child&apos;s experiences throughout the academic year</li>
              <li><CircleCheck className='inline mr-2.5' />All necessary school supplies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
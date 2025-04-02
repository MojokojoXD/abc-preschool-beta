'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Reveal } from '@/components/ui/reveal';


export default function Programs()
{

  const searchParams = useSearchParams();
  const router = useRouter();
  
    useEffect( () =>
    {

      const scrollLocation = searchParams.get( 'scroll' );

      if ( !scrollLocation ) return;
  
      const locationElement = document.getElementById( scrollLocation )!;
      
      locationElement.scrollIntoView( { behavior: 'smooth' } );
  
    },[searchParams])
  
  return (
    <div>
      <header className='h-[30vh] sm:h-[60vh] bg-[url("/assets/programs/cover.webp")] bg-cover sm:bg-center bg-center sm:bg-fixed sm:bg-[0%_20%]'>
        <div className='h-full bg-black/45 flex items-center justify-center sm:justify-start px-6 sm:px-16 lg:px-24 xl:px-84'>
          <h1 className='text-4xl sm:text-6xl font-bold text-white tracking-tight'>Programs</h1>
        </div>
      </header>
      <div className='px-1 sm:px-16 lg:px-24 xl:px-56 space-y-16 text-zinc-700'>

        <div className='grid sm:grid-cols-3 auto-row-max gap-5 bg-white py-20 sm:p-28 px-5 pb-40 shadow-sm'>
          <div id='__3-4program'>
            <Reveal className='h-full'>
              <div className='h-full space-y-8 text-2xl bg-teal-400 rounded-3xl py-14 px-12 text-center flex flex-col justify-between' >
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
            </Reveal>
          </div>
          <div id='__4-5program'>
            <Reveal className='h-full'>
              <div className='h-full space-y-8 text-2xl bg-primary/80 rounded-3xl py-14 px-12 text-center flex flex-col justify-between' >
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
            </Reveal>
          </div>
          <Reveal>
            <div className='space-y-8 text-xl sm:text-2xl py-14 px-12'>
              {/* <h2 className='text-4xl font-bold'>4 & 5 <br /><span className='text-lg'>(One year prior to kindergarten)</span></h2> */}
              <p>* The registration fee includes:</p>
              <ul className='space-y-8 list-inside'>
                <li><CircleCheck className='inline mr-2.5' /> A comprehensive binder of your child&apos;s work</li>
                <li><CircleCheck className='inline mr-2.5' />Documentation of your child&apos;s learning progression</li>
                <li><CircleCheck className='inline mr-2.5' /> A collection of photographs capturing your child&apos;s experiences throughout the academic year</li>
                <li><CircleCheck className='inline mr-2.5' />All necessary school supplies</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
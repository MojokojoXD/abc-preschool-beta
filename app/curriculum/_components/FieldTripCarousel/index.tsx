'use client';

import { useEffect, useState } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';


const carouselPicClsx = 'relative h-[440px] w-full rounded-br-3xl overflow-hidden'

export function FieldTripCarousel()
{
  const [ carouselApi, setCarouselApi ] = useState<CarouselApi>();
  const [ intervalID, setIntervalID ] = useState<NodeJS.Timeout | null>( null );

  const resetCarousel = () =>
  {
    if ( intervalID ) clearInterval( intervalID );

    const id = setInterval( () => carouselApi?.scrollNext(), 2000 );

    setIntervalID( id );
  };

  useEffect( () =>
  {
    if ( !carouselApi ) return;


    const carouselScollFn = function ()
    {
      carouselApi.scrollNext();
    };


    const id = setInterval( carouselScollFn, 2000 );

    setIntervalID( id );

    return () =>
    {
      clearInterval( id );
    };
  }, [ carouselApi ] );

  useEffect( () =>
  {
    return () =>
    {
      if ( intervalID ) clearInterval( intervalID );
    };
  } );

  return (
    <Carousel
      className='w-full'
      setApi={ setCarouselApi }
      opts={ {
        loop: true,
      } }
    >
      <CarouselContent >
        <CarouselItem  >
          <div className={carouselPicClsx}>
            <Image src={ '/assets/curriculum/carousel/pic_1.webp' } alt='field trip 1' fill className='object-cover' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselPicClsx}>
            <Image src={ '/assets/curriculum/carousel/pic_2.webp' } alt='field trip 2' fill className='object-cover' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselPicClsx}>
            <Image src={ '/assets/curriculum/carousel/pic_3.webp' } alt='field trip 3' fill className='object-cover' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselPicClsx}>
            <Image src={ '/assets/curriculum/carousel/pic_4.webp' } alt='kid at post office' fill className='object-cover' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselPicClsx}>
            <Image src={ '/assets/curriculum/carousel/pic_5.jpg' } alt='kid at post office' fill className='object-cover' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselPicClsx}>
            <Image src={ '/assets/curriculum/carousel/pic_6.webp' } alt='kid at post office' fill className='object-cover' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselPicClsx}>
            <Image src={ '/assets/curriculum/carousel/pic_7.jpg' } alt='kid at post office' fill className='object-cover object-[50%_70%]' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselPicClsx}>
            <Image src={ '/assets/curriculum/carousel/pic_8.webp' } alt='kid at post office' fill className='object-cover' />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        className='bg-zinc-700/40 h-16 w-16 border-transparent hover:bg-zinc-700/20 left-4 text-white hover:text-white'
        onClick={ () =>
        {
          carouselApi?.scrollPrev();
          resetCarousel();
        } }
      />
      <CarouselNext
        className='bg-zinc-700/40 h-16 w-16 border-transparent hover:bg-zinc-700/20 right-4 text-white hover:text-white transition-all'
        onClick={ () =>
        {
          carouselApi?.scrollNext();
          resetCarousel();
        } }
      />
    </Carousel>
  );
}
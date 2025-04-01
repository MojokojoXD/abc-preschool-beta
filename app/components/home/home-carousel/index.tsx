'use client';

import { useEffect, useState } from 'react';
import type { CarouselApi } from '../../ui/carousel';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../ui/carousel';


const carouselClx = 'relative h-[20rem] sm:h-[30rem] w-full rounded-t-xl sm:rounded-[3rem] overflow-hidden';
export function HomeCarousel()
{
  const [ carouselApi, setCarouselApi ] = useState<CarouselApi>();
  const [ intervalID, setIntervalID ] = useState<NodeJS.Timeout | null>( null );

  const resetCarousel = () =>
  {
    if ( intervalID ) clearInterval( intervalID );

    const id = setInterval( () => carouselApi?.scrollNext(), 4000 );

    setIntervalID( id );
  };

  useEffect( () =>
  {
    if ( !carouselApi ) return;


    const carouselScollFn = function ()
    {
      carouselApi.scrollNext();
    };


    const id = setInterval( carouselScollFn, 4000 );

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
      className='w-full z-[5]'
      setApi={ setCarouselApi }
      opts={ {
        loop: true,
      } }
    >
      <CarouselContent >
        <CarouselItem  >
          <div className={carouselClx}>
            <Image src={ '/assets/home/carousel-1.webp' } alt='sensory table' fill className='object-cover' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselClx}>
            <Image src={ '/assets/home/carousel-2.webp' } alt='kids on a swing' fill className='object-cover' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselClx}>
            <Image src={ '/assets/home/carousel-3.jpg' } alt='kids playing outside' fill className='object-cover' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselClx}>
            <Image src={ '/assets/home/carousel-4.webp' } alt='kid mashing apple' fill className='object-cover' />
          </div>
        </CarouselItem>
        <CarouselItem  >
          <div className={carouselClx}>
            <Image src={ '/assets/home/carousel-5.webp' } alt='kid looking at worm' fill className='object-cover' />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        className='bg-zinc-700 h-16 w-16 border-transparent hover:bg-zinc-700/90 -left-8 pl-6 sm:pl-0 sm:-left-20 text-white hover:text-white'
        onClick={ () =>
        {
          carouselApi?.scrollPrev();
          resetCarousel();
        } }
      />
      <CarouselNext
        className='bg-zinc-700 h-16 w-16 border-transparent hover:bg-zinc-700/90 -right-8 pr-6 sm:pr-0 sm:-right-20 text-white hover:text-white'
        onClick={ () =>
        {
          carouselApi?.scrollNext();
          resetCarousel();
        } }
      />
    </Carousel>
  );
}
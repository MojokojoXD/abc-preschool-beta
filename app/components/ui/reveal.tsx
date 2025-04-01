'use client'

import { useState, useEffect,useRef, type ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';


interface RevealProps extends HTMLAttributes<HTMLDivElement>
{
  children: ReactNode;
  delay?: number;
}


export function Reveal( { children, className }: RevealProps )
{
  const [isRevealed,setIsRevealed] = useState( false )
  const revealElementRef = useRef<HTMLDivElement | null>( null );

  useEffect( () =>
  {
    if ( isRevealed ) return;
    if ( typeof window === 'undefined' ) return;
    if ( typeof document === 'undefined' ) throw new Error( 'Component must be used in the browser' );

    const options: IntersectionObserverInit = {
      root: document.getElementById( '__main' ),
      rootMargin: '0px',
      threshold: 0.45
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const callback: IntersectionObserverCallback = ( entries, _observer ) =>
    {
      if ( isRevealed ) return;
      
      if ( entries[ 0 ].isIntersecting )
      {
        setIsRevealed( true )
        revealElementRef.current?.classList.remove('translate-y-[60px]')
        revealElementRef.current?.classList.add('opacity-100')
      }
    };

    const observer = new IntersectionObserver( callback, options );

    observer.observe( revealElementRef.current as Element );

    return () =>
    {
      observer.disconnect()
    }

  },[isRevealed] );


  return (
    <div ref={ revealElementRef } className={ clsx( 'opacity-0 translate-y-[60px] transition-[opacity,translate] duration-[700ms,500ms] delay-300 ease-in-out overflow-hidden', className ) }>
      { children }
    </div>
  )
}
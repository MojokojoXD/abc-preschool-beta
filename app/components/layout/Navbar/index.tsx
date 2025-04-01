'use client';
import Link from 'next/link';
import { MobileMenu } from './MobileMenu';
import { RegularMenu } from './RegularMenu';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';

export const NAVLINKS = [
  {
    id: 0,
    name: 'Home',
    href: '/',
  },
  {
    id: 1,
    name: 'Programs',
    href: '/programs'
  },
  {
    id: 2,
    name: 'Curriculum',
    href: '/curriculum'
  },
  {
    id: 3,
    name: 'About Us',
    href: '/about'
  },
  {
    id: 4,
    name: 'Contact Me',
    href: '/contact'
  }
]
export function Navbar()
{

  const [ hasScrolledPastThreshold, setHasScrolledPastThreshold ] = useState( false );

  useEffect( () =>
  {
    const scrollHandler = () =>
      window.pageYOffset > 0 ? setHasScrolledPastThreshold( true ) : setHasScrolledPastThreshold( false );

    window.addEventListener( 'scroll', scrollHandler )
    
    return () => window.removeEventListener('scroll', scrollHandler)
  },[])

  return (
    <nav className={clsx('h-24 lg:h-36 w-screen bg-white flex items-center sm:px-16 lg:px-24 xl:px-84 justify-between transition-all border-b', hasScrolledPastThreshold ? 'fixed top-0 inset-x-0 shadow-lg z-10' : 'relative shadow-none')}>
      <div>
        <Link href={'/'}>
          {/* <h1 className='text-lg lg:text-3xl font-bold'>
            <span className='text-tertiary text-2xl lg:text-3xl'>A</span>
            <span className='text-primary text-2xl lg:text-3xl'>B</span>
            <span className='text-secondary text-2xl lg:text-3xl'>C</span> Building Blocks
          </h1> */}
          <Image src={'/logo2.png'} alt='site logo' width={140} height={140} className='sm:h-auto sm:w-auto'/>
        </Link>
      </div>
      <div>
        <MobileMenu />
        <RegularMenu />
      </div>
    </nav>
  );
}
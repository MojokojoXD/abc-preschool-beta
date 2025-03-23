'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NAVLINKS } from '..';
import clsx from 'clsx';
import { Star } from 'lucide-react';
export function RegularMenu()
{
  const path = usePathname();

  return (
    <div>
      <ul className='hidden lg:block space-x-2.5 lg:space-x-4'>
        {
          NAVLINKS.map( l => (
            <li
              key={ l.id }
              className={ clsx( 'inline-block text-lg lg:text-xl ' ) }
            >
              <Link
                href={ l.href }
                className='flex items-center'
              >
                <Star className={ clsx( 'h-4 stroke-transparent', path !== l.href ? 'fill-transparent' : 'fill-tertiary' ) } />
                <span className='relative before:content:[""] before:absolute before:h-0.5 before:bg-tertiary before:w-0 before:-bottom-1 before:rounded-full before:left-0 hover:before:w-full before:transition-width before:duration-300 before:ease-in-out'>{ l.name }</span>
              </Link>
            </li>
          ) )
        }
      </ul>
    </div>
  );
}
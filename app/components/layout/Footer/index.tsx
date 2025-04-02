'use client'

import { Smile, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const USEFUL_LINKS = [
  {
    id: 0,
    name: 'Home',
    href: '/'
  },
  {
    id: 1,
    name: 'Programs',
    href: '/programs'
  },
  {
    id: 2,
    name: 'Contact Us',
    href: '/contact',
  },
  {
    id: 3,
    name: 'About Us',
    href: '/about',
  },
  {
    id: 4,
    name: 'Curriculum',
    href: '/curriculum',
  },
];
export function Footer()
{
  return (
    <footer>
      <div className='h-36 flex justify-center items-center text-3xl sm:text-4xl font-bold text-white bg-zinc-700 sm:px-16 lg:px-24 xl:px-84'>
        Come Visit Us <Smile className='h-10 w-10 ml-2.5' />
      </div>
      <div className='min-h-96 sm:px-16 lg:px-24 xl:px-84 bg-yellow-100 text-zinc-700'>
        <div className='grid sm:grid-cols-2'>
          <div className='sm:py-24 hidden sm:block'>
            <Link href={ '/' }>
              <Image src={ '/logo2.png' } alt='footer logo' height={ 300 } width={ 300 } className='object-fit'/>
            </Link>
          </div>
          <div className='grid sm:grid-cols-2 px-6 py-12 sm:py-24 justify-center gap-8'>
            <div className='space-y-4'>
              <h2 className='text-2xl sm:text-3xl font-bold'>Useful Links</h2>
              <ul className='space-y-2.5'>
                {
                  USEFUL_LINKS.map( l => (
                    <li key={ l.id }>
                      <Link href={ l.href } className='text-lg sm:text-2xl hover:underline'>{ l.name }</Link>
                    </li>
                  ) )
                }
              </ul>
            </div>
            <div className='space-y-4'>
              <h2 className='text-2xl sm:text-3xl font-bold'>Get In Touch</h2>
              <ul className='space-y-2.5 text-lg sm:text-2xl [&_li]:space-y-2.5 [&_li]:cursor-default'>
                <li>
                  <div className='flex items-center'>
                    <Mail className='h-4 w-4 sm:h-6 sm:w-6 mr-2.5 text-tertiary' />
                    <p>General Inquiries</p>
                  </div>
                </li>
                <li>
                  <p className='text-zinc-500 underline' onClick={ () => window.open('mailto:inquires@abcbuildingblockspreschool.org')}>inquires@abcbuildingblockspreschool.org</p>
                </li>
                <li>
                  <div className='flex items-center'>
                    <Phone className='h-4 w-4 sm:h-6 sm:w-6 mr-2.5 text-tertiary' />
                    <p>Call Us</p>
                  </div>
                </li>
                <li>
                  <p className='text-zinc-500 underline' onClick={() => window.open('tel:3852544399')}>385-254-4399</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='p-6 flex justify-center'>
          <small className='text-sm sm:text-lg text-center sm:text-left'>Copyright &copy; 2025 ABC Building Blocks Preschool USA. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}
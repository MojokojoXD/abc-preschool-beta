'use client';

import { Clock, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
export default function About()
{

  return (
    <div className='min-h-[calc(100vh-9rem)]'>
      <header className='h-[60vh] bg-[url("/assets/contact/cover.webp")] bg-cover bg-center bg-fixed bg-[0%_20%]'>
        <div className='h-full bg-black/60 flex items-center px-10 sm:px-16 lg:px-24 xl:px-84'>
          <h1 className='text-6xl font-bold text-white tracking-tight'>Contact Me</h1>
        </div>
      </header>
      <div className='px-10 sm:px-16 lg:px-24 xl:px-84 space-y-16 text-zinc-800'>

        <div className='shadow-sm grid grid-cols-2 bg-white min-h-screen py-28 pb-40 px-5'>
            <div className='relative w-full h-fit rounded-3xl bg-tertiary overflow-hidden text-white max-w-md mx-auto'>
              <div>
                <div className='p-10 space-y-8 h-80 flex flex-col justify-center'>
                  <p className='text-2xl'><MapPin className='h-6 w-6  inline mr-2.5 text-nowrap' />1460 N 1300 W Orem UT, 84057, USA </p>
                  <p className='text-2xl'><Clock className='h-6 w-6  inline mr-2.5' />Open 9am - 3pm, Mon-Fri </p>
                  <p className='text-2xl'><Phone className='h-6 w-6  inline mr-2.5' />Call to Enroll: 385-254-4399 </p>

                </div>
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6083.709309417932!2d-111.72940062347297!3d40.32338316131463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d84e895d53d5b%3A0x7342f372a267c1f!2s1460%20N%201300%20W%2C%20Orem%2C%20UT%2084057!5e0!3m2!1sen!2sus!4v1741794853658!5m2!1sen!2sus" allowFullScreen={ false } loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-80'></iframe>
                </div>


              </div>
            </div>
            <div className='max-w-lg'>
              <ContactForm columns='single'/>
            </div>
        </div>
      </div>
    </div>
  );
}
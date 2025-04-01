'use client';

import { Clock, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Reveal } from '@/components/ui/reveal';
export default function About()
{

  return (
    <div >
      <header className='h-[22.5vh] sm:h-[60vh] bg-[url("/assets/contact/cover.webp")] bg-contain sm:bg-cover bg-center bg-fixed bg-[0%_20%]'>
        <div className='h-full bg-black/60 flex items-center justify-center sm:justify-start px-10 sm:px-16 lg:px-24 xl:px-84'>
          <h1 className='text-4xl sm:text-6xl font-bold text-white tracking-tight'>Contact Me</h1>
        </div>
      </header>
      <div className='px-1 sm:px-16 lg:px-24 xl:px-56 space-y-16 text-zinc-800'>

        <div className='shadow-sm grid sm:grid-cols-2 gap-16 bg-white min-h-screen px-5 py-20 sm:p-28 pb-40'>
          <div className='relative w-full h-fit rounded-3xl bg-tertiary overflow-hidden text-white max-w-md mx-auto'>
            <div>
              <Reveal className='relative p-10 space-y-8 h-80 flex flex-col justify-center text-lg sm:text-2xl'>
                <div className='absolute top-5 bg-white inset-x-0'>
                  <p className='w-full animate-text-loop text-tertiary rounded px-5 text-nowrap top-5'>**<span>Location is undergoing renovations</span>**</p>
                </div>
                <div className='flex items-center space-x-2.5'>
                  <MapPin className='h-4 w-4 sm:h-6 sm:w-6 text-nowrap' />
                  <p>730 E 100 N Lindon UT, 84042, USA </p>
                </div>
                <div className='flex items-center space-x-2.5'>
                  <Clock className='h-4 w-4 sm:h-6 sm:w-6 text-nowrap' />
                  <p>Open 9am - 3pm, Mon-Fri </p>
                </div>
                <div className='flex items-center space-x-2.5'>
                  <Phone className='h-4 w-4 sm:h-6 sm:w-6 text-nowrap' />
                  <p>Call to Enroll: 385-254-4399 </p>
                </div>

              </Reveal>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.1282094932108!2d-111.6976572!3d40.3395018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d850ec643d5bd%3A0xfc892172dabfd644!2s730%20E%20100%20N%20St%2C%20Lindon%2C%20UT%2084042!5e0!3m2!1sen!2sus!4v1743449638043!5m2!1sen!2sus" allowFullScreen={ false } loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-80'></iframe>
              </div>
            </div>
          </div>
          <div className='max-w-lg'>
            <Reveal>
              <ContactForm columns='single' />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from 'next/link';
import { ContactForm } from './components/forms/ContactForm';
import { HomeCarousel } from './components/home/home-carousel';
import { GetMoreInfoBtn } from './components/home/GetMoreInfo';

export default function Home()
{

  return (
    <>
      <div className="relative px-10 sm:px-16 lg:px-24 xl:px-84 pt-24 main-background bg-top bg-[100%_200px] lg:bg-cover lg:bg-top xl:bg-contain xl:bg-[center_top_-4.9rem] bg-no-repeat h-[calc(100vh-9rem)]">
        <div>
          <div className="relative grid grid-cols-2">
            <div className='space-y-6 text-zinc-700'>
              <h1 className='text-5xl font-bold tracking-tight'>ABC Building Blocks <br /> Lindon.</h1>
              <p className='text-2xl/7'>Welcome to preschool, </p>
              <p className='max-w-lg text-2xl/7'>Here at ABC Building Blocks, we&apos;re passionate about making learning an enjoyable adventure! Your child will explore and discover through engaging hands-on play, delightful music, and exciting monthly field trips. We also understand that every child learns at their own pace, so we tailor our curriculum to meet their individual needs, ensuring they thrive and develop a genuine love for learning.</p>
              <GetMoreInfoBtn />
            </div>
            <div className='relative flex items-center'>

              <HomeCarousel />
              {/* <div className='relative w-full h-fit rounded-b-[3rem] bg-tertiary/80 overflow-hidden'>
              <div>
                <div className='px-16 py-10 space-y-8 text-zinc-900'>
                  <p className='text-2xl'><MapPin className='h-6 w-6  inline mr-2.5 text-nowrap' />1460 N 1300 W Orem UT, 84057, USA </p>
                  <p className='text-2xl'><Clock className='h-6 w-6  inline mr-2.5' />Open 9am - 3pm, Mon-Fri </p>
                  <p className='text-2xl'><Phone className='h-6 w-6  inline mr-2.5' />Call to Enroll: 385-254-4399 </p>

                </div>
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6083.709309417932!2d-111.72940062347297!3d40.32338316131463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d84e895d53d5b%3A0x7342f372a267c1f!2s1460%20N%201300%20W%2C%20Orem%2C%20UT%2084057!5e0!3m2!1sen!2sus!4v1741794853658!5m2!1sen!2sus" allowFullScreen={ false } loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-80'></iframe>
                </div>


              </div>
            </div> */}
            </div>

          </div>

        </div>
      </div>
      <div className='pb-16 space-y-16 px-10 sm:px-16 lg:px-24 xl:px-84'>
        <h1 className='text-5xl font-bold text-zinc-800 tracking-tight'>Programs</h1>
        <div className='grid grid-cols-2 w-fit gap-6'>
          <Link href={ '/programs?scroll=__3-4program' } className='group'>
            <div className='h-80 aspect-square rounded-3xl bg-teal-400 flex flex-col overflow-hidden shadow'>
              <div className='relative basis-3/4 overflow-hidden'>
                <Image src={ '/assets/home/3-4_program.webp' } fill alt='3 to 4 year old boy and girl' className='scale-100 object-cover object-[50%_25%] group-hover:scale-110 transition-all' />
              </div>
              <div className='flex justify-center items-center basis-1/4'>
                <h2 className='text-2xl font-bold text-zinc-900'> 3 & 4 years</h2>
              </div>
            </div>
          </Link>
          <Link href={ '/programs?scroll=__4-5program' } className='group'>
            <div className='h-80 aspect-square rounded-3xl bg-primary/80 flex flex-col overflow-hidden shadow'>
              <div className='relative basis-3/4 overflow-hidden'>
                <Image src={ '/assets/home/4-5_program.webp' } fill alt='3 to 4 year old boy and girl' className='scale-100 object-cover object-[50%_25%] group-hover:scale-110 transition-all' />
              </div>
              <div className='flex justify-center items-center basis-1/4'>
                <h2 className='text-2xl font-bold text-zinc-900'> 4 & 5 years</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='pt-16 pb-40 space-y-16 px-10 sm:px-16 lg:px-24 xl:px-84' id='__get-more-info'>
        <div className='space-y-6'>
          <h1 className='text-5xl font-bold text-zinc-800 tracking-tight'>Get In Touch</h1>
          <p className='max-w-prose text-zinc-700 text-2xl/7'>Please enter your information below and we&apos;ll get in touch at the earliest. </p>
        </div>
        <div >
          <ContactForm columns={ 'double' } />
        </div>
      </div>
    </>
  );
}

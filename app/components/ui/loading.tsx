import Image from 'next/image';
import logo from '@/../public/logo2.png'

export function Loading()
{
  return (
    <div className='fixed inset-0 bg-white z-50 w-full flex justify-center items-center'>
      <div className='relative h-[20%] aspect-square animate-pulse'>
            <Image src={logo} alt='loading screen' className='object-cover' fill/> 
      </div>
    </div>
  )
}
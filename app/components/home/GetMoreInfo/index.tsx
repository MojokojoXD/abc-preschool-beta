'use client';

import { Button } from '@/components/ui/button';


export function GetMoreInfoBtn()
{

  const handleLocationChange = () =>
  {
    const moreInfoElement = document.getElementById( '__get-more-info' )!

    moreInfoElement.scrollIntoView({  behavior: 'smooth' })
  }

  return (
    <Button size={ 'xl' } variant={ 'dark' } onClick={ handleLocationChange } className='w-full sm:w-fit'>
      Get More Info
    </Button>
  )
}
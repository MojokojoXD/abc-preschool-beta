'use client';

import { Button } from '@/components/ui/button';


export function GetMoreInfoBtn()
{

  const handleLocationChange = () =>
  {
    const moreInfoElement = document.getElementById( '__get-more-info' )!
    
    const moreInfoElementTopPosition = moreInfoElement.getBoundingClientRect().top;

    const navHeight = document.getElementsByTagName( 'nav' )[ 0 ].getBoundingClientRect().height

    
    window.scrollTo({ top: moreInfoElementTopPosition - navHeight, behavior: 'smooth' })
  }

  return (
    <Button size={ 'xl' } variant={ 'dark' } onClick={ handleLocationChange } className='w-full sm:w-fit'>
      Get More Info
    </Button>
  )
}
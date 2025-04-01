'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { NAVLINKS } from '..';
import Link from 'next/link';
export function MobileMenu()
{
  const [ openDrawer, setOpenDrawer ] = useState( false );

  const handleDrawerOpen = ( toggle: boolean ) => setOpenDrawer( toggle );

  return (
    <div className='lg:hidden mr-5'>
      <Button
        variant={ 'ghost' }
        size={ 'icon' }
        onClick={ () => setOpenDrawer( true ) }
      >
        <Menu />
      </Button>
      <MobileDrawer toggleDrawer={ openDrawer } onDrawerToggle={ handleDrawerOpen } />
    </div>
  );
}


interface MobileDrawerProps
{
  toggleDrawer: boolean;
  onDrawerToggle: ( toggle: boolean ) => void;
}
function MobileDrawer( { toggleDrawer, onDrawerToggle }: MobileDrawerProps )
{
  return (
    <Drawer
      open={ toggleDrawer }
      onOpenChange={ onDrawerToggle }
      direction={ 'bottom' }
    >
      <DrawerContent className='p-10 w-screen'>
        <DrawerHeader>
          <DrawerTitle className='hidden'></DrawerTitle>
          <DrawerDescription className='hidden'></DrawerDescription>

          <DrawerClose className='absolute right-5 top-5'>
            <X />
          </DrawerClose>

        </DrawerHeader>
        <div>
          <ul className='[&_li:not(:last-child)]:border-b'>
            {
              NAVLINKS.map( l => (
                <li
                  key={ l.id }
                >
                  <Link
                    href={ l.href }
                    className='block text-lg py-2.5 border-zinc-300'
                    onClick={() => onDrawerToggle( false )}
                  >
                    { l.name }
                  </Link>
                </li>
              ) )
            }
          </ul>
        </div>
      </DrawerContent>
    </Drawer>

  );
}
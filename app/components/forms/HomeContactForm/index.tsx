'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';


export function HomeContactForm()
{
  return (
    <form className='text-zinc-700 max-w-5xl space-y-6'>
      <div className='grid grid-cols-2 gap-6'>
        <div className='space-y-2.5'>
          <Label htmlFor='__first-name' className='ml-6'>First Name*</Label>
          <Input id='__first-name' />
        </div>
        <div className='space-y-2.5'>
          <Label htmlFor='__last-name' className='ml-6'>Last Name*</Label>
          <Input id='__last-name' />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div className='space-y-2.5'>
          <Label htmlFor='__email' className='ml-6'>Email*</Label>
          <Input id='__email' type={ 'email' } />
        </div>
        <div className='space-y-2.5'>
          <Label htmlFor='__childAge' className='ml-6'>Age of Child*</Label>
          <Input id='__childAge' type={ 'number' } defaultValue={ 0 } />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div className='space-y-2.5'>
          <Label htmlFor='__phone' className='ml-6'>Phone*</Label>
          <Input id='__phone' />
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='space-y-2.5'>
          <Label htmlFor='__comments' className='ml-6'>Comment</Label>
          <Textarea
            id='__comments'
            rows={ 6 }
            className='resize-none h-48 placeholder:text-2xl placeholder:opacity-50 text-2xl'
            placeholder='Please enter any additional info here'
          />
        </div>
      </div>
      <div className='grid grid-cols-2 pt-5'>
        <Button size={ 'xl' } variant={'destructive'} className='w-full'>Submit</Button>
      </div>
    </form>
  );
}
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { clsx } from 'clsx';
import validator from 'validator';
import { Loader2 } from 'lucide-react';
import { FormFeedback } from './FormFeedback';


interface ContactFormProps
{
  columns?: 'single' | 'double';
}

export interface ContactFormPayload
{
  firstName: string;
  lastName: string;

  email: string;

  childAge: string;

  phone: string;

  comments: string;
}

export function ContactForm( { columns }: ContactFormProps )
{
  const { register, formState: { errors }, handleSubmit, reset } = useForm<ContactFormPayload>( {
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      childAge: '',
      comments: ''
    },
    mode: "onSubmit",
  } );
  const [ isFetching, setIsFetching ] = useState( false );
  const [ isFormSubmissionSuccesful, setIsFormSubmissionSuccessful ] = useState<{ openDialog: boolean; isSuccessful: boolean | undefined}>( {
    openDialog: false,
    isSuccessful: undefined,
  } )


  const isFormSent = typeof isFormSubmissionSuccesful === 'undefined' ? false : true;
  const dialogMsg = isFormSubmissionSuccesful.isSuccessful 
    ? 'Your details have been sent and you\'ll hear from us soon.'
    : 'Some thing went wrong! Please try again later.'
  
  
  const handleDialogChange = ( open: boolean ) =>
  {
    setIsFormSubmissionSuccessful( prevState => ( { ...prevState, openDialog: open } ) );
  }

  const submitHandler: SubmitHandler<ContactFormPayload> = async( data ) =>
  {
    setIsFetching( true );

    try
    {
      const res = await fetch( '/api/inquiries', {
        method: 'POST',
        body: JSON.stringify( data )
      } );


      if ( res.ok )
      {
        console.log( 'done' )
        return;
      };

      // throw res;
      setIsFormSubmissionSuccessful({ openDialog: true, isSuccessful: true })
      reset();
    } catch ( error )
    {
      console.log( error );
    } finally
    {
      setIsFetching( false );
    }
  };

  return (
    <form className='text-zinc-700 max-w-5xl space-y-6' onSubmit={ handleSubmit( submitHandler ) } autoComplete={ 'false' }>
      <FormFeedback
        msg={ dialogMsg }
        onDialogChange={ handleDialogChange }
        open={ isFormSubmissionSuccesful.openDialog }
        isSuccessful={isFormSent} />
      <div className={ clsx( 'grid gap-3 sm:gap-6', columns === 'double' && 'sm:grid-cols-2' ) }>
        <div className='space-y-2.5'>
          <Label htmlFor='__first-name' className='ml-3 sm:ml-6'>First Name*</Label>
          <Input id='__first-name' errors={ errors } errorName={ 'firstName' } { ...register( 'firstName', {
            required: 'Please enter your first name',
            minLength: {
              value: 2,
              message: 'First name is too short'
            }
          } ) } />
        </div>
        <div className='space-y-2.5'>
          <Label htmlFor='__last-name' className='ml-3 sm:ml-6'>Last Name*</Label>
          <Input id='__last-name'
            errorName={ 'lastName' }
            errors={ errors }
            { ...register( 'lastName', {
              required: 'Please enter your last name',
              minLength: {
                value: 2,
                message: 'Last name is too short'
              }
            } ) } />
        </div>
      </div>
      <div className={ clsx( 'grid gap-3 sm:gap-6', columns === 'double' && 'sm:grid-cols-2' ) }>
        <div className='space-y-2.5'>
          <Label htmlFor='__email' className='ml-3 sm:ml-6'>Email*</Label>
          <Input id='__email'
            errorName={ 'email' }
            errors={ errors }
            { ...register( 'email', {
              required: 'Please enter your email address',
              validate: ( v ) => validator.isEmail( v ) || 'Email must be of the format: name@example.com'
            } ) } />
        </div>
        <div className='space-y-2.5'>
          <Label htmlFor='__childAge' className='ml-3 sm:ml-6'>Age of Child*</Label>
          <Input id='__childAge'
            formNoValidate
            errorName={ 'childAge' }
            errors={ errors }
            { ...register( 'childAge', {
              required: 'Please enter your child\'s age',
              min: {
                value: 3,
                message: 'Age must be betwwen 3 and 5'
              },
              max: {
                value: 5,
                message: 'Age must be between 3 and 5'
              },
              validate: ( v ) => validator.isNumeric( v ) || 'Entry must be a number'
            } ) } />
        </div>
      </div>
      <div className={ clsx( 'grid gap-3 sm:gap-6', columns === 'double' && 'sm:grid-cols-2' ) }>
        <div className='space-y-2.5'>
          <Label htmlFor='__phone' className='ml-3 sm:ml-6'>Phone*</Label>
          <Input id='__phone'
            errorName={ 'phone' }
            errors={ errors }
            { ...register( 'phone', {
              required: 'Please enter your phone number',
              validate: ( v ) => validator.isMobilePhone( v ) || 'Please enter a valid phone number'
            } ) } />
        </div>
      </div>
      <div className={ clsx( 'grid gap-3 sm:gap-6', columns === 'double' && 'sm:grid-cols-2' ) }>
        <div className='space-y-2.5'>
          <Label htmlFor='__comments' className='ml-3 sm:ml-6'>Comment</Label>
          <Textarea
            id='__comments'
            rows={ 6 }
            className='resize-none h-48 sm:placeholder:text-xl placeholder:text-2xl placeholder:opacity-50 text-2xl'
            placeholder='Please enter any additional info here'
            { ...register( 'comments' ) }
          />
        </div>
      </div>
      <div className='grid sm:grid-cols-2 pt-5'>
        <Button size={ 'xl' } variant={ 'destructive' } className='w-full'>{ isFetching ? <Loader2 className='animate-spin'/> : 'Submit' }</Button>
      </div>
    </form>
  );
}
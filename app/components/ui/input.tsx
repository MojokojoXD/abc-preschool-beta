import * as React from "react"
import type { FieldErrors } from 'react-hook-form';
import type { ContactFormPayload } from '../forms/ContactForm';
import { cn } from "@/lib/utils"
import { ErrorMessage } from '@hookform/error-message'
import { Star } from 'lucide-react';

interface InputProps
{
  errors?: FieldErrors;

  errorName?: keyof ContactFormPayload
}

function Input({ className, type,errors,errorName, ...props }: React.ComponentProps<"input"> & InputProps) {
  return (
    <div className='relative'>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-16 w-full min-w-0 rounded-full border-4 bg-white px-6 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm lg:text-2xl",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      { errors && errorName
        ? <ErrorMessage
            name={ errorName }
            errors={ errors }
          render={ ( { message } ) => (
            <span className='bg-tertiary/90 text-white absolute -bottom-3 right-0 h-6 px-5 rounded-lg flex items-center z-5'>
              <Star className='fill-white h-4 w-4 inline mr-2.5'/>
              { message }
            </span>
            )}
          />
        : <></> } 
    </div>
  )
}

export { Input }

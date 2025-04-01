import { type NextRequest, NextResponse } from 'next/server';
import type { ContactFormPayload } from '@/components/forms/ContactForm';
import { ABCMailTransport } from '../_lib/nodemailer';

export async function POST( req: NextRequest )
{
  const contactPayload: ContactFormPayload = await req.json();

  const transport = new ABCMailTransport();

  try {
    
    await transport.sendMail(
      `Name: ${ contactPayload.firstName } ${ contactPayload.lastName }
Email: ${ contactPayload.email }
ChildAge: ${ contactPayload.childAge }
Phone: ${ contactPayload.phone }
Comments: ${contactPayload.comments}`
    )

    return NextResponse.json({ message: 'done' }, { status: 200 });

  } catch (error) {
    console.log( error )

    return NextResponse.json({ message: 'failed' }, { status: 500, statusText: 'failed process message request' });
  }

  
}
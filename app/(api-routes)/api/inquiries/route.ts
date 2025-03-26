import { type NextRequest, NextResponse } from 'next/server';
import type { ContactFormPayload } from '@/components/forms/ContactForm';


export async function POST( req: NextRequest )
{
  const contactPayload: ContactFormPayload = await req.json();

  console.log( contactPayload )

  return NextResponse.json({ message: 'done' }, { status: 200 })
}
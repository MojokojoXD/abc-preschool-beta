import type { Metadata } from "next";
import { Comic_Neue,Gloria_Hallelujah } from "next/font/google";
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import "./globals.css";

const comicNeue = Comic_Neue( {
  variable: '--font-comic-neue',
  weight: [ '300', '400', '700' ]
} );

const gloriaHallelujah = Gloria_Hallelujah( {
  variable: '--font-stardos-stencil',
  weight: ['400']
})

export const metadata: Metadata = {
  title: "ABC Building Blocks Preschool",
  description: "An amazing preschool in Lindon Utah",
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="en">
      <body
        className={ `${ comicNeue.className } ${ gloriaHallelujah.variable } antialiased relative` }
      >
        <Navbar />
        <main className='absolute top-[6rem] lg:top-[9rem] w-full '>
          <div className='min-h-[calc(100vh-9rem)]'>
            { children }
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

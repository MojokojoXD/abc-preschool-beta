import type { Metadata } from "next";
import { Suspense } from 'react';
import { Comic_Neue,Gloria_Hallelujah } from "next/font/google";
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Loading } from './components/ui/loading';
import "./globals.css";

const comicNeue = Comic_Neue( {
  variable: '--font-comic-neue',
  weight: [ '300', '400', '700' ],
  subsets:['latin']
} );

const gloriaHallelujah = Gloria_Hallelujah( {
  variable: '--font-stardos-stencil',
  weight: [ '400' ],
  preload: false
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
        <main className='absolute top-[6rem] lg:top-[9rem] w-full contours h-[calc(100vh-6vh)] lg:h-[calc(100vh-9rem)] bg-[auto_100vh] overflow-y-auto' id='__main'>
          <div >
            <Suspense fallback={<Loading/>}>
              { children }
            </Suspense>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

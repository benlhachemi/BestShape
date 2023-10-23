import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import 'animate.css';
import { StepsProvider } from '@/context/steps';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BestShape',
  description: 'New fitness program just for you.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="miscrosoft-clarity" type="text/javascript">
          {` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "jf0voculqt");`}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-white text-neutral-800 mx-auto w-full overflow-x-hidden min-h-screen`}
      >
        <StepsProvider>
          <Navbar className="px-5 lg:w-5/6 mx-auto" />
          <div className="flex flex-col gap-10 lg:py-10">{children}</div>
        </StepsProvider>
      </body>
    </html>
  );
}

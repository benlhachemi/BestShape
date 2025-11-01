import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import 'animate.css';
import { StepsProvider } from '@/context/steps';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BestShape - Personalized Fitness Programs for Your Ultimate Transformation',
  description: 'Transform your body with BestShape\'s customized fitness programs. Achieve your fitness goals with personalized workout routines and expert guidance tailored just for you.',
  keywords: 'Fitness program, personalized workout, body transformation, customized fitness, tailored fitness routine, expert guidance, achieve fitness goals, personalized fitness plan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

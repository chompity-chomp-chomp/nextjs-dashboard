import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        <p
          className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
        >
          <strong>Welcome to Acme.</strong> This is the example for the{' '}
          
      {/* </div>
      <div>  */}
          <a href="https://nextjs.org/learn/" className="text-blue-500">
            Next.js Learn Course
          </a>
          , brought to you by Vercel.
        </p>


        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  )
};

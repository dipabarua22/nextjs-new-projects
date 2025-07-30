import React from 'react'
import Link from 'next/link';

const Navbarpage = () => {
  return (
    <div className='absolute z-10 text-white w-full'>
      <nav className="container flex items-center justify-between max-auto h-20">
        <Link href="/">
          <h1 className="font-bold text-xl">home</h1>
        </Link>
        <div className="flex gap-2 text-2xl">
          <Link href="/performance">performance</Link>
          <Link href="/reliability">Reliability</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbarpage;

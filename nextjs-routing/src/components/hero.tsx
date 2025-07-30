import React from 'react'
import logo from "public/darkcafe.jpg";
import Image from 'next/image';


const Heropage = () => {
    return (
        <div className='relative h-screen'>
            <div className='absolute inset-0 -z-10'>
                <Image
                    src={logo}
                    fill
                    alt="cafe"
                    style={{ objectFit: 'cover' }}></Image>
                    <div className='absolute inset-0 bg-gradient-to-r from-slate-900'></div>
            </div>
            <div className='flex items-center justify-center pt-52'>
                <h1 className='font-italic  text-6xl text-white'>Eco-Friendly-cafe</h1>
            </div>
        </div>

    )
}

export default Heropage

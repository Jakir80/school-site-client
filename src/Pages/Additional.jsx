import React from 'react';
// AOs.init();
import { default as AOS, default as Aos } from 'aos';
AOS.init();
const Additional = () => {
    Aos.init({
        duration: 1500,
      })

    return (
        <div className='md:flex items-center justify-between gap-5 md:mt-60' >

            <div data-aos="fade-right" className='bg-green-600 md:w-1/2 text-white md:p-40'>
                <h1 className='w-full md:text-3xl font-semibold m-5'>Join our class and meet up with our Popular instructor </h1>
                <p className='w-full m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga ipsa natus quia nesciunt sapiente nulla dicta! Provident, corrupti doloribus?</p>
                <button className='btn border-b-red-600 border-4'>Buy Class</button>
            </div>
            <div data-aos="fade-left" className=' md:w-1/2'>
                <img src="https://i.postimg.cc/RVngQdyd/hero-player-639x1024.png" alt="" />

            </div>


        </div>
    );
};

export default Additional;
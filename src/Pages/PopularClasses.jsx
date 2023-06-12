import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';

const PopularClasses = () => {
    const [Classes,SetClasses]=useState([])
useEffect(()=>{
    fetch('https://school-site-server.vercel.app/popularclasses')
    .then(res=>res.json())
    .then(data=>SetClasses(data))
},[])

    return (
        <div>
            <h2 className='md:text-center text-4xl m-5 font-bold 
            text-white'>Our Popular classes.There is you can buy your class</h2>
            <p className='md:text-center text-white
            mb-5'>This is our popular class . This listed class student but it most</p>
          
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-10 sm:gap-4 items-center">
                {
                    Classes.map(popular => <ClassCard
                        key={popular._id}
                        popular={popular}
                    ></ClassCard>)
                }
            </div>
            
        </div>
    );
};

export default PopularClasses;
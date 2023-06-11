import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';

const PopularClasses = () => {
    const [Classes,SetClasses]=useState([])
useEffect(()=>{
    fetch('http://localhost:5000/popularclasses')
    .then(res=>res.json())
    .then(data=>SetClasses(data))
},[])
    return (
        <div>
            <h2 className='text-center text-4xl m-5 font-bold  p-8
            text-white'>Our Popular classes.There is you can buy your class</h2>
            <p className='text-center text-white
            mb-5'>This is our popular class . This listed class student but it most</p>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
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
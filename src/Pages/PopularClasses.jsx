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
            <h2 className='text-center text-4xl m-5 bg-gray-500 p-8
            text-white'>Our Popular classes.There is you can buy your class</h2>
          
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
import React, { useEffect, useState } from 'react';
import InstructorCard from './instructorCard';

const Instructor = () => {
    const [instructors,Setinstructor]=useState([])
    useEffect(()=>{
        fetch('https://school-site-server.vercel.app/popularinstructor')
        .then(res=>res.json())
        .then(data=>Setinstructor(data))
    },[])
    return (
        <div>
            <h2 className='md:text-center text-4xl m-5 font-bold  
            text-white'>Our Popular Instructor.There is you can see our Popular instructor</h2>
            <p className='md:text-center text-white
            mb-5'>This is our popular instructor . This listed  of our instructor</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-10 sm:gap-4">{
            instructors.map(teacher=><InstructorCard key={teacher
            ._id} teacher={teacher}></InstructorCard>)
                }</div>
        </div>
    );
};

export default Instructor;
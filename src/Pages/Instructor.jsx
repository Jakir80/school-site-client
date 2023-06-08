import React, { useEffect, useState } from 'react';
import InstructorCard from './instructorCard';

const Instructor = () => {
    const [instructors,Setinstructor]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/popularinstructor')
        .then(res=>res.json())
        .then(data=>Setinstructor(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-4xl m-5 bg-gray-500 p-8
            text-white'>Our Popular Instructor List </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">{
            instructors.map(teacher=><InstructorCard key={teacher
            ._id} teacher={teacher}></InstructorCard>)
                }</div>
        </div>
    );
};

export default Instructor;
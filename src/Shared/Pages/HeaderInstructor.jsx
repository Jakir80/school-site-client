import React, { useEffect, useState } from 'react';

const HeaderInstructor = () => {
    const [instructors,Setinstructor]=useState([])
    useEffect(()=>{
        fetch('https://school-site-server.vercel.app/popularinstructor')
        .then(res=>res.json())
        .then(data=>Setinstructor(data))
    },[])
    return (
        <div className='text-white'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-white'>
      <tr>    
        <th>Instructor Name</th>     
        <th>Email</th>    
       <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {
        instructors.map(instructor=><>
        <tr key={instructor._id}>   
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" mask-squire circle w-24  h-24 ">
              <img src={instructor.photoUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
           
       
          </div>
        </div>
      </td>
      <td>{instructor.email}</td>
      <th>
       {instructor.name}
      </th>
    </tr>    
        
        </>)
      }
      
    </tbody>   
  </table>
</div>
        </div>
    );
};

export default HeaderInstructor;
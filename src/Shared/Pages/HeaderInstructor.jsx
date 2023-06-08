import React, { useEffect, useState } from 'react';

const HeaderInstructor = () => {
    const [instructors,Setinstructor]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/popularinstructor')
        .then(res=>res.json())
        .then(data=>Setinstructor(data))
    },[])
    return (
        <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>    
        <th>Instructor Name</th>     
        <th>Email</th>    
        <th>Add Class</th>
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
              <img src={instructor.picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{instructor.instructor_name}</div>
       
          </div>
        </div>
      </td>
      <td>{instructor.email}</td>
      <th>
        <button className="btn btn-primary btn-xs">Add Class</button>
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
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Myclass = () => {
    const { user } = useContext(AuthContext)
    const [classes, SetClasses] = useState([])
         useEffect(() => {
        fetch(`http://localhost:5000/myclass/${user?.email}`,      
        )
            .then(res => res.json())
            .then(data => SetClasses(data))
    }, [user])
    return (
        <div>
            <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class image</th>
                            <th>Instructor Name</th>
                            <th>Class Name</th>
                            <th>status</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(booking => <>
                                <tr key={booking._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className=" mask-squire circle w-24  h-24 ">
                                                    <img src={booking.classImageURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{booking. className}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>{
                                        booking.instructorName}</td>
                                    <td>
                                        {
                                            booking.className
                                        }</td>
                                    <th>
                                       <div className='flex gap-4'>
                                       <button className="btn btn-primary btn-lg text-white p-2">{booking.status}</button>

                                       <Link to={`/updateclass/${booking._id}`}><button className="btn btn-primary">Update </button></Link>                                      
                                       </div>
                                    </th>
                                    
                                </tr>

                            </>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

        </div>
    );
};

export default Myclass;
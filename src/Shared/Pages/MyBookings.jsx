import React, { useContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [myBookings, SetMybookings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/mybookings/${user?.email}`)
            .then(res => res.json())
            .then(data => SetMybookings(data))
    }, [user])

    const handledelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure want to delete this ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = myBookings.filter(booked => booked._id != id);
                        SetMybookings(remaining)
                    })
            }
        })
    }




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class image</th>
                            <th>Instructor Name</th>
                            <th>Class Name</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookings.map(booking => <>
                                <tr key={booking._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className=" mask-squire circle w-24  h-24 ">
                                                    <img src={booking.picture} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{booking.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>{
                                        booking.instructor_name}</td>
                                    <td>
                                        {
                                            booking.class_name
                                        }</td>
                                    <th>
                                        <button onClick={()=>handledelete(booking._id)} className="btn btn-primary btn-lg text-white p-2">Delete</button>
                                    </th>
                                    <th><button className='btn btn-primary btn-lg text-white p-2'>Payment</button></th>
                                </tr>

                            </>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
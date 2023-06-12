import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [myBookings, SetMybookings] = useState([])
    useEffect(() => {
        fetch(`https://school-site-server.vercel.app/mybookings/${user?.email}`)
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
                fetch(`https://school-site-server.vercel.app/bookings/${id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
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
                    <thead className='text-white'>
                        <tr>
                            <th>Class image</th>
                            <th>Instructor Name</th>
                            <th>Class Name</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <button className="btn">
                       booking
                        <div className="badge">{myBookings.length}</div>
                    </button>
                    <tbody className='text-white'>
                        {
                            myBookings.map(booking => <>
                                <tr key={booking._id}>
                                    <td>
                                        <div key={booking._id} className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className=" mask-squire circle w-24  h-24 ">
                                                    <img src={booking.classImageURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{booking.className}</div>

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
                                        <button onClick={() => handledelete(booking._id)} className="btn btn-accent text-white">Delete</button>
                                    </th>
                                    <th><Link to={`/payment/${booking._id}`}><button className="btn btn-accent text-white">Payment </button></Link>  </th>
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
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Alluser = () => {
    const [users, Setusers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => Setusers(data))

    }, [])
    const handlemakeAdmin = (person) => {
        fetch(`http://localhost:5000/users/admin/${person._id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${person.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    const handlemakeinstructor = (instructor) => {
        fetch(`http://localhost:5000/users/instructor/${instructor._id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${instructor.name} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User email</th>
                            <th>Role</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <>
                                <tr key={user._id}>
                                    <td>{
                                        user.name}</td>
                                    <td>
                                        {
                                            user.email
                                        }</td>
                                    <th>
                                    {
                                        user.role === 'instructor' ? 'instructor' : <button onClick={() => handlemakeinstructor(user)} className="btn btn-primary text-white btn-lg">Make Instructor</button>}
                                    </th>
                                    <th>{
                                        user.role === 'admin' ? 'admin' : <button onClick={() => handlemakeAdmin(user)} className="btn btn-primary text-white btn-lg">Make admin</button>}</th>
                                </tr>

                            </>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Alluser;
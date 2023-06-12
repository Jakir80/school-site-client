
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Alluser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const authorization = localStorage.getItem('access-token')
      const response = await fetch('https://school-site-server.vercel.app/users', {
        headers:{

          authorization:`bearer ${authorization}`
        }
      });

      return response.json();
    },
  });
  // console.log("user",users)

  const [disabledUsers, setDisabledUsers] = useState([]);

  const handlemakeAdmin = (person) => {
    setDisabledUsers([...disabledUsers, person._id]);
    fetch(`https://school-site-server.vercel.app/users/admin/${person._id}`, {
      method: 'PATCH',
      headers: {
        authorization: `bearer ${localStorage.getItem('access-token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
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
        setDisabledUsers(disabledUsers.filter((id) => id !== person._id));
      });
  };

  const handlemakeinstructor = (instructor) => {
    setDisabledUsers([...disabledUsers, instructor._id]);
    fetch(`https://school-site-server.vercel.app/users/instructor/${instructor._id}`, {
      method: 'PATCH',
      headers: {
        authorization: `bearer ${localStorage.getItem('access-token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
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
        setDisabledUsers(disabledUsers.filter((id) => id !== instructor._id));
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className='text-white'>
            <tr>
              <th>User Name</th>
              <th>User email</th>
              <th>Role</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>
                  {user.role === 'instructor' ? (
                    'instructor'
                  ) : (
                    <button
                      onClick={() => handlemakeinstructor(user)}
                      className="btn btn-accent text-white"
                      disabled={disabledUsers.includes(user._id)}
                    >
                      Make Instructor
                    </button>
                  )}
                </th>
                <th>
                  {user.role === 'admin' ? (
                    'admin'
                  ) : (
                    <button
                      onClick={() => handlemakeAdmin(user)}
                      className="btn btn-accent text-white "
                      disabled={disabledUsers.includes(user._id)}
                    >
                      Make Admin
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;

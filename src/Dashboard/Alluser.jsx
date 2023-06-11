// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import Swal from 'sweetalert2';

// const Alluser = () => {
//     // const [users, Setusers] = useState([])
//     // useEffect(() => {
//     //     fetch('http://localhost:5000/users')
//     //         .then(res => res.json())
//     //         .then(data => Setusers(data))

//     // }, [])
// const {data:users=[],refetch}=useQuery({
//     queryKey:["users"],
//     queryFn:async()=>{
//         const response=await fetch('http://localhost:5000/users')
//         return response.json()
//     }
    
// });

//     const handlemakeAdmin = (person) => {
//         fetch(`http://localhost:5000/users/admin/${person._id}`, {
//             method: 'PATCH',
//             headers: {
//                 authorization: `bearer ${localStorage.getItem('access-token')}`
//             }
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 if (data.modifiedCount) {
//                     refetch();
//                     Swal.fire({
//                         position: 'top-end',
//                         icon: 'success',
//                         title: `${person.name} is an Admin Now!`,
//                         showConfirmButton: false,
//                         timer: 1500,
//                     });
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     };
//     const handlemakeinstructor = (instructor) => {
//         fetch(`http://localhost:5000/users/instructor/${instructor._id}`, {
//             method: 'PATCH',
//             headers: {
//                 authorization: `bearer ${localStorage.getItem('access-token')}`
//             }
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 if (data.modifiedCount) {
//                     refetch();
//                     Swal.fire({
//                         position: 'top-end',
//                         icon: 'success',
//                         title: `${instructor.name} is an instructor Now!`,
//                         showConfirmButton: false,
//                         timer: 1500,
//                     });
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     };


//     return (
//         <div>
//             <div className="overflow-x-auto">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>User Name</th>
//                             <th>User email</th>
//                             <th>Role</th>
//                             <th>Role</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             users.map(user => <>
//                                 <tr key={user._id}>
//                                     <td>{
//                                         user.name}</td>
//                                     <td>
//                                         {
//                                             user.email
//                                         }</td>
//                                     <th>
//                                         {
//                                             user.role === 'instructor' ? 'instructor' : <button onClick={() => handlemakeinstructor(user)} className="btn btn-primary text-white btn-lg">Make Instructor</button>}
//                                     </th>
//                                     <th>{
//                                         user.role === 'admin' ? 'admin' : <button onClick={() => handlemakeAdmin(user)} className="btn btn-primary text-white btn-lg">Make admin</button>}</th>
//                                 </tr>

//                             </>)
//                         }

//                     </tbody>
//                 </table>
//          {/* <AllClass></AllClass> */}
//          {/* <Test></Test> */}
//             </div>

//         </div>
//     );
// };

// export default Alluser;



import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Alluser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/users');
      return response.json();
    },
  });

  const [disabledUsers, setDisabledUsers] = useState([]);

  const handlemakeAdmin = (person) => {
    setDisabledUsers([...disabledUsers, person._id]);
    fetch(`http://localhost:5000/users/admin/${person._id}`, {
      method: 'PATCH',
      headers: {
        authorization: `bearer ${localStorage.getItem('access-token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    fetch(`http://localhost:5000/users/instructor/${instructor._id}`, {
      method: 'PATCH',
      headers: {
        authorization: `bearer ${localStorage.getItem('access-token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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

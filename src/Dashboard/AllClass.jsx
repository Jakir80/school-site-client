// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

// const AllClass = () => {

//     // const {data:classes=[],refetch}=useQuery(['class'],async()=>{
//     //     const res=await fetch('http://localhost:5000/fullclasses');
//     //     return res.json()
//     // })
//     const [classes, setClasses] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/fullclasses')
//             .then(res => res.json())
//             .then(data => setClasses(data))
//     }, [])
//     const handleApprove = (classitem) => {
//         fetch(`http://localhost:5000/classe/status/approved${classitem._id}`,{
//             method:'PATCH',

//         })
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data)
//             if(data.modifiedCount>0){
//                 Swal.fire('approved')
//                 fetch('http://localhost:5000/fullclasses')
//                 .then(res => res.json())
//                 .then(data => setClasses(data))
//             }
//         })

//     }
//     const handleDeny = () => {
//     }
//     return (
//         <div>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Class Name</th>
//                         <th>Instructor Name</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {classes.map((classItem) => (
//                         <tr key={classItem._id}>
//                             <td>{classItem.className}</td>
//                             <td>{classItem.instructorName}</td>
//                             {/* <td>{classItem.status}</td> */}
//                             <td className='m-4'>
//                                 {
//                                     <button className='btn btn-primary' onClick={() => handleApprove(classItem)}>{classItem.status === 'approve' ? "Approved" : 'Approve'}</button>

//                                 }
//                                 {
//                                     <button className='btn btn-primary' onClick={() => handleDeny(classItem)}>{classItem.status === 'denied' ? "Denied" : 'Deny'}</button>
//                                 }
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AllClass;

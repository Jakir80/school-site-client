import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Simulating data fetching from the server
    // Replace this with your actual API call to fetch the data
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/fullclasses'); // Replace with your actual API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateStatus = (id, newStatus) => {
    // Make an API call to update the status
    fetch(`http://localhost:5000/api/updatestatus/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(data)
          // Update the status of the selected item locally
          const updatedData = data.map((item) => {
            if (item._id === id) {
              return { ...item, status: newStatus };
            }
            return item;
          });
          setData(updatedData);
          alert('Status updated successfully.');
        } else {
          alert('Failed to update the status.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to update the status.');
      });
  };
  const handleUpdateStatustwo = (id, newStatus) => {
    // Make an API call to update the status
    fetch(`http://localhost:5000/api/updatestatusdenied/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(data)
          // Update the status of the selected item locally
          const updatedData = data.map((item) => {
            if (item._id === id) {
              return { ...item, status: newStatus };
            }
            return item;
          });
          setData(updatedData);
         Swal.fire('Status Updated Successfully')
        } else {
          alert('Failed to update the status.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to update the status.');
      });
  };
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
                <th>Price</th>
                <th>Status</th> 
                <th>Action</th>              
              </tr>
            </thead>
            <tbody>
              {
                data.map(booking => <>
                  <tr key={booking._id}>
                    <td>
                      <div className="flex items-center space-x-3">
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
                    <td>
                      {
                        booking.price
                      }</td>
                      <td>{booking.status}</td>
                   <td>
                   {booking.status === 'pending' && (
                      <>
                        <button className='btn btn-primary m-3' onClick={() => handleUpdateStatus(booking._id, 'approved')}>
                          {booking.status === 'pending' ? 'Approve' : 'Approved'}
                        </button>
                        <button className='btn btn-primary' onClick={() => handleUpdateStatustwo(booking._id, 'denied')}>
                          {booking.status === 'pending' ? 'Deny' : 'Denied'}
                        </button>
                      </>
                    )}
                   </td>
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

export default Test;

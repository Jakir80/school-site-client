
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../AuthProvider/UseAxiosSecure';

const Test = () => {
  const [data, setData] = useState([]);
  const [axiosSecure]=useAxiosSecure()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get('https://school-site-server.vercel.app/fullclasses');
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [axiosSecure]);

  const handleUpdateStatus = (id, newStatus) => {
    axiosSecure
      .patch(`https://school-site-server.vercel.app/api/updatestatus/${id}`, { status: newStatus })
      .then((response) => {
        if (response.status === 200) {
          const updatedData = data.map((item) => {
            if (item._id === id) {
              return { ...item, status: newStatus };
            }
            return item;
          });
          setData(updatedData);
          Swal.fire('Status Updated Successfully');
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
    axiosSecure
      .patch(`https://school-site-server.vercel.app/api/updatestatusdenied/${id}`, { status: newStatus })
      .then((response) => {
        if (response.status === 200) {
          const updatedData = data.map((item) => {
            if (item._id === id) {
              return { ...item, status: newStatus };
            }
            return item;
          });
          setData(updatedData);
          Swal.fire('Status Updated Successfully');
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
    <div className='text-white'>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className='text-white'>
                <th>Class image</th>
                <th>Instructor Name</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((booking) => (
                <tr key={booking._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask-squire circle w-24  h-24">
                          <img src={booking.classImageURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{booking.className}</div>
                      </div>
                    </div>
                  </td>
                  <td>{booking.instructorName}</td>
                  <td>{booking.className}</td>
                  <td> $ {booking.price}</td>
                  <td>{booking.status}</td>
                  <td>
                  {booking.status === 'pending' && (
                      <>
                        <button
                          className="btn btn-primary m-3"
                          onClick={() => handleUpdateStatus(booking._id, 'approved')}
                          disabled={booking.status !== 'pending'}
                        >
                          {booking.status === 'pending' ? 'Approve' : 'Approved'}
                        </button>
                        <button
                          className="btn btn-accent text-white"
                          onClick={() => handleUpdateStatustwo(booking._id, 'denied')}
                          disabled={booking.status !== 'pending'}
                        >
                          {booking.status === 'pending' ? 'Deny' : 'Denied'}
                        </button>
                      </>
                    )}
                    {(booking.status === 'approved' || booking.status === 'denied') && (
                      <button
                        className="btn btn-accent text-white"
                        disabled={true}
                      >
                        {booking.status === 'approved' ? 'Approved' : 'Denied'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Test;

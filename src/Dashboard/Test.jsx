import React, { useEffect, useState } from 'react';

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


//   classe/status/denied



  return (
    <div>
      <h1>Update Status</h1>
      {data.map((item) => (
        <div key={item._id}>
          <p>Class Name: {item.className}</p>
          <p>Instructor Name: {item.instructorName}</p>
          {/* <p>Instructor Email: {item.instructorEmail}</p> */}
          <p>Price: {item.price}</p>
          {/* <p>Available Seat: {item.availableSeat}</p> */}
          {/* <img src={item.classImage} alt="Class" /> */}
          <p>Status: {item.status}</p>
          {item.status === 'pending' && (
            <>
              <button className='btn btn-primary' onClick={() => handleUpdateStatus(item._id, 'approved')}>
                {item.status === 'pending' ? 'Approve' : 'Approved'}
              </button>
              <button className='btn btn-primary' onClick={() => handleUpdateStatustwo(item._id, 'denied')}>
                {item.status === 'pending' ? 'Deny' : 'Denied'}
              </button>
            </>
          )}
          {/* {item.status !== 'pending' && (
            // <p>Status: {item.status}</p>
          )} */}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Test;

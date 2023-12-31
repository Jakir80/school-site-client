/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SingleClassCard = ({ singleclass }) => {
  const navigate=useNavigate();
  const { user } = useContext(AuthContext)
  const { className,
    classImageURL,
    availableSeats,
    price, 
    instructorName } = singleclass;
  const handleBooking = () => {
    const bookingData = {
      className,
      classImageURL,
      availableSeats,
      price,
      instructorName,
      booked:singleclass._id,
      email: user?.email,
    
    };

    fetch('https://school-site-server.vercel.app/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
      .then(response => response.json())
      .then(data => {
        // console.log('Booking response:', data);
        if (data.insertedId) {
         Swal.fire('added successfully')
        }
      })
      .catch(error => {
        console.error('Error booking class:', error);
      })
  }

  const toasts=()=>{
    if (!user) {
      Swal.fire('Please Login first')
      navigate('/login')
    }
  }

  return (
    <div>
      <div className="card card-compact w-96 text-white  shadow-2xl border-b-sky-600  border-2 bg-emerald-800">
        <figure><img src={classImageURL} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Instructor Name:  {
            instructorName}</h2>
          <h2 className="card-title">Class Name:  {className}</h2>
          {/* <p> How Much Student Buy it :  {students_enrolled}</p> */}
          <p> Available Seat:  {availableSeats}</p>
          <div className="card-actions justify-end">
         {
          user? <button onClick={handleBooking} className="btn btn-accent p-2">Booking Now</button>:<button onClick={toasts} className="btn btn-accent p-2">Booking Now</button>

         }

          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleClassCard;
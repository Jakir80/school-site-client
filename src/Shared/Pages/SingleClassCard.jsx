/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SingleClassCard = ({singleclass}) => {
    const { picture, students_enrolled, class_name ,instructor_name,available_seats} = singleclass;

const {user}=useContext(AuthContext)
    const handleBooking = () => {
        const bookingData = {
          class_name,
          students_enrolled,
          picture,
          instructor_name,
          available_seats,
          email:user.email,
        
        };
    
        fetch('http://localhost:5000/booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookingData)
        })
          .then(response => response.json())
          .then(data => {
            // console.log('Booking response:', data);
            if(data.insertedId){
                alert("Booked Successfully")
            }
          })
          .catch(error => {
            console.error('Error booking class:', error);
          })}      
    return (
        <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name:  {instructor_name}</h2>
                <h2 className="card-title">Class Name:  {class_name}</h2>
                <p> How Much Student Buy it :  {students_enrolled}</p>
                <p> Available Seat:  {available_seats}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleBooking} className="btn btn-primary">Booked</button>

                </div>
                
            </div>
        </div>
    </div>
    );
};

export default SingleClassCard;
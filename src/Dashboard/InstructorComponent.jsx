
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';

const InstructorComponent = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const response = await fetch('http://localhost:5000/addclasses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                className: data.className,
                classImageURL: data.classImageURL,
                instructorName: user.displayName,
                instructorEmail: user.email,
                availableSeats: data.availableSeats,
                price: data.price,
                status: 'pending',
            }),
        });
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData.message);
            // Handle success or show a success message
        }
    }

    return (
        <div className='m-auto'>
            <h2 className='text-4xl font-semibold text-gray-400 text-center'>Add your Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-5 m-4'>
                    <div className='w-1/2'>
                        <p className='font-semibold'>Add Your Class Name</p>
                        <input className='border-2 border-red-blue p-2 m-3 w-full'
                            type="text"
                            {...register("className", { required: true })}
                            placeholder="Class Name"
                        />
                        {errors.className && <span>Class Name is required</span>}
                    </div>
                    <div  className='w-1/2'>
                    <p className='font-semibold'>Add Your Class Image url</p>
                        <input className='border-2 w-full border-red-blue p-2 m-3'
                            type="text"
                            {...register("classImageURL", { required: true })}
                            placeholder="Class Image URL"
                        />
                        {errors.classImageURL && <span>Class Image URL is required</span>}
                    </div>
                </div>

                <div className='flex gap-5 m-4'>
                    <div  className='w-1/2'>
                    <p className='font-semibold'>Your Name</p>
                        <input className='border-2 w-full border-red-blue p-2 m-3'
                            type="text"
                            value={user?.displayName}
                            readOnly
                        />
                    </div>

                    <div  className='w-1/2'>
                    <p className='font-semibold'> Your Email</p>
                        <input className='border-2 w-full border-red-blue p-2 m-3'
                            type="text"
                            value={user?.email}
                            readOnly
                        />
                    </div>
                </div>

                <div className='flex gap-5 m-4'>
                    <div  className='w-1/2'>
                    <p className='font-semibold'>Available Seat</p>
                        <input className='border-2 w-full border-red-blue p-2 m-3'
                            type="text"
                            {...register("availableSeats", { required: true })}
                            placeholder="Available Seats"
                        />
                        {errors.availableSeats && <span>Available Seats is required</span>}
                    </div>

                    <div  className='w-1/2'>
                    <p className='font-semibold m-auto'>Add Your Class Price</p>
                        <input className='border-2 w-full border-red-blue p-2 m-3'
                            type="text"
                            {...register("price", { required: true })}
                            placeholder="Price"
                        />
                        {errors.price && <span>Price is required</span>}
                    </div>
                </div>

                <button className='btn btn-primary bg-gray-500 p-2 m-2 w-full' type="submit">Add Class</button>
            </form>
        </div>
    );
};

export default InstructorComponent;

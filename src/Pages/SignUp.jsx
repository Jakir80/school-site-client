import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
// Update the path to your AuthContext

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(loggedUser,data.name, data.photoUrl)
          .then(() => {
            const saveUser = { name: data.name, email: data.email,photoUrl:data.photoUrl }
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })
          })
          .catch(error => console.log(error))
      })
  }
  const handleGooglesignin = () => {
    signInWithGoogle()
      .then(result => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email,photo:loggedInUser.photoUrl }
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          })
      })


  }
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                },
              })}
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                validate: (value) =>
                  value === getValues('password') || 'Passwords do not match',
              })}
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="photoUrl" className="block text-gray-700 text-sm font-bold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              id="photoUrl"
              {...register('photoUrl')}
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
              placeholder="Enter your photo URL"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg focus:outline-none focus:shadow-outline-blue"
          >
            Sign Up
          </button>
        </form>
        <button className='btn-lg btn-primary' onClick={handleGooglesignin}> Google </button>
      </div>
    </div>
  );
};

export default SignUp;

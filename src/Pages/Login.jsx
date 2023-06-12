import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate=useNavigate()
  const { signIn } = useContext(AuthContext);
  const onSubmit = (data) => {
  
    signIn(data.email, data.password);
    navigate('/')
  };

  return (
    <div className="flex w-full p-40 bg-gray-200">
      <div className="m-auto w-1/3">
        <form onSubmit={handleSubmit(onSubmit)} className="text-white shadow-md  p-20 rounded-lg border-2 w-full border-green-500 mb-4">
          <div className="mb-4 ">
            <label className=" text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              {...register('email', { required: true })}
              type="text"
              placeholder="Email"
              className={`shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">Email is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              {...register('password', { required: true })}
              type="password"
              placeholder="Password"
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? 'border-red-500' : ''
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">Password is required</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="text-white btn btn-accent"
            >
              Sign In
            </button>

          </div>
        </form>
      <p className='text-black'>Dont have a account please Sign up <Link to='/SignUp'><button className='btn btn-accent'>Sign Up</button></Link> </p>
      </div>
    </div>
  );
};

export default Login;

import { Link } from "react-router-dom";
// import useTitle from "../../JSFUNCTION/useTitle";
const Error = () => {
    
    return (
        <div className='max-w-7xl  mx-auto'>
            <div className="flex flex-col items-center justify-center mt-20 bg-emerald-800">
                <Link to="/" className="px-4 mb-8 py-2 mt-8 text-white rounded hover:bg-gray-800 transition duration-300 ease-in-out btn btn-accent">
                    Go back to home
                </Link>
                <img src='https://media.istockphoto.com/id/175434516/photo/not-found.jpg?b=1&s=170667a&w=0&k=20&c=qpebaUiECCUI6wSa0InzbEWZVWqgNHz03dAc-QCr0Vs=' alt="Error" className="h-64 mb-8" />
                <h1 className="text-3xl font-bold mb-4 text-white">Oops! Something went wrong.</h1>
                <p className=" mb-8 text-white">We apologize for the inconvenience.</p>
            </div>
        </div>
    );
};

export default Error;
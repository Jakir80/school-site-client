import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme,Settheme]=useState('light')
    const handleLogout = () => {
        logOut()
    }


    useEffect(()=>{
       if(theme==='dark'){
        document.documentElement.classList.add('dark')
       }
       else{
        document.documentElement.classList.add('light')
       } 
    },[theme])

    const handledarkandlight = () => {
   Settheme(theme==='dark'?'light':'dark')

        
    };



    // const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const isActiveRoute = (route) => {
        return route === location.pathname;
    };

    return (
        <nav className="bg-emerald-800 mb-8  sticky-top">
            <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex gap-5 items-center">
                        <img src="https://i.postimg.cc/7YQyztjs/download-removebg-preview.png"  alt="Logo" className="h-20 w-auto  avatar rounded-circle text-white" />
                        <h1 className='text-red-400 font-semibold text-3xl'>sports <span>World</span> </h1>
                    </div>
                    <div className="hidden sm:flex sm:items-center sm:justify-center flex-grow">
                        <Link
                            to="/"
                            className={`text-white font-medium text-xl hover:text-gray-300 ${isActiveRoute('/') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/classes"
                            className={`text-white font-medium text-xl hover:text-gray-300 ml-6 ${isActiveRoute('/blog') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                           Classes
                        </Link>

                        <Link
                            to="/headerinstructor"
                            className={`text-white font-medium text-xl hover:text-gray-300 ml-6 ${isActiveRoute('/alltoys') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                          Instructor
                        </Link>
                        <Link
                            to="/dashboard"
                            className={`text-white font-medium text-xl hover:text-gray-300 ml-6 ${isActiveRoute('/mytoys') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                           Dashboard
                        </Link>  
                   
                    </div>

                
                    <div className='flex gap-3'>
                        <>{
                            user ? <> <img title={user?.displayName} className="rounded-full rounded-circle me-2" style={{ width: '60px', height: '60px' }} src={user?.photoURL} alt="" />
                                <button onClick={handleLogout} className="btn btn-accent p-2 text-white">Log Out</button> </> : <Link to='/login'><button className="btn btn-accent p-2 text-white">Login</button></Link>

                        }
                         </>
                    </div>

                    {/* Mobile Menu */}
                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="text-white hover:text-gray-300 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5 7h14v2H5V7zm0 6h14v-2H5v2zm0 6h14v-2H5v2z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Items */}
                {isMenuOpen && (
                    <div className="pt-2 pb-3 space-y-1 sm:hidden">
                        <Link
                            to="/"
                            className={`text-white block hover:text-gray-300 font-medium ${isActiveRoute('/') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/classes"
                            className={`text-white block hover:text-gray-300 font-medium ${isActiveRoute('/classes') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Classes
                        </Link>
                        <Link
                            to="/headerinstructor"
                            className={`text-white block hover:text-gray-300 font-medium ${isActiveRoute('/headerinstructor') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                           Instructor
                        </Link>
                     
                        <Link
                            to="/dashboard"
                            className={`text-white block hover:text-gray-300 font-medium ${isActiveRoute('/dashboard') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Dashboard
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;


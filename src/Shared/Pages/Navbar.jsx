import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
    }
    const [isDarkMode, setIsDarkMode] = useState(false);
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


    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      // You can add additional logic here to apply dark mode to your website
    };




    return (
        <nav className="bg-emerald-800 mb-8  sticky-top">
            <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src="https://i.ibb.co/qdYFr2f/box.png" alt="Logo" className="h-20 w-auto" />
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
                      {/* <ThemeToggle></ThemeToggle>                   */}
                                         
                    </div>

                    {/* User Login Button */}
                    <div className='flex gap-3'>
                        <>{
                            user ? <> <img title={user?.displayName} className="rounded rounded-circle me-2" style={{ width: '40px', height: '40px' }} src={user?.photoURL} alt="" />
                                <button onClick={handleLogout} className="btn btn-outline-primary fw-semibold">Log Out</button> </> : <Link to='/login'><button className="btn btn-outline-primary">Login</button></Link>

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
                            to="/blog"
                            className={`text-white block hover:text-gray-300 font-medium ${isActiveRoute('/blog') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/alltoys"
                            className={`text-white block hover:text-gray-300 font-medium ${isActiveRoute('/alltoys') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            All Toys
                        </Link>
                        <Link
                            to="/mytoys"
                            className={`text-white block hover:text-gray-300 font-medium ${isActiveRoute('/mytoys') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            My Toys
                        </Link>
                        <Link
                            to="/addproduct"
                            className={`text-white block hover:text-gray-300 font-medium ${isActiveRoute('/addproduct') ? 'underline text-blue-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Add Toys
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;


import { FaAccusoft, FaAd, FaBook, FaCannabis, FaCartPlus, FaCreditCard, FaHome, FaMonero, FaRestroom, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import UseAdmin from './Admin';
import useInstructor from './Useinstructor';
const Dashboard = () => {
    // const isAdmin=true
    // const [isAdmin] = Admin()
    const [isAdmin] = UseAdmin()
    const [isInstructor] = useInstructor()
    return (
        <div>
            <div className="drawer  lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side  bg-emerald-800">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  bg-emerald-800 text-center text-white ">
                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/welcome'> <FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to='dashboard/alluser'>
                                   <FaUser></FaUser> All user</NavLink></li>
                                <li><NavLink to='dashboard/allclass'>
                                   <FaAccusoft></FaAccusoft> Manage CLasses </NavLink></li></> : isInstructor ?
                                <>
                                    <li><NavLink to='/dashboard/addclass'>
                                       <FaAd></FaAd> Add class</NavLink>
                                    </li>
                                    <li><NavLink> <FaMonero></FaMonero> Student enrolled</NavLink></li>
                                    <li><NavLink to='/dashboard/myclass'>
                                       <FaRestroom></FaRestroom> My Class</NavLink></li></> : <>
                                    <li><NavLink to='dashboard/booking'>
                                       <FaBook></FaBook> My Booking</NavLink>
                                    </li>
                                    
                                    <li><NavLink to='dashboard/payment'> <FaCreditCard></FaCreditCard> Payment History</NavLink></li>
                                    
                                    <li><NavLink to='/dashboard/myenrolled'> <FaCreditCard></FaCreditCard> My  Enrolled</NavLink></li>
                                    
                                    </>
                        }
                        <div className='divider'></div>
                        <li><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/classes'> <FaCannabis></FaCannabis> Classes</NavLink></li>
                        <li><NavLink to='dashboard/booking'> <FaCartPlus></FaCartPlus> My Booking </NavLink></li>


                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from './Admin';
import useInstructor from './Useinstructor';
const Dashboard = () => {
// const isAdmin=true
    // const [isAdmin] = Admin()
    const [isAdmin] = UseAdmin()
    const [isInstructor] = useInstructor()
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">               
                        {
                            isAdmin ? <>
                                <li><Link>Admin Home</Link></li>
                                <li><Link to='/alluser'>All user</Link></li>
                                <li><Link to='/approved'>Approved </Link></li></> : isInstructor ?
                                <>
                                    <li><Link to='/addclass'>Add class</Link>
                                    </li>
                                    <li><Link>Student enrolled</Link></li>
                                    <li><Link to='/myclass'>My Class</Link></li></> : <>
                                    <li><Link to='/booking'>My Booking</Link>
                                    </li>
                                    <li><Link>Payment History</Link></li>
                                    <li><Link>User Home</Link></li></>
                        }
                        <div className='divider'></div>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/classes'>Classes</Link></li>
                        <li><Link to='/booking'>My Booking </Link></li>


                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;
import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../Dashboard/AdminHome";
import Alluser from "../Dashboard/Alluser";
import Dashboard from "../Dashboard/Dashboard";
import InstructorComponent from "../Dashboard/InstructorComponent";
import Payment from "../Dashboard/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory";
import Test from "../Dashboard/Test";
import UpdateClass from "../Dashboard/UpdateClass";
import Main from "../Layouts/Main";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Classes from "../Shared/Pages/Classes";
import Error from "../Shared/Pages/Error";
import HeaderInstructor from "../Shared/Pages/HeaderInstructor";
import Home from "../Shared/Pages/Home";
import MyBookings from "../Shared/Pages/MyBookings";
import Myclass from "../Shared/Pages/Myclass";
import AdminRoute from "./AdminRout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>

            },
            {
                path: 'SignUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'headerinstructor',
                element: <HeaderInstructor></HeaderInstructor>
            },

            // {
            //     path:'dashboard',
            //     element:<Dashboard></Dashboard>
            // },





            {
                path: 'updateclass/:id',
                element: <UpdateClass></UpdateClass>,
                loader: ({ params }) => fetch(`https://school-site-server.vercel.app/update/${params.id}`)

            },


            {
                path: 'dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: 'dashboard/payment',
                        element: <PaymentHistory></PaymentHistory>
                    },
                    {
                        path: 'dashboard/allclass',
                        element: <AdminRoute><Test></Test></AdminRoute>
                    },
                    {
                        path: 'myclass',
                        element: <Myclass></Myclass>
                    },
                    {
                        path: 'dashboard/alluser',
                        element: <AdminRoute><Alluser></Alluser></AdminRoute>
                    },
                    {
                        path: 'addclass',
                        element: <InstructorComponent></InstructorComponent>
                    },
                    {
                        path: 'dashboard/booking',
                        element: <MyBookings></MyBookings>
                    },

                    {
                        path: 'dashboard/booking/payment/:id',
                        element: <Payment></Payment>,
                        loader: ({ params }) => fetch(`https://school-site-server.vercel.app/payment/${params.id}`)

                    },
                    {
                        path:'welcome',
                        element:<AdminHome></AdminHome>
                    }

                ]

            }


        ]


    },


    ///new routs



])
export default router;
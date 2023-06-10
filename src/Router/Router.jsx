import { createBrowserRouter } from "react-router-dom";
import Alluser from "../Dashboard/Alluser";
import Dashboard from "../Dashboard/Dashboard";
import InstructorComponent from "../Dashboard/InstructorComponent";
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

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>

            },
            {
                path:'SignUp',
                element:<SignUp></SignUp>
            },
            {
                path:'classes',
                element:<Classes></Classes>
            },
            {
                path:'headerinstructor',
                element:<HeaderInstructor></HeaderInstructor>
            },
           
            {
                path:'dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'booking',
                element:<MyBookings></MyBookings>
            },
            {
                path:'addclass',
                element:<InstructorComponent></InstructorComponent>
            },
            {
                path:'alluser',
                element:<Alluser></Alluser>
            },
            {
                path:'myclass',
                element:<Myclass></Myclass>
            },
            {
                path:'updateclass/:id',
                element:<UpdateClass></UpdateClass>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)
            
            }
         
            
        ]

        
    }
])
export default router;
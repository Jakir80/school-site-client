import { Outlet } from "react-router-dom";
import Footer from "../Shared/Pages/Footer";
import Navbar from "../Shared/Pages/Navbar";

const Main = () => {
    return (
        <div>
         <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;
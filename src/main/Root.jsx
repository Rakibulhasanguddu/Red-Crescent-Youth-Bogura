import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Pagaes/Footer";

// import Home from "../Pagaes/Home";



const Root = () => {
    return (
        <div className=" container mx-auto mt-8 ">
            <Navbar></Navbar>
            <Outlet></Outlet>
         <Footer></Footer>
         
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/home/BackToTop";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
           <div className="min-h-screen max-w-full mx-auto px-4">
            <Outlet></Outlet>
           </div>
           <div className="">
             <BackToTop />
           </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;
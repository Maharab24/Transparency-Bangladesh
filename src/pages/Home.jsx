import { useEffect } from "react";
import AboutUs from "../components/home/AboutUs";
import Accordion from "../components/home/Accordion";
import Features from "../components/home/Features";
import Slider from "../components/home/Slider";
import { Link } from "react-router-dom";


const Home = () => {
    useEffect(() => {
        // Initialize scroll position
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="">
            <Slider></Slider>
            <div className="md:my-20">

                <Features></Features>
            </div>
            <div className="md:my-20">

                <Accordion></Accordion>
            </div>
            <div className="md:my-20 w-5/6 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">
                        Do You Want To Know About Us  ??
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6 "></div>
                    <div className="flex flex-col gap-10">
                       
                    <Link to="/AboutUs" >
                        <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg ">
                            About Us
                        </button>
                    </Link>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Home;
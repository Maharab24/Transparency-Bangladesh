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
           

        </div>
    );
};

export default Home;
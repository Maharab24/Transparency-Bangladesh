import { useEffect } from "react";
import About from "../components/home/About";
import Accordion from "../components/home/Accordion";
import Features from "../components/home/Features";
import Slider from "../components/home/Slider";


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

            <About></About>


            </div>

        </div>
    );
};

export default Home;
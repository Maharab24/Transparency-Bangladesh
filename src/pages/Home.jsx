import About from "../components/home/About";
import Accordion from "../components/home/Accordion";
import Features from "../components/home/Features";
import Slider from "../components/home/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="md:my-20">
            <h1 className="my-10 md:text-4xl text-3xl font-bold text-center text-orange-700">Features</h1>
             <Features></Features>
            </div>
            <div className="md:my-20">
            <h1 className="my-10 md:text-4xl text-3xl font-bold text-center text-orange-700">Frequently Asked Questions</h1>
            <Accordion></Accordion>
            </div>
            <div className="md:my-20 w-5/6 mx-auto">
            <h1 className="my-10 md:text-4xl text-3xl font-bold text-center text-orange-700">About Us</h1>
            <About></About>
            </div>

        </div>
    );
};

export default Home;
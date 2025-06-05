import About from "../components/education/About";
import Banner from "../components/education/Banner";
import Icons from "../components/education/Icons";
import Trainers from "../components/education/Trainers";


const EducationHub = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <Icons></Icons>
            </div>
            <div>
                <Trainers></Trainers>
            </div>
            <div className="my-20">
              <About></About>
            </div>
        </div>
    );
};

export default EducationHub;
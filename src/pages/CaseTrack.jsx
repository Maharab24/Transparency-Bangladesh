import { Link } from "react-router-dom";
import Update from "../components/caseTrack/Update";
import SearchCase from "../components/caseTrack/SearchCase";

const CaseTrack = () => {
    return (
        <div className="md:px-5 lg:w-3/4 mx-auto">
            <div className=" flex justify-center">
                <Link to='/form'>
                    <button className="btn bg-orange-300 px-10 py-10 text-sm font-bold text-orange-800">Submit <br />Your Case</button>
                </Link>
            </div>
            {/* table */}
            <Update></Update>
            {/* Search case */}
          <SearchCase></SearchCase>
        </div>
    );
};

export default CaseTrack;
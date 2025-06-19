import { Link } from "react-router-dom";
import Update from "../components/caseTrack/Update";
import SearchCase from "../components/caseTrack/SearchCase";

const CaseTrack = () => {
    return (
        <div className="md:px-5 lg:w-3/4 mx-auto">


            <Update></Update>

          <SearchCase></SearchCase>
        </div>
    );
};

export default CaseTrack;
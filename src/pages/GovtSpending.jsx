import Allocate from "../components/govtSpending/Allocate";
import Budget from "../components/govtSpending/Budget";
import Projects from "../components/govtSpending/Projects";

const GovtSpending = () => {
    return (
        <div className="mb-8">
            <Budget></Budget>
            <div>
                <Allocate></Allocate>
            </div>
            <div className="mt-16 lg:w-3/4 mx-auto">
                <Projects></Projects>
            </div>
        </div>

    );
};

export default GovtSpending;
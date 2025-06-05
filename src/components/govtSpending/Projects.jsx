

const Projects = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">

                <thead className="bg-orange-100">
                    <tr className="text-orange-800 text-xl">
                        <td>Project</td>
                        <td>Timeline</td>
                        <td>Cost</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className=' font-semibold text-orange-600 bg-red-50'>
                        <td>Highway Expansion</td>
                        <td>Jan 2023 - Dec 2025</td>
                        <td>$50000</td>
                        <td>Delayed</td>
                    </tr>
                    <tr className=' font-semibold text-orange-600 bg-red-50'>
                        <td>Highway Expansion</td>
                        <td>Jan 2023 - Dec 2025</td>
                        <td>$50000</td>
                        <td>Delayed</td>
                    </tr>
                    <tr className=' font-semibold text-orange-600 bg-red-50'>
                        <td>Highway Expansion</td>
                        <td>Jan 2023 - Dec 2025</td>
                        <td>$50000</td>
                        <td>Delayed</td>
                    </tr>
                    <tr className=' font-semibold text-orange-600 bg-red-50'>
                        <td>Highway Expansion</td>
                        <td>Jan 2023 - Dec 2025</td>
                        <td>$50000</td>
                        <td>Delayed</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Projects;
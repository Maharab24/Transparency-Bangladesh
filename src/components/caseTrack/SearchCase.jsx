

const SearchCase = () => {
    return (
         <div className="md:mt-14 mt-9">
                <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 gap-5">
                    <div>
                        <h2 className="text-orange-700 font-bold mb-3">Search by Case ID</h2>
                        <input type="text" placeholder="" className="input" />
                    </div>
                    <div>
                        <h2 className="text-orange-700 font-bold mb-3">Filtering and Grouping</h2>
                        <input type="text" placeholder="" className="input" />
                    </div>
                </div>
               <div className="overflow-x-auto my-10">
                    <table className="table">

                        <thead className="bg-orange-100">
                            <tr className="text-orange-800 text-xl">
                                <td>Case ID</td>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Status</td>
                                <td>Sentence</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=' font-semibold text-orange-600 bg-red-50'>
                                <td>001</td>
                                <td>jani na</td>
                                <td>no</td>
                                <td>Delayed</td>
                                <td>Death</td>
                            </tr>
                            <tr className=' font-semibold text-orange-600 bg-red-50'>
                                <td>001</td>
                                <td>jani na</td>
                                <td>no</td>
                                <td>Delayed</td>
                                <td>Death</td>
                            </tr>
                            <tr className=' font-semibold text-orange-600 bg-red-50'>
                                <td>001</td>
                                <td>jani na</td>
                                <td>no</td>
                                <td>Delayed</td>
                                <td>Death</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default SearchCase;
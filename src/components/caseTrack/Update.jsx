

const Update = () => {
    return (
       <div className="">
                <h1 className="mt-10 text-2xl font-bold text-orange-700 mb-5">Your Case Update :</h1>
                <div className="overflow-x-auto">
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
                {/* update */}
                <div className="flex justify-center lg:mt-14 md:mt-10 mt-8">
                    <div className="stats stats-horizontal shadow">
                        <div className="stat md:px-10 md:py-7">
                            <div className="stat-title text-orange-700 md:text-xl text-sm font-semibold">Total Case</div>
                            <div className="stat-value text-orange-600">300</div>

                        </div>

                        <div className="stat md:px-10 md:py-7">
                            <div className="stat-title text-orange-700 md:text-xl text-sm font-semibold">Solved</div>
                            <div className="stat-value text-orange-600">200</div>

                        </div>

                        <div className="stat md:px-10 md:py-7">
                            <div className="stat-title text-orange-700 md:text-xl text-sm font-semibold">Pending</div>
                            <div className="stat-value text-orange-600">100</div>

                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
    );
};

export default Update;
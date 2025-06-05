

const ReportingTool = () => {
    return (
        <div className="md:ml-10 lg:mt-3">

            <div className="flex">
                <input type="text" name="type" placeholder="Problem type" className="input input-bordered"
                />
                <button className="btn ml-7">ok</button>
            </div>
            <div className="mt-8">

                <textarea placeholder="description" rows={6} className="textarea textarea-lg lg:w-1/2 md:w-2/3 w-full"></textarea>
            </div>
            <h2 className="text-gray-700 font-semibold text-2xl mt-7">Reporter Information :</h2>
            <div className="mt-5 flex flex-col gap-2">
                <h2 className="text-gray-500 font-bold">Name</h2>
                <input type="text" placeholder="" className="input input-info" />
                <h2 className="text-gray-500 font-bold">NID</h2>
                <input type="text" placeholder="" className="input input-info" />
                <h2 className="text-gray-500 font-bold">Phone Number</h2>
                <input type="text" placeholder="" className="input input-info" />
                <div className="mt-6 mb-6">
                    <button className="btn bg-sky-300">Submit</button>
                </div>

            </div>




        </div>
    );
};

export default ReportingTool;
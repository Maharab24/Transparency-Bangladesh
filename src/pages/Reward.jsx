import gift from '../assets/images/gift.png';

const Reward = () => {
    return (
        <div className="md:ml-10 ml-3">

            <div className=" lg:w-full lg:h-[500px] w-full md:h-[400px] rounded-3xl flex flex-col md:flex-row justify-between gap-3 items-center lg:px-20 md:px-10 px-4">
                <div className='lg:w-[50%] md:w-[60%] w-full h-full'>
                    <h1 className='lg:text-2xl md:text-xl font-semibold text-orange-800 text-center h-full flex items-center'>
                        Stand against corruption and choose the path of integrity. Every honest action helps build a stronger, fairer society. Integrity earns trust, respect, and lasting rewards. Be the change that inspires others and leads to meaningful progress.

                    </h1>
                </div>
                <div className="lg:w-[50%] md:w-[35%] w-[70%] mx-auto h-full">
                    <img className='w-full h-full object-contain' src={gift} alt="" />
                </div>

            </div>
        {/* Rules for Reward */}
            <div>
                <h1 className='text-orange-700 font-bold md:text-2xl text-xl my-7'>Rules for the Reward System :</h1>
                <div
                    className="bg-orange-300 lg:w-[40%] md:w-[70%] h-32 p-14 flex items-center justify-center text-center text-orange-900 font-semibold mb-10"
                    style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0% 100%)' }}
                >
                    Get a 25% price money on the penalty
                </div>
            </div>
            <div>
                <div
                    className="bg-orange-300 lg:w-[40%] md:w-[70%] h-32 p-14 flex items-center justify-center text-center text-orange-900 font-semibold "
                    style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0% 100%)' }}
                >
                   Be Honest, dont give any wrong information
                </div>
            </div>

            {/* Info */}
            <h2 className="text-orange-700 font-bold md:text-2xl text-xl  mt-14">Give your information to check your rewards :</h2>
            <div className="mt-5 flex flex-col gap-2">
                <h2 className="text-orange-700 font-bold">Name</h2>
                <input type="text" placeholder="" className="input input-info" />
                <h2 className="text-orange-700 font-bold">NID Number</h2>
                <input type="text" placeholder="" className="input input-info" />
                <h2 className="text-orange-700 font-bold">Phone Number</h2>
                <input type="text" placeholder="" className="input input-info" />
                <div className="mt-6 mb-6">
                    <button className="btn bg-orange-300">Submit</button>
                </div>

            </div>
        </div>
    );
};

export default Reward;
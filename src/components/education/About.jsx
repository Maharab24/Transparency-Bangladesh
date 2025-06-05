import banner from '../../assets/images/img.png';

const About = () => {
    return (
        <div className='lg:mt-24'>
            {/* <div className='object-cover bg-no-repeat relative lg:w-full lg:h-[580px] w-full md:h-[400px] h-[250px] rounded-3xl md:bg-cover  bg-contain border border-black' style={{ backgroundImage: `url(${banner})` }}>
            <h1 className='lg:text-xl md:text-sm font-semibold md:w-2/5 absolute lg:left-[28%] lg:top-[50%] md:left-[30%] md:top-[30%] flex text-orange-800 border border-black'>
                Corruption is the abuse of power for personal benefit through bribery, fraud, or favoritism. It damages trust, increases inequality, and hinders development. Effective prevention needs transparency, strong laws, accountability, and active public participation to ensure fair and just governance.
            </h1>
        </div> */}

            <div className="lg:w-full lg:h-[500px] w-full md:h-[400px] rounded-3xl flex flex-col md:flex-row justify-between gap-3 items-center lg:px-20 md:px-10 px-4">
                <div className="lg:w-[50%] md:w-[35%] w-1/2 mx-auto h-full">
                    <img className='w-full h-full object-contain' src={banner} alt="" />
                </div>

                <div className="lg:w-[50%] md:w-[60%] w-full h-full">
                    <h1 className="hidden lg:flex text-2xl font-semibold text-orange-800 items-center text-center h-full">
                        Corruption is the misuse of power for personal gain, often involving bribery, fraud, or favoritism. It undermines trust, weakens institutions, and harms economic growth. Corruption diverts resources away from essential services, increases inequality, and fosters injustice. Combating it requires transparency, accountability, strong laws, and active public and institutional oversight.
                    </h1>

                    <h1 className="hidden md:flex lg:hidden text-xl font-semibold text-orange-800 items-center text-center h-full">
                        Corruption is the misuse of power for personal gain. It includes bribery, fraud, and favoritism, weakening institutions and harming development and public trust.
                    </h1>

                    <h1 className="flex md:hidden text-lg font-semibold text-orange-800 items-center text-center h-full">
                        Corruption is the misuse of power for personal gain. It includes bribery, fraud, and favoritism, weakening institutions and harming development and public trust.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default About;
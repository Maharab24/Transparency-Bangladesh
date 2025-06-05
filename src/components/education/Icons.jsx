import icon1 from '../../assets/images/training.png';
import icon2 from '../../assets/images/law.png';
import icon3 from '../../assets/images/event.png';
import { Link } from 'react-router-dom';

const Icons = () => {
    return (
        <div className='my-10 flex flex-col md:flex-row justify-between items-center lg:px-20 px-10 gap-9 md:gap-5'>
           <Link>
            <div className=' lg:h-[200px] h-[150px] '>
                    <img className='w-full h-full object-contain rounded-3xl hover:bg-orange-200 hover:transition delay-150 duration-600 hover:-translate-y-2 lg:p-9 p-7' src={icon1} alt="" />
               
                <h3 className='md:text-xl font-bold text-center'>Training Session</h3>
            </div>
           </Link>
           <Link>
            <div className=' lg:h-[200px] h-[150px]'>
                
                    <img className='w-full h-full object-contain rounded-3xl hover:bg-orange-200 hover:transition delay-150 duration-600 hover:-translate-y-2 lg:p-9 p-7' src={icon2} alt="" />

                <h3 className='md:text-xl font-bold text-center'>Law for Corruption</h3>
            </div>
           </Link>
           <Link>
            <div className=' lg:h-[200px] h-[150px]'>
                
                    <img className='w-full h-full object-contain rounded-3xl hover:bg-orange-200 hover:transition delay-150 duration-600 hover:-translate-y-2 lg:p-9 p-7' src={icon3} alt="" />

                <h3 className='md:text-xl font-bold text-center'>Event list to reduce corruption</h3>
            </div>
           </Link>
        </div>
    );
};

export default Icons;
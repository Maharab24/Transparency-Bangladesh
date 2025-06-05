import { Link } from 'react-router-dom';
import awareness from '../../assets/images/awareness.png';
import caseTracking from '../../assets/images/case tracking.png';
import heatmap from '../../assets/images/map.png';
import report from '../../assets/images/report_icon.png';
import reward from '../../assets/images/reword_icon.png';
import spending from '../../assets/images/spending tracker.png';

const Features = () => {
    return (
        <div className="mt-10 lg:flex md:grid md:grid-cols-3 grid grid-cols-2 gap-6 mb-10">

            <div className='hover:border-2 border-dotted border-orange-200 p-5 rounded-3xl space-y-4 hover:bg-orange-300 hover:transition delay-150 duration-600 hover:-translate-y-5'>
                <Link to='/reporting'>
                <div>
                    <img className='w-full h-[50px] object-contain' src={report} alt="" />
                </div>

                <h3 className='md:text-xl font-bold text-center'>Corruption Reporting Tool</h3>
                </Link>
                

            </div>
           
            <div className='hover:border-2 border-dotted border-orange-200 p-5 rounded-3xl space-y-4 hover:bg-orange-300 hover:transition delay-150 duration-600 hover:-translate-y-5'>
                <Link to='/heatmap'>
                <div>
                    <img className='w-full h-[50px] object-contain' src={heatmap} alt="" />
                </div>

                <h3 className='md:text-xl font-bold text-center'>Corruption Heatmap</h3>
                </Link>
                

            </div>

             <div className='hover:border-2 border-dotted border-orange-200 p-5 rounded-3xl space-y-4 hover:bg-orange-300 hover:transition delay-150 duration-600 hover:-translate-y-5'>
                <Link to='/case'>
                <div>
                    <img className='w-full h-[50px] object-contain' src={caseTracking} alt="" />
                </div>

                <h3 className='md:text-xl font-bold text-center'>Corruption Case Tracking</h3>

                </Link>
                
            </div>

            <div className='hover:border-2 border-dotted border-orange-200 p-5 rounded-3xl space-y-4 hover:bg-orange-300 hover:transition delay-150 duration-600 hover:-translate-y-5'>
                <Link to='/education'>
                <div className=''>
                    <img className='w-full h-[50px] object-contain' src={awareness} alt="" />
                </div>

                <h3 className='md:text-xl font-bold text-center'>Corruption Education Hub</h3>
                </Link>
              

            </div>
            <div className='hover:border-2 border-dotted border-orange-200 p-5 rounded-3xl space-y-4 hover:bg-orange-300 hover:transition delay-150 duration-600 hover:-translate-y-5'>
                <Link to='/reward'>
                <div>
                    <img className='w-full h-[50px] object-contain' src={reward} alt="" />
                </div>

                <h3 className='md:text-xl font-bold text-center'>Reward System for Information</h3>
                </Link>
              

            </div>
            <div className='hover:border-2 border-dotted border-orange-200 p-5 rounded-3xl space-y-4 hover:bg-orange-300 hover:transition delay-150 duration-600 hover:-translate-y-5'>
                <Link to='/spending'>
                <div>
                    <img className='w-full h-[50px] object-contain' src={spending} alt="" />
                </div>

                <h3 className='md:text-xl font-bold text-center'>Government Spending Tracker</h3>

                </Link>
               
            </div>

        </div>
    );
};

export default Features;
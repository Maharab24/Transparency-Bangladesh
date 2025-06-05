import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';


import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';


const Trainers = () => {
    return (
        <div className="lg:my-20 lg:pl-16 md:pl-6 pl-5  ">
            <h1 className="my-14 md:text-4xl text-3xl font-bold text-center text-orange-700">Trainers</h1>

                <Swiper
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={120}
      
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[ Autoplay,Navigation]}
        onAutoplay={true}
        loop={true}
        className="mySwiper"
      >
      
         <SwiperSlide>
             <div className=" lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar1} alt="" />
                </div>
                
         </SwiperSlide>
         <SwiperSlide>
             <div className=" lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar2} alt="" />
                </div>
               
         </SwiperSlide>
         <SwiperSlide>
             <div className=" lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar3} alt="" />
                </div>
               
         </SwiperSlide>
         <SwiperSlide>
             <div className=" lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar1} alt="" />
                </div>
               
         </SwiperSlide>
         <SwiperSlide>
             <div className=" lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar2} alt="" />
                </div>
               
         </SwiperSlide>
         <SwiperSlide>
             <div className=" lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] w-[100px] h-[100px]  rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar3} alt="" />
                </div>
               
         </SwiperSlide>
       

         </Swiper>
         
              {/* <div className='flex flex-row gap-10 px-20 overflow-x-auto overflow-y-hidden mt-16'>
                <div className=" lg:w-[250px] lg:h-[250px] w-[150px] h-[200px]  rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar1} alt="" />
                </div>
                <div className=" lg:w-[250px] lg:h-[250px] w-[200px] h-[200px]  rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar2} alt="" />
                </div>
                <div className=" lg:w-[250px] lg:h-[250px] w-[200px] h-[200px]  rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar3} alt="" />
                </div>
                <div className=" lg:w-[250px] lg:h-[250px] w-[200px] h-[200px]  rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar1} alt="" />
                </div>
                <div className=" lg:w-[250px] lg:h-[250px] w-[200px] h-[200px]  rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar2} alt="" />
                </div>
                <div className=" lg:w-[250px] lg:h-[250px] w-[200px] h-[200px]  rounded-full flex-shrink-0">
                    <img className='w-full h-full object-cover' src={avatar3} alt="" />
                </div>
            </div> */}
         
        </div>
    );
};

export default Trainers;
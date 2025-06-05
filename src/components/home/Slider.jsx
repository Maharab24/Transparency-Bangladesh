import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import banner1 from '../../assets/images/banner.jpeg'
import banner2 from '../../assets/images/banner1.jpeg';
import banner3 from '../../assets/images/banner2.jpeg';


const Slider = () => {
    return (
        <div className="">
        <Swiper 
          modules={[Autoplay, Pagination,Navigation]}
          pagination={{
            clickable: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
          className="mySwiper"
          onAutoplay={true}
          loop={true}
        >
         <SwiperSlide className='w-full'>
                    <div className='object-cover bg-no-repeat w-full lg:h-[500px] md:h-[250px] bg-contain'>
                        <img className="w-full h-full" src={banner1} alt="" />
                    </div>
                </SwiperSlide>
         <SwiperSlide className='w-full'>
                    <div className='object-cover bg-no-repeat w-full lg:h-[500px] md:h-[250px] bg-contain'>
                        <img className="w-full h-full" src={banner2} alt="" />
                    </div>
                </SwiperSlide>
         <SwiperSlide className='w-full'>
                    <div className='object-cover bg-no-repeat w-full lg:h-[500px] md:h-[250px] bg-contain'>
                        <img className="w-full h-full" src={banner3} alt="" />
                    </div>
                </SwiperSlide>
        </Swiper>
      
    </div>
    );
};

export default Slider;
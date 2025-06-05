import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import banner1 from '../../assets/images/banner3.jpg';
import banner2 from '../../assets/images/banner4.jpeg';
import banner3 from '../../assets/images/banner5.jpeg';

const About = () => {
    return (
        <div className="my-10">
        <Swiper navigation={true}
          modules={[Pagination,Navigation]}
          pagination={{
            clickable: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        
          className="mySwiper"
          
          loop={true}
        >
         <SwiperSlide className=' text-center mb-6'>
                    <div className='object-cover bg-right bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `url(${banner1})` }}>
                     
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='object-cover bg-right bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: ` url(${banner2})` }}>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='object-cover bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `url(${banner3})` }}>
                       
                    </div>
                </SwiperSlide>
        </Swiper>
      
    </div>
    );
};

export default About;
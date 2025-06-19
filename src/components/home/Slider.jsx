import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect } from "react";
import banner1 from '../../assets/images/banner.jpeg';
import banner2 from '../../assets/images/banner1.jpeg';
import banner3 from '../../assets/images/banner2.jpeg';

const Slider = () => {
  useEffect(() => {
    // Add custom styles for pagination and navigation
    const style = document.createElement('style');
    style.innerHTML = `
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background: rgba(255, 255, 255, 0.5);
        opacity: 1;
        transition: all 0.3s ease;
      }

      .swiper-pagination-bullet-active {
        background: #f6824d;
        width: 30px;
        border-radius: 8px;
      }

      .swiper-button-next, .swiper-button-prev {
        color: #f6824d;
        background: rgba(0, 0, 0, 0.3);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        backdrop-filter: blur(2px);
        transition: all 0.3s ease;
      }

      .swiper-button-next:hover, .swiper-button-prev:hover {
        background: rgba(0, 0, 0, 0.5);
        transform: scale(1.1);
      }

      .swiper-button-next::after, .swiper-button-prev::after {
        font-size: 1.2rem;
        font-weight: bold;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className=" mx-auto px-4 py-8">
      <div className="rounded-[40px] overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          loop={true}
          speed={2000}
        >
          <SwiperSlide>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
              <div className="absolute inset-0  z-10"></div>
              <img
                className="w-full h-full object-cover"
                src={banner1}
                alt="Anti-corruption banner"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
              <div className="absolute inset-0  z-10"></div>
              <img
                className="w-full h-full object-cover"
                src={banner2}
                alt="Anti-corruption banner"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
              <div className="absolute inset-0  z-10"></div>
              <img
                className="w-full h-full object-cover"
                src={banner3}
                alt="Anti-corruption banner"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
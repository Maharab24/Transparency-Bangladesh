import React, { useState, useEffect } from 'react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import avatar1 from '../../assets/images/avatar1.jpg';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';

const Trainers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize scroll position
    window.scrollTo(0, 0);
    // Check screen size on mount and on resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Floating decoration elements */}
      <div className="absolute top-10 left-0 w-full h-full pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 3 === 0 ? '#fb923c' : i % 3 === 1 ? '#60a5fa' : '#34d399'} 0%, transparent 70%)`,
              animation: `float ${Math.random() * 15 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-orange-600">Expert</span> Trainers
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from industry leaders with years of experience in anti-corruption training
          </p>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={isMobile ? 20 : 40}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
          loop={true}
          className="trainers-swiper"
        >
          {[avatar1, avatar2, avatar3, avatar1, avatar2, avatar3].map((avatar, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:border-orange-400">
                  <img
                    className="w-full h-full object-cover"
                    src={avatar}
                    alt={`Trainer ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center pb-6">
                    <span className="text-white font-medium">View Profile</span>
                  </div>
                </div>

                <div className="mt-8 text-center transform transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-gray-800">Trainer Name</h3>
                  <p className="text-orange-600 mt-1">Anti-Corruption Specialist</p>

                  <div className="flex justify-center space-x-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                      <svg className="w-4 h-4 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                      <svg className="w-4 h-4 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                      <svg className="w-4 h-4 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Trainers
          </button>
        </div>
      </div>

      <style jsx global>{`
        .trainers-swiper {
          padding: 30px 0 60px;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #f97316, #ea580c);
          width: 30px;
          border-radius: 8px;
        }

        .swiper-button-next, .swiper-button-prev {
          color: #f97316;
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: #f97316;
          color: white;
          transform: scale(1.1);
        }

        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(${Math.random() * 360}deg); }
          50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(${Math.random() * 360}deg); }
          75% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(${Math.random() * 360}deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        .swiper-slide {
          transition: transform 0.5s ease;
        }

        .swiper-slide-active {
          transform: scale(1.1);
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default Trainers;
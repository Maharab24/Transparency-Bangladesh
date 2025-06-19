import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock icons with modern design
const Icon1 = () => (
  <div className="relative">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
    <div className="absolute -inset-4 bg-orange-500 rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-all duration-500"></div>
  </div>
);

const Icon2 = () => (
  <div className="relative">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
    <div className="absolute -inset-4 bg-blue-500 rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-all duration-500"></div>
  </div>
);

const Icon3 = () => (
  <div className="relative">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <div className="absolute -inset-4 bg-green-500 rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-all duration-500"></div>
  </div>
);

const Icons = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Anti-Corruption Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Empowering individuals and organizations with tools to combat corruption effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Training Session */}
          <Link
            to="/training"
            className="group relative block overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative z-10 h-full flex flex-col p-8">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <Icon1 />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-all duration-500 ${hovered === 1 ? 'animate-pulse' : ''}`}></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4 transition-colors duration-300 group-hover:text-orange-600">
                Training Session
              </h3>

              <p className="text-gray-600 text-center mb-6 transition-all duration-500 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                Enhance your skills with expert-led courses designed to identify and prevent corrupt practices
              </p>

              <div className="mt-auto flex justify-center">
                <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                  Learn More
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

            {/* Background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ${hovered === 1 ? 'animate-pulse-slow' : ''}`}></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl opacity-0 blur-lg group-hover:opacity-10 transition-all duration-500"></div>
          </Link>

          {/* Law for Corruption */}
          <Link
            to="/law"
            className="group relative block overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative z-10 h-full flex flex-col p-8">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <Icon2 />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-500 ${hovered === 2 ? 'animate-pulse' : ''}`}></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4 transition-colors duration-300 group-hover:text-blue-600">
                Law for Corruption
              </h3>

              <p className="text-gray-600 text-center mb-6 transition-all duration-500 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                Understand legal frameworks, compliance requirements, and anti-corruption legislation
              </p>

              <div className="mt-auto flex justify-center">
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                  Learn More
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

            {/* Background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ${hovered === 2 ? 'animate-pulse-slow' : ''}`}></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-0 blur-lg group-hover:opacity-10 transition-all duration-500"></div>
          </Link>

          {/* Anti-Corruption Events */}
          <Link
            to="/events"
            className="group relative block overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative z-10 h-full flex flex-col p-8">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <Icon3 />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-10 transition-all duration-500 ${hovered === 3 ? 'animate-pulse' : ''}`}></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4 transition-colors duration-300 group-hover:text-green-600">
                Anti-Corruption Events
              </h3>

              <p className="text-gray-600 text-center mb-6 transition-all duration-500 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                Join our initiatives, workshops, and conferences to fight corruption
              </p>

              <div className="mt-auto flex justify-center">
                <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                  Learn More
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

            {/* Background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ${hovered === 3 ? 'animate-pulse-slow' : ''}`}></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl opacity-0 blur-lg group-hover:opacity-10 transition-all duration-500"></div>
          </Link>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 3 === 0 ? '#fb923c' : i % 3 === 1 ? '#60a5fa' : '#34d399'} 0%, transparent 70%)`,
              animation: `float ${Math.random() * 20 + 20}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg); }
          50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg); }
          75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes pulse-slow {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Icons;
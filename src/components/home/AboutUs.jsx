
import { useEffect } from 'react';
import { FaShieldAlt, FaBullseye, FaEye, FaUnlock, FaBalanceScale, FaUsers, FaHandshake, FaDonate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    // Initialize scroll position
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    { icon: <FaShieldAlt />, title: "Integrity", description: "We uphold the highest ethical standards in all our actions and demand the same from public officials." },
    { icon: <FaUnlock />, title: "Transparency", description: "We believe in open governance and access to information as fundamental rights for all citizens." },
    { icon: <FaBalanceScale />, title: "Accountability", description: "We hold public officials responsible for their actions and demand consequences for corruption." },
    { icon: <FaUsers />, title: "Citizen Empowerment", description: "We equip citizens with knowledge and tools to combat corruption in their communities." },
  ];

  const approaches = [
    { number: "1", title: "Awareness Campaigns", description: "Educating citizens about their rights and the damaging effects of corruption through workshops, media campaigns, and community outreach." },
    { number: "2", title: "Technology Solutions", description: "Developing secure platforms for anonymous reporting, public fund tracking, and open data access to enhance transparency." },
    { number: "3", title: "Policy Advocacy", description: "Working with governments to strengthen anti-corruption laws and ensure their effective implementation." },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-green-700 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="grid grid-cols-4 gap-8 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Our Anti-Corruption Mission
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-100">
            We're dedicated to creating a corruption-free society through transparency, accountability, and citizen empowerment.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">Our Purpose</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We exist to combat corruption through awareness, technology, and citizen engagement. Our mission is to build a society where integrity prevails in every aspect of public life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Mission Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <div className="bg-green-800 p-3 rounded-full mr-4 text-white">
                  <FaBullseye className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-orange-700">Our Mission</h3>
              </div>
              <p className="text-gray-700 mb-4">
                To eradicate corruption by empowering citizens, promoting transparency in governance, and creating robust accountability systems.
              </p>
              <p className="text-gray-700">
                Through innovative technology and community engagement, we provide platforms for reporting corruption, access to information, and tools for monitoring public resources.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <div className="bg-green-800 p-3 rounded-full mr-4 text-white">
                  <FaEye className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-orange-700">Our Vision</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We envision a world where public institutions operate with complete transparency, citizens actively participate in governance, and corruption is neither tolerated nor hidden.
              </p>
              <p className="text-gray-700">
                A future where integrity, honesty, and accountability are the foundation of every public transaction and government service delivery.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-800 p-4 rounded-full mb-4 text-white text-2xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">{value.title}</h3>
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Our Approach Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">Our Approach</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 group relative overflow-hidden border-t-4 border-orange-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
                <div className="flex justify-center mb-6">
                  <div className="bg-green-800 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:bg-orange-500 transition-colors">
                    {approach.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-orange-700 mb-4 text-center">{approach.title}</h3>
                <p className="text-gray-700">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="bg-gradient-to-r from-orange-600 to-green-700 text-white rounded-2xl p-8 mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="grid grid-cols-4 gap-8 h-full">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="border-r border-white"></div>
                ))}
              </div>
            </div>

            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 animate-count-up" data-target="15000">15K+</div>
                <p className="text-white font-semibold">Reports Received</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 animate-count-up" data-target="200">200+</div>
                <p className="text-white font-semibold">Cases Resolved</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 animate-count-up" data-target="500000">500K+</div>
                <p className="text-white font-semibold">Citizens Reached</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 animate-count-up" data-target="30">30+</div>
                <p className="text-white font-semibold">Policy Changes</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl shadow-xl p-12 mb-10 transform transition-transform hover:scale-[1.01]">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">
              Join the Fight Against Corruption
            </h2>
            <p className="text-gray-700 text-xl max-w-2xl mx-auto mb-8">
              Together, we can create a more transparent and accountable society. Your participation makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <FaHandshake className="mr-2" />
                Partner With Us
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <FaDonate className="mr-2" />
                Support Our Cause
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        @keyframes count-up {
          from { content: "0"; }
        }

        .animate-count-up {
          animation: count-up 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
// src/components/education/TrainingSession.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaCertificate, FaBuilding, FaUserGraduate, FaClock, FaUsers, FaStar, FaMedal } from 'react-icons/fa';
import { BsFillPatchCheckFill } from 'react-icons/bs';

// Import company logos
import Grameenphone from '../../assets/images/Grameenphone.png';
import bKash from '../../assets/images/bKash.png';
import BRAC from '../../assets/images/Brac.png';
import Square from '../../assets/images/Square.png';
import ACI from '../../assets/images/ACI.jpg';
import Unilever from '../../assets/images/Unilever.jpg';
import Robi from '../../assets/images/Robi.png';
import Walton from '../../assets/images/Walton.png';

const TrainingSession = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [activeTab, setActiveTab] = useState('all');

  // Sample data for courses
  const courses = [
    {
      id: 1,
      title: "Anti-Corruption Compliance",
      description: "Comprehensive training on implementing anti-corruption policies and compliance frameworks within organizations.",
      duration: "2 Days",
      level: "Intermediate",
      participants: "Corporate Executives, Compliance Officers",
      category: "corporate"
    },
    {
      id: 2,
      title: "Ethical Leadership Program",
      description: "Developing ethical leadership skills to foster transparency and integrity in organizational decision-making.",
      duration: "3 Days",
      level: "Advanced",
      participants: "Senior Management, Board Members",
      category: "leadership"
    },
    {
      id: 3,
      title: "Whistleblower Protection",
      description: "Understanding legal frameworks and best practices for establishing effective whistleblower protection systems.",
      duration: "1 Day",
      level: "Basic",
      participants: "HR Professionals, Legal Advisors",
      category: "legal"
    },
    {
      id: 4,
      title: "Public Sector Accountability",
      description: "Training for government officials on transparency mechanisms and accountability frameworks in public service.",
      duration: "2 Days",
      level: "Intermediate",
      participants: "Government Officials, Public Administrators",
      category: "public"
    },
    {
      id: 5,
      title: "Supply Chain Integrity",
      description: "Ensuring ethical practices throughout supply chains to prevent corruption and promote fair trade.",
      duration: "2 Days",
      level: "Intermediate",
      participants: "Procurement Managers, Supply Chain Specialists",
      category: "corporate"
    },
    {
      id: 6,
      title: "Digital Governance & Transparency",
      description: "Leveraging technology to enhance government transparency and citizen engagement.",
      duration: "2 Days",
      level: "Advanced",
      participants: "IT Directors, Public Administrators",
      category: "public"
    }
  ];

  // Filter courses based on active tab
  const filteredCourses = activeTab === 'all'
    ? courses
    : courses.filter(course => course.category === activeTab);

  // Certified companies with actual logo imports
  const certifiedCompanies = [
    { id: 1, name: "Grameenphone", logo: Grameenphone, year: 2023 },
    { id: 2, name: "bKash", logo: bKash, year: 2022 },
    { id: 3, name: "BRAC Bank", logo: BRAC, year: 2023 },
    { id: 4, name: "Square Pharmaceuticals", logo: Square, year: 2022 },
    { id: 5, name: "ACI Limited", logo: ACI, year: 2023 },
    { id: 6, name: "Unilever Bangladesh", logo: Unilever, year: 2022 },
    { id: 7, name: "Robi Axiata", logo: Robi, year: 2023 },
    { id: 8, name: "Walton Group", logo: Walton, year: 2023 }
  ];

  // Stats data
  const stats = [
    { value: "250+", label: "Organizations Trained", icon: <FaBuilding /> },
    { value: "5,200+", label: "Participants Certified", icon: <FaUserGraduate /> },
    { value: "98%", label: "Satisfaction Rate", icon: <FaStar /> },
    { value: "12", label: "Training Programs", icon: <FaChalkboardTeacher /> }
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9f5] to-[#fff1e6]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6824d]/90 to-[#c6542c]/90 z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white"></div>
        </div>

        <div className="max-w-6xl mx-auto py-28 px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Anti-Corruption <span className="text-amber-200">Training</span> Programs
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10 text-amber-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Empowering organizations with knowledge and tools to combat corruption and promote transparency
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <button className="bg-white text-[#f6824d] font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-100 transition duration-300 shadow-lg">
                Register for Training
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-br from-white to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-6 rounded-xl shadow-lg border border-amber-100"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl text-[#f6824d] mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Training <span className="text-[#f6824d]">Courses</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#f6824d] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Comprehensive anti-corruption training programs designed for various organizational needs and levels
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === 'all' ? 'bg-[#f6824d] text-white' : 'bg-amber-100 text-gray-700 hover:bg-amber-200'}`}
            onClick={() => setActiveTab('all')}
          >
            All Courses
          </button>
          <button
            className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === 'corporate' ? 'bg-[#f6824d] text-white' : 'bg-amber-100 text-gray-700 hover:bg-amber-200'}`}
            onClick={() => setActiveTab('corporate')}
          >
            Corporate
          </button>
          <button
            className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === 'public' ? 'bg-[#f6824d] text-white' : 'bg-amber-100 text-gray-700 hover:bg-amber-200'}`}
            onClick={() => setActiveTab('public')}
          >
            Public Sector
          </button>
          <button
            className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === 'leadership' ? 'bg-[#f6824d] text-white' : 'bg-amber-100 text-gray-700 hover:bg-amber-200'}`}
            onClick={() => setActiveTab('leadership')}
          >
            Leadership
          </button>
          <button
            className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === 'legal' ? 'bg-[#f6824d] text-white' : 'bg-amber-100 text-gray-700 hover:bg-amber-200'}`}
            onClick={() => setActiveTab('legal')}
          >
            Legal
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100"
              variants={itemVariants}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-r from-[#f6824d] to-[#c6542c] p-3 rounded-xl mr-4 text-white">
                    <FaChalkboardTeacher className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                    <div className="mt-1 flex items-center">
                      <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-1 rounded">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{course.description}</p>

                <div className="grid gap-3 text-sm mb-6">
                  <div className="flex items-center">
                    <div className="text-[#f6824d] mr-3">
                      <FaClock />
                    </div>
                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-[#f6824d] mr-3">
                      <FaUsers />
                    </div>
                    <span><strong>Participants:</strong> {course.participants}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-4 border-t border-amber-100">
                <button className="text-[#f6824d] font-medium hover:text-[#c54a1a] flex items-center group">
                  <span className="mr-2 group-hover:underline">View Course Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certified Companies Section */}
      <div className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Trusted by <span className="text-[#f6824d]">Leading Organizations</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-[#f6824d] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Organizations that have completed our anti-corruption training and received certification
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {certifiedCompanies.map((company) => (
              <motion.div
                key={company.id}
                className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center border border-amber-100"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="w-20 h-20 rounded-full bg-white border-2 border-amber-300 flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{company.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <FaCertificate className="text-amber-500 mr-1" />
                  <span>Certified {company.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Certificate Showcase */}
      <div className="py-16 bg-gradient-to-b from-amber-50 to-[#fff1e6]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-[#f6824d]">Certification</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-[#f6824d] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Recognized certification that demonstrates commitment to transparency and anti-corruption practices
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div
              className="w-full lg:w-2/5 bg-white rounded-2xl shadow-xl p-8 border border-amber-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-[#f6824d] to-[#c6542c] p-3 rounded-xl mr-4 text-white">
                  <FaCertificate className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Certificate of Anti-Corruption Compliance</h3>
              </div>

              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <div className="text-green-500 mt-1 mr-3">
                    <BsFillPatchCheckFill />
                  </div>
                  <p className="text-gray-700">Issued to organizations completing our training programs</p>
                </div>

                <div className="flex items-start">
                  <div className="text-green-500 mt-1 mr-3">
                    <BsFillPatchCheckFill />
                  </div>
                  <p className="text-gray-700">Valid for 2 years with annual refresher courses</p>
                </div>

                <div className="flex items-start">
                  <div className="text-green-500 mt-1 mr-3">
                    <BsFillPatchCheckFill />
                  </div>
                  <p className="text-gray-700">Demonstrates commitment to ethical business practices</p>
                </div>

                <div className="flex items-start">
                  <div className="text-green-500 mt-1 mr-3">
                    <BsFillPatchCheckFill />
                  </div>
                  <p className="text-gray-700">Internationally recognized standard for transparency</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-[#f6824d] to-[#c6542c] text-white py-3 px-6 rounded-lg font-medium hover:from-[#e05a2a] hover:to-[#b54a1a] transition-all duration-300 shadow-md">
                  Download Brochure
                </button>
                <button className="bg-white border-2 border-[#f6824d] text-[#f6824d] py-3 px-6 rounded-lg font-medium hover:bg-amber-50 transition-all duration-300">
                  View Requirements
                </button>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-3/5 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Certificate Design */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-2xl p-10 border-4 border-amber-300 relative overflow-hidden ">
                {/* Certificate Border */}
                <div className="absolute inset-4 border-2 border-amber-400 rounded-lg"></div>

                {/* Watermark */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <div className="text-[#f6824d] text-9xl font-bold rotate-45">TIB</div>
                </div>

                {/* Seal */}
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-gradient-to-r from-[#f6824d] to-[#c6542c] flex items-center justify-center text-white">
                  <FaCertificate className="text-3xl" />
                </div>

                {/* Certificate Content */}
                <div className="relative text-center py-12">
                  <div className="flex justify-center mb-8">
                    <div className="w-32 h-1 bg-[#f6824d]"></div>
                  </div>

                  <div className="text-5xl font-bold text-[#c6542c] mb-4 tracking-wide">CERTIFICATE</div>
                  <div className="text-xl text-gray-600 mb-10">OF COMPLETION</div>

                  <div className="text-2xl text-gray-700 mb-6">This certificate is presented to</div>

                  <div className="text-3xl font-bold text-gray-800 border-b-2 border-amber-400 pb-4 px-12 mb-8">
                    Organization Name
                  </div>

                  <div className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                    For successful completion of the <span className="text-[#f6824d] font-medium">Anti-Corruption Compliance Training</span> program
                  </div>

                  <div className="flex justify-between px-4">
                    <div className="text-center">
                      <div className="h-1 w-32 bg-amber-400 mx-auto mb-3"></div>
                      <div className="text-gray-600">Date</div>
                    </div>

                    <div className="text-center">
                      <div className="h-1 w-32 bg-amber-400 mx-auto mb-3"></div>
                      <div className="text-gray-600">Signature</div>
                    </div>
                  </div>
                </div>

                {/* Ribbons */}
                <div className="absolute -left-4 top-1/3 w-4 h-24 bg-gradient-to-b from-amber-400 to-amber-500"></div>
                <div className="absolute -right-4 top-1/3 w-4 h-24 bg-gradient-to-b from-amber-400 to-amber-500"></div>
              </div>

              {/* Floating seal */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-[#f6824d] to-[#c6542c] flex items-center justify-center text-white shadow-xl border-4 border-white">
                <FaMedal className="text-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gradient-to-br from-[#fff5f0] to-[#ffece0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Participants <span className="text-[#f6824d]">Say</span></h2>
            <div className="w-24 h-1 bg-[#f6824d] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#f6824d] to-[#c6542c]"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 -translate-y-8"></div>

                <div className="text-amber-400 text-4xl mb-4">“</div>
                <p className="text-gray-700 mb-6">
                  The anti-corruption training provided by Transparency Bangladesh transformed our compliance framework.
                  The practical insights helped us implement effective policies throughout our organization.
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                  <div>
                    <div className="font-bold text-gray-800">Rahman Khan</div>
                    <div className="text-gray-600">Compliance Officer, bKash</div>
                    <div className="flex text-amber-400 mt-1">
                      {[...Array(5)].map((_, i) => <FaStar key={i} className="mr-1" />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-[#f6824d] to-[#c6542c] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Organization Today
          </motion.h2>
          <motion.p
            className="text-xl max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Join leading organizations in Bangladesh committed to transparency and ethical business practices
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="bg-white text-[#f6824d] font-bold py-3 px-8 rounded-full hover:bg-amber-100 transition duration-300 shadow-lg">
              Enroll in Training
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition duration-300">
              Request Information
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSession;
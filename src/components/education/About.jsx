import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';


const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row gap-10 items-center"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-500 rounded-3xl opacity-20 blur-xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <motion.div
                  className="w-full h-90 bg-gradient-to-br from-orange-200 to-amber-300 flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* set the image here */}
                  <img src="src\assets\images\EduBanner.png" alt="" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-orange-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-amber-500" />
              <div className="relative z-10">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-orange-800 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Understanding Corruption
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Corruption is the misuse of power for personal gain, often involving bribery, fraud, or favoritism. It undermines trust, weakens institutions, and harms economic growth.
                </motion.p>

                <motion.p
                  className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  Corruption diverts resources away from essential services, increases inequality, and fosters injustice. Combating it requires transparency, accountability, strong laws, and active public oversight.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="px-5 py-3 bg-orange-100 text-orange-800 font-medium rounded-full">
                    Transparency
                  </div>
                  <div className="px-5 py-3 bg-orange-100 text-orange-800 font-medium rounded-full">
                    Accountability
                  </div>
                  <div className="px-5 py-3 bg-orange-100 text-orange-800 font-medium rounded-full">
                    Integrity
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-500 rounded-tl-full opacity-10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 transform transition-transform duration-500 hover:-translate-y-2">
            <div className="text-4xl font-bold text-orange-600 mb-2">$2.6T</div>
            <p className="text-gray-700">Annual cost of corruption globally</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 transform transition-transform duration-500 hover:-translate-y-2">
            <div className="text-4xl font-bold text-orange-600 mb-2">76%</div>
            <p className="text-gray-700">Countries face serious corruption</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 transform transition-transform duration-500 hover:-translate-y-2">
            <div className="text-4xl font-bold text-orange-600 mb-2">1/3</div>
            <p className="text-gray-700">People paid bribes for public services</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
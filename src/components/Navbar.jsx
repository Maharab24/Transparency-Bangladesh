import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiUser, FiX, FiMenu } from "react-icons/fi";
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleAboutClick = () => {
    setIsMenuOpen(false);
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      // Calculate position considering navbar height
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const offsetPosition = aboutSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-[#f6824d] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                className="w-10 h-10 md:w-14 md:h-14 transition-all duration-300"
                src={logo}
                alt="Transparency Bangladesh Logo"
              />
              <span className={`ml-2 text-xl md:text-2xl font-bold transition-all duration-300 ${
                scrolled ? 'text-[#f6824d]' : 'text-white'
              }`}>
                Transparency Bangladesh
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `relative px-1 py-2 font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-[#33a954] font-bold'
                      : scrolled ? 'text-gray-700 hover:text-[#f6824d]' : 'text-white hover:text-[#33a954]'
                  }`
                }
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#33a954] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>

              <button
                onClick={handleAboutClick}
                className={`relative px-1 py-2 font-medium transition-all duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-[#f6824d]' : 'text-white hover:text-[#33a954]'
                }`}
              >
                About
              </button>

              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `relative px-1 py-2 font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-[#33a954] font-bold'
                      : scrolled ? 'text-gray-700 hover:text-[#f6824d]' : 'text-white hover:text-[#33a954]'
                  }`
                }
              >
                Contact
              </NavLink>

              <NavLink
                to='/login'
                className="flex items-center px-4 py-2 bg-[#33a954] text-white rounded-full hover:bg-[#2a8d45] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FiUser className="mr-2" />
                Log In
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full ${
                  scrolled ? 'bg-[#f6824d] text-white' : 'bg-white text-[#f6824d]'
                }`}
              >
                {isMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-40 bg-white transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } transition-transform duration-500 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center">
                <img
                  className="w-10 h-10"
                  src={logo}
                  alt="Transparency Bangladesh Logo"
                />
                <span className="ml-2 text-xl font-bold text-[#f6824d]">
                  Transparency Bangladesh
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-[#f6824d] text-white"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow space-y-10">
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `text-2xl font-medium px-4 py-2 transition-all ${
                    isActive ? 'text-[#33a954] font-bold' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(handleAboutClick, 300);
                }}
                className="text-2xl font-medium px-4 py-2 text-gray-700"
              >
                About
              </button>

              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `text-2xl font-medium px-4 py-2 transition-all ${
                    isActive ? 'text-[#33a954] font-bold' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>

              <NavLink
                to='/login'
                className="mt-8 flex items-center px-6 py-3 bg-[#33a954] text-white text-xl rounded-full hover:bg-[#2a8d45] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiUser className="mr-2" />
                Log In
              </NavLink>
            </div>

            <div className="p-6 text-center text-gray-500">
              <p>© {new Date().getFullYear()} Transparency Bangladesh</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className={`w-full transition-all duration-500 ${
        scrolled ? 'h-16 md:h-20' : 'h-24 md:h-28'
      }`}></div>
    </>
  );
};

export default Navbar;
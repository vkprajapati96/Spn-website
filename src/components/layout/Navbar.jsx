import React, { useEffect, useRef, useState } from "react";
import { X, ChevronDown, Menu, PhoneCall, HousePlus } from "lucide-react";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo.jpg"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const dropdownRef = useRef(null);

  // dropdown ke bahar click detect karne ke liye - sirf desktop ke liye

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if screen is desktop (xl breakpoint = 1280px)
      if (window.innerWidth >= 1280){
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowServices(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // cleanup   
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  return (
    <nav className="bg-white backdrop-blur-sm z-50 sticky top-0 w-full">
      <div className="w-full max-w-[1340px] mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="w-[140px]" src={logo} alt="ecommerceService4u" />
            
             </Link>
        </div>

        {/* Desktop Menu - xl pe show hoga */}
        <ul className="hidden lg:flex items-center gap-12 font-semibold text-black relative">
          <Link to="/" onClick={() => setShowServices(false)}>
            <li className="text-lg px-2 py-1 hover:bg-gray-100 rounded-xl font-semibold flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
              <HousePlus className="w-5 h-5" />Home
            </li>
          </Link>

          <a href="#about" onClick={() => setShowServices(false)}>
            <li className="text-lg px-2 py-1 hover:bg-gray-100 rounded-xl cursor-pointer hover:text-blue-600 transition">
              About
            </li>
          </a>

          {/* Services Dropdown */}
          <a href="#service"><li
            className="text-lg  px-2 py-1 hover:bg-gray-100 rounded-xl flex items-center gap-1 cursor-pointer hover:text-blue-600 transition relative"
            onClick={() => setShowServices(!showServices)} ref={dropdownRef}
          >
            Services
            {/* <ChevronDown className="w-4 h-4 mt-1" /> */}
            {/* Dropdown Popup */}
            {/* {showServices && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg w-[300px] py-4 px-4 z-50">
                <ul className="flex flex-col gap-3 text-gray-700 font-medium">
                  <Link to="/services/ecommerce">
                    <li className="hover:text-blue-600 cursor-pointer transition">
                      E-commerce
                    </li>
                  </Link>

                </ul>
              </div>
            )} */}
          </li></a>

          <a href="#contact" onClick={() => setShowServices(false)}>
            <li className="text-lg px-2 py-1 hover:bg-gray-100 rounded-xl  cursor-pointer hover:text-blue-600 transition">
              Contact
            </li>
          </a>
        </ul>

        {/* Phone Number - xl pe show hoga */}
<div className="hidden cursor-pointer lg:block text-black font-bold text-lg">
  <a href="tel:+918860567964">
    <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 
    rounded-lg flex items-center gap-2 text-lg font-semibold mx-auto transition">
      <PhoneCall className="w-5 h-5 font-semibold text-xl" />
      <span className="text-lg font-semibold">8860567964</span>
    </div>
  </a>
</div>

        {/* Mobile Menu Button - xl se pehle show hoga */}
        <button className="lg:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu - xl se pehle show hoga */}
      
      <div
        className={`xl:hidden bg-white border-t transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-4 font-medium text-black">
          <Link to="/" onClick={() => setOpen(false)}>
            <li className="flex text-lg text-black items-center gap-2 hover:text-blue-600">
              <HousePlus className="w-5 h-5" /> Home
            </li>
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            <li className="text-lg  hover:text-blue-600">About Us</li>
          </Link>

          {/* Services inside mobile */}
          <a href="#service"><li
            onClick={() => setShowServices(!showServices)} 
            className="flex text-lg items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            Services
            {/* <ChevronDown className="w-5 h-5 mt-1" /> */}
          </li></a>

          {/* {showServices && (
            <ul className="ml-4 flex flex-col gap-2 text-gray-700">
              <Link
                to="/services/ecommerce"
                onClick={() => {
                  setShowServices(false);
                  setOpen(false);
                }}
              >
                <li className="hover:text-blue-600">E-commerce</li>
              </Link>

            </ul>
          )} */}

   <a href="#contact" onClick={() => setOpen(false)}>
            <li className="text-lg hover:text-blue-600">Contact Us</li>
          </a>


     <li className="w-40 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 
rounded-lg flex items-center gap-2 text-lg">
  <a href="tel:+918860567964" className="flex items-center gap-2">
    <PhoneCall />
    <span>8860567964</span>
  </a>
</li>


        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import { useState } from 'react';
import { FaGlobe } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import './App.css'

function Navbar() {
  const [isDivActive, setIsDivActive] = useState(true);

  const handleClick = () => {
    setIsDivActive(!isDivActive);
  };
  return (
    <>

      <nav className="Navbar bg-black border-gray-200 " id="Navbar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://www.dimansn.in/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://i.ibb.co/1mrY8p4/Dimansn-Architects-final4-Photoroom-1-1.png" className="h-20" alt="Flowbite Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="navbar-default" aria-expanded="false" onClick={handleClick}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={` Navbar w-full md:block md:w-auto ${isDivActive ? "hidden" : ""} `} id="navbar-default">
            <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black ">
              <li>
                <a href="#Navbar" className="hover:text-2xl hover:text-[#DAAF50] block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 " aria-current="page">Home</a>
              </li>
              <li>
                <a href="#AboutUs" className="hover:text-2xl hover:text-[#DAAF50] block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 ">About</a>
              </li>
              <li>
                <a href="#Services" className="hover:text-2xl hover:text-[#DAAF50] block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 ">Services</a>
              </li>
              <li>
                <a href="#testimonial" className="hover:text-2xl hover:text-[#DAAF50] block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 ">Testimonial</a>
              </li>
              <li>
                {/* <a href="https://forms.gle/EsRy3n6h4WNoHP9U6" className="hover:text-2xl hover:text-[#DAAF50] block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 ">Contact Us</a> */}
                <a href="#ContactPage" className="hover:text-2xl hover:text-[#DAAF50] block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 ">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>




    </>


  )
}

export default Navbar
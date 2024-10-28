import { FaGlobe } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import './App.css'

function Navbar() {

  return (
    <>

      <div className=" Navbar md:hidden text-black bg-[#d4d4d4b2] px-3 py-2" id="Navbar">
        <div className="flex">
          <div className="navContact  flex items-center justify-center">
          <img src="https://i.ibb.co/0GHDWM9/Dimansn-Architects-final4-Photoroom-1.png" alt="Dimansn-Architects-final4-Photoroom-1" border="0"></img>
          </div>
          <div className="navContact flex items-center justify-center text-xl ">
            <div className="bg-orange-500 hover:bg-orange-600 px-2 py-2 rounded-xl cursor-pointer">
              <a href="#footer">CONTACT US</a>
            </div>
          </div>
        </div>
        <div className="navContact flex items-center justify-around text-sm flex-wrap">
          <div className="hover:bg-slate-200 px-1 rounded-md cursor-pointer "><a href="#Navbar">Home</a></div>
          <div className="hover:bg-slate-200 px-1 rounded-md cursor-pointer"><a href="#AboutUs">About Us</a></div>
          <div className="hover:bg-slate-200 px-1 rounded-md cursor-pointer"><a href="#Services">Services</a></div>
          <div className="hover:bg-slate-200 px-1 rounded-md cursor-pointer"><a href="#testimonial">TESTIMONIALS</a></div>
        </div>
      </div>

      <div className="Navbar  hidden md:flex text-black px-3 py-2 bg-[#d4d4d4b2]" id="Navbar">
        <div className="navContact  md:w-1/5 flex items-center justify-around text-3xl righteous-regular">
        <img src="https://i.ibb.co/0GHDWM9/Dimansn-Architects-final4-Photoroom-1.png" alt="Dimansn-Architects-final4-Photoroom-1" border="0" ></img>
        </div>
        <div className="navContact md:w-3/5 flex items-center justify-center md:text-lg text-sm">
          <div className="hover:bg-slate-200 mx-10 px-1 rounded-md cursor-pointer"><a href="#Navbar">Home</a></div>
          <div className="hover:bg-slate-200 mx-10 px-1 rounded-md cursor-pointer"><a href="#AboutUs">About Us</a></div>
          <div className="hover:bg-slate-200 mx-10 px-1 rounded-md cursor-pointer"><a href="#Services">Services</a></div>
          <div className="hover:bg-slate-200 mx-10 px-1 rounded-md cursor-pointer"><a href="#testimonial">TESTIMONIALS</a></div>
        </div>
        <div className="navContact md:w-1/5 flex items-center justify-end text-xl">
          <div className="bg-orange-400 hover:bg-orange-600 px-2 py-2 rounded-xl cursor-pointer"><a href="#footer">CONTACT US</a></div>
        </div>
      </div>

    </>


  )
}

export default Navbar
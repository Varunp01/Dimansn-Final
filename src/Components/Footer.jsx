// import './App.css'

function Footer() {

  return (
    <>
    <div className="flex flex-wrap bg-black px-3 w-full justify-evenly pb-5">
      <div className="text-white px-3 sm:w-1/3 w-full">
      <img src="https://i.ibb.co/0GHDWM9/Dimansn-Architects-final4-Photoroom-1.png" alt="Dimansn-Architects-final4-Photoroom-1" border="0" className="mx-auto"></img>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
      </div>
      <div className=" px-3 py-5 w-1/2 sm:w-1/3 text-center">
        <p className=" inter text-[18px] text-white font-bold"><a href="#Navbar">Home</a></p>
        <p className=" inter text-[14px] text-gray-300"><a href="#AboutUs">About Us</a></p>
        <p className=" inter text-[14px] text-gray-300"><a href="#Services">Services</a></p>
        <p className=" inter text-[14px] text-gray-300"><a href="#HowWeWork">Our Work</a></p>
        <p className=" inter text-[14px] text-gray-300"><a href="#Navbar">Contact Us</a></p>
      </div>
      <div className="px-3 py-5 w-1/2 sm:w-1/3 text-center">
        <p className=" inter text-[18px] text-white font-bold">Contact</p>
        <p className=" inter text-[14px] text-gray-300">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
        <p className=" inter text-[14px] text-gray-300">support@example.com</p>
        <p className=" inter text-[14px] text-gray-300">Our Work</p>
        <p className=" inter text-[14px] text-gray-300">+ (406) 555-0120</p>
      </div>
    </div>
    </>
  )
}

export default Footer

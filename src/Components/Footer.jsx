// import './App.css'

function Footer() {

  return (
    <>
    <div className="flex flex-wrap bg-black px-3 w-full justify-evenly items-center pb-5">
      <div className="text-white px-3 sm:w-1/3 w-full">
      <img src="https://i.ibb.co/0GHDWM9/Dimansn-Architects-final4-Photoroom-1.png" alt="Dimansn-Architects-final4-Photoroom-1" border="0" className="mx-auto"></img>
      <p>Dimansn Architects is more than just a design firm; we create inspiring spaces. Led by Er. Bhargav Chauhan, we offer comprehensive architectural services, from concept to completion. Let's turn your dream projects into reality.</p>
      </div>
      <div className=" px-3 py-5 w-1/2 sm:w-1/3 text-center">
        <p className=" inter text-[18px] text-white font-bold"><a href="#Navbar">Home</a></p>
        <br />
        <p className=" inter text-[14px] text-gray-300"><a href="#AboutUs">About Us</a></p>
        <br />
        <p className=" inter text-[14px] text-gray-300"><a href="#Services">Services</a></p>
        <br />
        <p className=" inter text-[14px] text-gray-300"><a href="#HowWeWork">Our Work</a></p>
        <br />
        <p className=" inter text-[14px] text-gray-300"><a href="#Navbar">Contact Us</a></p>
      </div>
      <div className="px-3 py-5 w-1/2 sm:w-1/3 text-center">
        <p className=" inter text-[18px] text-white font-bold">Contact</p>
        <br />
        <p className=" inter text-[18px] text-white font-bold">Er. BHARGAV CHAUHAN</p>
        <p className=" inter text-[14px] text-gray-300">Architect &amp; Project Consultant</p>
        <br />
        <p className=" inter text-[14px] text-gray-300">dimansnarchitects@gmail.com</p>
        <br />
        <p className=" inter text-[14px] text-gray-300">Our Work</p>
        <p className=" inter text-[14px] text-gray-300">+91 99683 88888</p>
      </div>
    </div>
    </>
  )
}

export default Footer

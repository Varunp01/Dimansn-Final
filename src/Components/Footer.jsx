// import './App.css'

function Footer() {

  return (
    <>
    <div className="flex flex-wrap bg-black px-5 w-full justify-evenly items-center pb-5 py-5" id="footer">
      <div className="text-white px-3 sm:w-1/3 w-full">
      <img src="https://i.ibb.co/1mrY8p4/Dimansn-Architects-final4-Photoroom-1-1.png" alt="Dimansn-Architects-final4-Photoroom-1" border="0" className="mx-auto mb-6"></img>
      <p className="md:px-10 sm:px-5">Dimansn Architects is more than just a design firm; we create inspiring spaces. Led by Er. Bhargav Chauhan, we offer comprehensive architectural services, from concept to completion. Let's turn your dream projects into reality.</p>
      </div>
      <div className="px-1 py-5 w-1/4 sm:w-1/3 sm:text-center text-right">
        <p className=" inter text-[18px] text-white font-bold"><a href="#Navbar">Home</a></p>
        <br />
        <p className=" inter text-[14px] text-gray-300"><a href="#AboutUs">About Us</a></p>
        <br />
        <p className=" inter text-[14px] text-gray-300"><a href="#Services">Services</a></p>
        <br />
        <p className=" inter text-[14px] text-gray-300"><a href="#HowWeWork">Our Work</a></p>
        <br />
        <p className=" inter text-[14px] text-gray-300"><a href="https://forms.gle/EsRy3n6h4WNoHP9U6">Contact Us</a></p>
      </div>
      <div className="px-3 py-5 w-3/4 sm:w-1/3 text-center">
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

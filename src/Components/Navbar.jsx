// import './App.css'

function Navbar() {

  return (
    <>
      <div className="Navbar text-white flex justify-evenly items-center w-full " id="Navbar">
        <div className="logo">
          <img src="https://i.ibb.co/0GHDWM9/Dimansn-Architects-final4-Photoroom-1.png" alt="Dimansn-Architects-final4-Photoroom-1" border="0"></img>
        </div>
        <div className="NavBtns flex flex-wrap justify-evenly items-center font">
          <div className="Home text-base inter sm:mr-10 md:mr-20"><a href="#Navbar">Home</a></div>
          <div className="About text-base inter sm:mr-10 md:mr-20"><a href="#AboutUs">About Us</a></div>
          <div className="Blog text-base inter sm:mr-10 md:mr-20"><a href="#Services">Services</a></div>
          <div className="Services text-base inter"><a href="#testimonial">Testimonials</a></div>
        </div>
        <div className="NavContactUs">
          <div className="ContactUs sm:text-base text-sm text-black inter bg-[#DAAF50] py-4 px-8  text-center rounded-[50px] ml-5">Contact Us</div>
        </div>
      </div>
    </>
  )
}

export default Navbar

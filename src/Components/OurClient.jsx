import Avatar from 'react-avatar';
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import Testimonial from './Testimonial.jsx';
// import './App.css'

function OurClient() {

  return (
    <>
      <div className="flex justify-between flex-wrap my-20" id='testimonial'>
        <div className="pl-20 md:w-1/2 pr-10 w-2/3">
        <Testimonial></Testimonial>
        </div>
        <img src="https://i.ibb.co/bL2mY0p/Mask-group-2.png" alt="Mask-group-2" border="0" className="w-full md:w-1/2 flex justify-center"></img>
      </div>
    </>
  )
}

export default OurClient

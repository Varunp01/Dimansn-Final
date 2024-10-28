import Avatar from 'react-avatar';
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
// import './App.css'

function OurClient() {

  return (
    <>
      <div className="flex justify-between flex-wrap my-20" id='testimonial'>
        <div className="pl-20 md:w-1/2 pr-10">
          <div className="AboutHeading1 text-[#DAAF50] inter text-xl font-medium">Our Client</div>
          <br />
          <div className="AboutHeading1 text-black inter text-5xl font-semibold">Here’s what our satisfied clients are saying</div>
          <br />
          <BiSolidQuoteSingleLeft />
          <br />
          <div className="inter font-normal text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae convallis dui, sit amet porttitor neque. Fusce auctor erat ac purus tristique lacinia.</div>
          <br />
          <BiSolidQuoteSingleRight />
          <br />
          <div className="flex">
          <Avatar facebookId="100008343750912" size="50" round={true} />
          <div className="px-5">
            <p className='text-lg font-semibold'>Joshua Keith</p>
            <p className='text-sm'>Senior Client</p>
          </div>
          </div>
        </div>
        <img src="https://i.ibb.co/bL2mY0p/Mask-group-2.png" alt="Mask-group-2" border="0" className="w-full md:w-1/2 flex justify-center"></img>
      </div>
    </>
  )
}

export default OurClient

import { FaArrowRightLong } from "react-icons/fa6";
// import './App.css'

function WhyChoose() {

  return (
    <>
      <div className="WhyChoose flex justify-end">
        <img src="https://i.ibb.co/Cw60zfD/image.png" alt="image" border="0" className="sm:mx-20 absolute left-0 z-0"></img>
        <div className=" relative z-10 md:w-1/2">
          <div className="px-4 py-20 my-auto ">
            <div className="AboutHeading1 text-[#DAAF50] inter text-xl font-medium">Why Choose Us</div>
            <br />
            <div className="AboutHeading1 text-black inter text-5xl font-semibold">We Are Your Trusted Partner for Seamless Construction</div>
            <br />
            <hr className="w-2/3" />
            <br />
            <div className="WhyChoose flex">
              <FaArrowRightLong className="w-[25px]"></FaArrowRightLong>
              <div className="px-4">
                <div className="inter font-semibold text-black text-[18px]">Govt. Approved Plans</div>
                <div className="inter font-medium text-gray-500 text-[16px]">Ensure your construction project is legally compliant and hassle-free. Our government-approved plans guarantee smooth execution and eligibility for potential government benefits.</div>
              </div>
            </div>
            <br />
            <hr className="w-2/3" />
            <br />
            <div className="WhyChoose flex">
              <FaArrowRightLong className="w-[25px]"></FaArrowRightLong>
              <div className="px-4">
                <div className="inter font-semibold text-black text-[18px]">End-to-End Support</div>
                <div className="inter font-medium text-gray-500 text-[16px]">Experience seamless construction with our comprehensive end-to-end support. Our dedicated team guides you through every step, from initial planning to project completion, ensuring timely project management and efficient execution.</div>
              </div>
            </div>
            <br />
            <hr className="w-2/3" />
            <br />
            <div className="WhyChoose flex">
              <FaArrowRightLong className="w-[25px]"></FaArrowRightLong>
              <div className="px-4">
                <div className="inter font-semibold text-black text-[18px]">Quality & Efficiency</div>
                <div className="inter font-medium text-gray-500 text-[16px]">We prioritize delivering high-quality construction projects on time. Our skilled workforce and strict quality control measures, combined with the use of premium materials and advanced techniques, ensure exceptional results.</div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChoose

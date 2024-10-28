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
            <div className="AboutHeading1 text-black inter text-5xl font-semibold">Extremely high standard of customer satisfaction</div>
            <br />
            <hr className="w-2/3" />
            <br />
            <div className="WhyChoose flex">
              <FaArrowRightLong className="w-[25px]"></FaArrowRightLong>
              <div className="px-4">
                <div className="inter font-semibold text-black text-[18px]">Govt. Approved Plans</div>
                <div className="inter font-medium text-gray-500 text-[16px]">We implement the best quality measures to ensure that all the designs we incorporate comply with the law.</div>
              </div>
            </div>
            <br />
            <hr className="w-2/3" />
            <br />
            <div className="WhyChoose flex">
              <FaArrowRightLong className="w-[25px]"></FaArrowRightLong>
              <div className="px-4">
                <div className="inter font-semibold text-black text-[18px]">End-to-End Support</div>
                <div className="inter font-medium text-gray-500 text-[16px]">We implement the best quality measures to ensure that all the designs we incorporate comply with the law.</div>
              </div>
            </div>
            <br />
            <hr className="w-2/3" />
            <br />
            <div className="WhyChoose flex">
              <FaArrowRightLong className="w-[25px]"></FaArrowRightLong>
              <div className="px-4">
                <div className="inter font-semibold text-black text-[18px]">Quality & Efficiency</div>
                <div className="inter font-medium text-gray-500 text-[16px]">We implement the best quality measures to ensure that all the designs we incorporate comply with the law.</div>
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

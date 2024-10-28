import { FaRegPlayCircle } from "react-icons/fa";
import '../App.css';

function Intro() {

  return (
    <>
      <div className="IntroImg h-[971px] w-full  flex items-center ">
        <div className="Contents sm:ml-32 ml-6 mt-20 sm:mt-0">
          <div className="heading1 text-[#DAAF50] inter text-xl font-medium">
            Welcome to Dimansn Architects
          </div>
          <br />
          <div className="heading2 text-white inter font-semibold text-[100px]">
            Where Dreams
          </div>
          <br />
          <div className="heading2 text-white inter font-semibold text-[100px]">
            Come Alive
          </div>
          {/* <div className="headingBtns flex items-center"> */}
          {/* <div className="headingBtn1 text-base text-black inter bg-[#DAAF50] py-4 px-8 rounded-[50px] w-[151px]">Learn More</div> */}
          {/* <div className="headingBtn2 text-base text-white inter flex items-center"><FaRegPlayCircle className="text-3xl mx-3 ml-16"/>Watch video</div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default Intro

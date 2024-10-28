import '../App.css';

function HowWeWork() {

  return (
    <>
      <div className="HowWeWork mt-20 flex justify-center items-center" id='HowWeWork'>

        <div className="">
          <div className=" flex justify-center items-center my-8 mx-4 inter font-semibold text-[42px]">How We Work</div>
          <div className=" flex justify-center items-center my-8 mx-4 inter font-normal text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
          <div className="HowWeWorkCards flex flex-wrap w-full">
            <div className="card1 my-4 md:w-1/3 flex px-3">
              <div className="number inter font-bold text-[#646E782B] text-[64px]">01</div>
              <div className="content px-3">
                <div className="contentheading inter font-bold text-black text-[40px]">Concept</div>
                <div className="contentpara inter font-normal text-black text-[16px]">Vehicula imperdiet ante tortor a mus iaculis sollicitudin. Sapien cras mus fames urna hac posuere.</div>
              </div>
            </div>
            <div className="card1 my-4 md:w-1/3 flex px-3">
              <div className="number inter font-bold text-[#646E782B] text-[64px]">02</div>
              <div className="content px-3">
                <div className="contentheading inter font-bold text-black text-[40px]">Design</div>
                <div className="contentpara inter font-normal text-black text-[16px]">Vehicula imperdiet ante tortor a mus iaculis sollicitudin. Sapien cras mus fames urna hac posuere.</div>
              </div>
            </div>
            <div className="card1 my-4 md:w-1/3 flex ">
              <div className="number inter font-bold text-[#646E782B] text-[64px]">03</div>
              <div className="content px-3">
                <div className="contentheading inter font-bold text-black text-[40px]">Development</div>
                <div className="contentpara inter font-normal text-black text-[16px]">Vehicula imperdiet ante tortor a mus iaculis sollicitudin. Sapien cras mus fames urna hac posuere.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default HowWeWork

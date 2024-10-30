import '../App.css';

function HowWeWork() {

  return (
    <>
      <div className="HowWeWork mt-20 flex justify-center items-center" id='HowWeWork'>

        <div className="">
          <div className=" flex justify-center items-center my-8 mx-4 inter font-semibold text-[42px]">How We Work</div>
          <div className=" flex justify-center items-center my-8 mx-4 inter font-normal text-[16px] text-center px-5">Our process is a collaborative journey, from the initial concept to the final realization.</div>
          <div className="HowWeWorkCards flex flex-wrap w-full overflow-scroll ">
            <div className="card1 shadow-2xl py-4 my-4 md:w-1/3 flex sm:px-3 px-5">
              <div className="number inter font-bold text-[#646E782B] text-[64px]">01</div>
              <div className="content px-3">
                <div className="contentheading inter font-bold text-black text-[40px]">Concept</div>
                <div className="contentpara inter font-normal text-black text-[16px]">Our collaborative approach ensures a seamless journey from concept to completion. We begin by listening attentively to your vision, understanding your needs, and exploring the possibilities. Together, we develop a clear and inspiring concept that aligns with your goals.</div>
              </div>
            </div>
            <div className="card1 shadow-2xl py-4 my-4 md:w-1/3 flex sm:px-3 px-5">
              <div className="number inter font-bold text-[#646E782B] text-[64px]">02</div>
              <div className="content px-3">
                <div className="contentheading inter font-bold text-black text-[40px]">Design</div>
                <div className="contentpara inter font-normal text-black text-[16px]">Our talented team of designers translates the concept into stunning visual representations, meticulously considering every detail to create spaces that are both functional and aesthetically pleasing.</div>
              </div>
            </div>
            <div className="card1 shadow-2xl py-4 my-4 md:w-1/3 flex sm:px-3 px-5">
              <div className="number inter font-bold text-[#646E782B] text-[64px]">03</div>
              <div className="content px-3">
                <div className="contentheading inter font-bold text-black text-[40px]">Development</div>
                <div className="contentpara inter font-normal text-black text-[16px]">With a focus on quality and efficiency, we oversee the entire development process, from construction to interior design. We work closely with skilled craftsmen and contractors to ensure that every aspect of your project is executed to perfection.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default HowWeWork

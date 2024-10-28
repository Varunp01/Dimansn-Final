// import './App.css'

function Services() {

  return (
    <>
      <div className="Services flex justify-between" id="Services">
        <div className="ServicesDarkBackground bg-[#232323] h-[825px] w-2/3 z-10 relative top-20 flex">
          <div className="content mt-18 sm:mt-20 ml-20">
            <div className="heading1 text-[#DAAF50] inter text-[20px] font-medium">
              Services We Do
            </div>
            <br />
            <div className="heading2 text-white inter font-semibold text-[42px]">
              Our Featured Services
            </div>
            <div className="heading2 text-white inter font-semibold text-[42px]">
              Architect Design
            </div>
            <br />

          </div>
        </div>
        <div className="ServicesImg">
          <img src="https://i.ibb.co/9sT3VYv/Rectangle-8.png" alt="Rectangle-8" border="0" className=" h-[926px] w-[1055px] z-0 absolute right-0"></img>
        </div>
      </div>
      <div className="cards ServicesCard flex mt-10 flex-wrap relative z-20 w-full justify-around -top-[350px]">
        <div className="card bg-white h-[373px] w-[300px] mr-5 mb-9 p-9">
          <div className="div">
            <img src="https://i.ibb.co/PCs4xPK/workspace-1.png" alt="workspace-1" border="0"></img>
            <br />
            <div className="heading inter font-medium text-[21px]">Structural Engineering</div>
            <br />
            <div className="heading inter font-normal text-[15px] text-slate-600">The success of all undertakings heavily relies on the presence of solid ground; this includes the structure of any building.</div>
            <br />
            {/* <div className="headingBtn py-[14px] px-[18px] bg-[#DAAF50] w-[119px] rounded-[50px]">Read More</div> */}
          </div>
        </div>
        <div className="card bgInterior bg-white h-[373px] w-[300px] mr-5 mb-9 p-7">
          <div className="div">
            <img src="https://i.ibb.co/9NcvSQT/staircase-1.png" alt="staircase-1" border="0"></img>
            <br />
            <div className="heading inter font-medium text-[21px] text-white">Interior Designing</div>
            <br />
            <div className="heading inter font-normal text-[15px] text-white">Whether you desire the treatment of modern minimalism or classic sophistication, we design materials, colors, and design layouts to best suit your needs.</div>
            <br />
            {/* <div className="headingBtn py-[14px] px-[18px] bg-[#DAAF50] w-[119px] rounded-[50px]">Read More</div> */}
          </div>
        </div>
        <div className="card bg-white h-[373px] w-[300px] mr-5 mb-9 p-7">
          <div className="div">
            <img src="https://i.ibb.co/N31Rbg4/living-room-1.png" alt="living-room-1" border="0"></img>
            <br />
            <div className="heading inter font-medium text-[21px]">Project Consultancy</div>
            <br />
            <div className="heading inter font-normal text-[15px] text-slate-600">It is for this reason that we also offer a project consultancy service to assist in the smooth and logical progression of the project from conceptualization to completion.</div>
            {/* <div className="headingBtn py-[14px] px-[18px] bg-[#DAAF50] w-[119px] rounded-[50px]">Read More</div> */}
          </div>
        </div>
        <div className="card bg-white h-[373px] w-[300px]  mb-9 p-9">
          <div className="div">
            <img src="https://i.ibb.co/2SYPPWv/civil-engineering-1.png" alt="civil-engineering-1" border="0"></img>
            <br />
            <div className="heading inter font-medium text-[21px]">3D Elevation Design</div>
            <br />
            <div className="heading inter font-normal text-[15px] text-slate-600">This is made possible by exquisite 3D renderings, which provide every small detail from every possible direction of your project.</div>
            <br />
            {/* <div className="headingBtn py-[14px] px-[18px] bg-[#DAAF50] w-[119px] rounded-[50px]">Read More</div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services

// import './App.css'

function About() {

  return (
    <>
      <div className="AboutUs mt-[900px] md:flex w-full" id="AboutUs">
        <div className="AboutImg h-[600px]  md:w-1/2 flex sm:m-6 m-3 justify-center items-center">
          {/* <img src="https://i.ibb.co/JvphQSc/Mask-group.png" alt="Mask-group" border="0" className="sm:h-[498px] sm:w-[520px] h-[350px] w-[365px] absolute top-[1015px]"></img>
          <img src="https://i.ibb.co/Byk8s16/Mask-group-1.png" alt="Mask-group-1" border="0" className="sm:h-[498px] sm:w-[563px] h-[398px] w-[395px] absolute top-[1087px] left-20"></img> */}
          <img src="https://i.ibb.co/JvphQSc/Mask-group.png" alt="Mask-group" border="0" className=" md:w-1/3  w-2/3 absolute top-[1015px] left-10"></img>
          <img src="https://i.ibb.co/Byk8s16/Mask-group-1.png" alt="Mask-group-1" border="0" className=" md:w-1/3  w-2/3 absolute top-[1087px]  "></img>
        </div>
        <div className="AboutContent h-[600px]  md:w-1/2 flex justify-center items-center mx-6 sm:mt-28">
          <div className="AboutContaier">
            <div className="AboutHeading1 text-[#DAAF50] inter text-xl font-medium">About Us</div>
            <br />
            <div className="AboutHeading1 text-black inter text-5xl font-semibold">A whole different kind of architectural firm.</div>
            <br />
            <br />
            <div className="AboutHeading1 text-black inter text-lg font-medium">We undertake all building planning, site supervision, 3D elevation, interior design, structural design, and any other activities involved in the project from initiation to completion. We have the knowledge and ability to perfect every detail of the design and every phase of building construction, whether the structure is residential or commercial.</div>
            <br />
            <br />
          {/* <div className="AboutBtn1 text-base text-black inter bg-[#DAAF50] py-4 px-8 rounded-[50px] w-[151px]">Read More</div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default About

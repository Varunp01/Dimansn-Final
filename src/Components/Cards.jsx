// import './App.css'

function Cards() {

  return (
    <>
      <div className="mt-10 sm:mt-0 Cards w-full flex justify-center items-center text-black flex-wrap">
        <div className="Card flex justify-center items-center mx-3 w-[350px] py-3 mb-3">
          <img src="https://i.ibb.co/2MX1RSf/hand-1.png" alt="hand-1" border="0"></img>
          <div className="content ml-3 inter">
            <div className="heading font-semibold text-2xl">Reasonable Prices</div>
            <div className="para inter font-normal text-base text-slate-600">We believe in making exceptional architecture accessible. Our competitive pricing ensures that your dream project is within reach.</div>
          </div>
        </div>
        <div className="Card flex justify-center items-center mx-3 w-[350px] py-3 mb-3">
        <img src="https://i.ibb.co/wc9M3Sv/graphic-design-1.png" alt="graphic-design-1" border="0"></img>
          <div className="content ml-3 inter">
            <div className="heading font-semibold text-2xl">Exclusive Design</div>
            <div className="para inter font-normal text-base text-slate-600">Our team of skilled architects and designers are dedicated to creating unique and innovative designs that reflect your personal style.</div>
          </div>
        </div>
        <div className="Card flex justify-center items-center mx-3 w-[350px] py-3 mb-3">
        <img src="https://i.ibb.co/pRWpTHX/workforce-1.png" alt="workforce-1" border="0"></img>
          <div className="content ml-3 inter">
            <div className="heading font-semibold text-2xl">Professional Team</div>
            <div className="para inter font-normal text-base text-slate-600">With our commitment to quality and client satisfaction, you can trust us to deliver a project that exceeds your expectations.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
function Cards() {
  return (
    <section className="Cards w-full flex justify-center items-center flex-wrap gap-6 py-10 bg-gray-50">
      
      {/* Reasonable Prices Card */}
      <div className="Card cursor-pointer flex flex-col items-center w-[320px] p-6 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-300 ">
        <img 
          src="https://i.ibb.co/2MX1RSf/hand-1.png" 
          alt="hand-1" 
          className="w-16 h-16 mb-4" 
        />
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Reasonable Prices</h3>
          <p className="text-slate-600 text-base leading-relaxed">We believe in making exceptional architecture accessible. Our competitive pricing ensures that your dream project is within reach.</p>
        </div>
      </div>

      {/* Exclusive Design Card */}
      <div className="Card cursor-pointer flex flex-col items-center w-[320px] p-6 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-300 ">
        <img 
          src="https://i.ibb.co/wc9M3Sv/graphic-design-1.png" 
          alt="graphic-design-1" 
          className="w-16 h-16 mb-4" 
        />
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Exclusive Design</h3>
          <p className="text-slate-600 text-base leading-relaxed">Our team of skilled architects and designers are dedicated to creating unique and innovative designs that reflect your personal style.</p>
        </div>
      </div>

      {/* Professional Team Card */}
      <div className="Card cursor-pointer flex flex-col items-center w-[320px] p-6 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-red-300 ">
        <img 
          src="https://i.ibb.co/pRWpTHX/workforce-1.png" 
          alt="workforce-1" 
          className="w-16 h-16 mb-4" 
        />
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Professional Team</h3>
          <p className="text-slate-600 text-base leading-relaxed">With our commitment to quality and client satisfaction, you can trust us to deliver a project that exceeds your expectations.</p>
        </div>
      </div>
      
    </section>
  )
}

export default Cards;

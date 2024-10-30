// import './App.css'

function About() {
  return (
    <section className=" flex flex-col md:flex-row w-full bg-gray-100 py-16" id="AboutUs">
      {/* Image Section */}
      <div className="relative h-[400px] md:h-auto md:w-1/2 flex justify-center items-center ml-10">
        <img
          src="https://i.ibb.co/JvphQSc/Mask-group.png"
          alt="Mask-group"
          className="md:w-2/3 w-2/3 transform transition-transform hover:scale-105 duration-300 absolute top-0 left-2 md:top-10"
        />
        <img
          src="https://i.ibb.co/Byk8s16/Mask-group-1.png"
          alt="Mask-group-1"
          className="md:w-2/3 w-2/3 transform transition-transform hover:scale-105 duration-300 absolute top-20 md:top-28"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 space-y-6 mx-2">
        <h2 className="text-[#f3bc44] text-3xl sm:text-4xl font-bold">About Us</h2>
        <h3 className="text-gray-800 text-3xl sm:text-5xl font-semibold leading-tight">
          A whole different kind of architectural firm.
        </h3>
        <p className="text-gray-700 text-base sm:text-lg font-medium">
          We undertake all building planning, site supervision, 3D elevation, interior design, structural design, and any other
          activities involved in the project from initiation to completion. Our expertise ensures that every detail of the design
          and every phase of construction, whether residential or commercial, is flawlessly executed.
        </p>
      </div>
    </section>
  );
}

export default About;

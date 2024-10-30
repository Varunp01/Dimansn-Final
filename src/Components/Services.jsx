// import './App.css'

function Services() {
  return (
    <section id="Services" className="py-20 bg-gray-50">
      {/* Services Header Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 px-6">
        <div className="md:w-2/3 space-y-4 md:space-y-6 text-center md:text-left">
          <h3 className="text-[#DAAF50] text-xl md:text-2xl font-semibold tracking-wide">
            Services We Offer
          </h3>
          <h2 className="text-gray-800 text-3xl md:text-5xl font-bold">
            Innovative Solutions for Modern Architecture
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            From architectural design to project consultancy, we provide a range of services that cater to every phase of construction and design, focusing on quality and innovation.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co/9sT3VYv/Rectangle-8.png"
            alt="Services Background"
            className="rounded-lg shadow-xl w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Services Cards */}
      <div className="container mx-auto grid gap-10 mt-16 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="group bg-white rounded-lg shadow-md p-8 transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
          <img
            src="https://i.ibb.co/PCs4xPK/workspace-1.png"
            alt="Structural Engineering"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#DAAF50] transition duration-300">
            Structural Engineering
          </h4>
          <p className="text-gray-600 mt-3">
            Providing solid foundations for all projects, ensuring the structural integrity and longevity of buildings.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-[#232323] text-white rounded-lg shadow-md p-8 transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
          <img
            src="https://i.ibb.co/9NcvSQT/staircase-1.png"
            alt="Interior Design"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold group-hover:text-[#f3bc44] transition duration-300">
            Interior Design
          </h4>
          <p className="mt-3">
            Crafting elegant interiors that blend functionality with aesthetic appeal, tailored to your style preferences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-lg shadow-md p-8 transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
          <img
            src="https://i.ibb.co/N31Rbg4/living-room-1.png"
            alt="Project Consultancy"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#DAAF50] transition duration-300">
            Project Consultancy
          </h4>
          <p className="text-gray-600 mt-3">
            Offering guidance from conceptualization to completion, ensuring smooth and logical project progression.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group bg-white rounded-lg shadow-md p-8 transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
          <img
            src="https://i.ibb.co/2SYPPWv/civil-engineering-1.png"
            alt="3D Elevation Design"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#DAAF50] transition duration-300">
            3D Elevation Design
          </h4>
          <p className="text-gray-600 mt-3">
            Providing detailed 3D renderings for a complete visualization of your project from every angle.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;

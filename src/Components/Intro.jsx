import { FaRegPlayCircle } from "react-icons/fa";
import '../App.css';

function Intro() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center object-cover"
      style={{ backgroundImage: "url('https://i.ibb.co/JQVNLm2/Mask-group.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative ml-7 sm:ml-5 z-10 sm:px-32 ">
        <h1 className="text-[#DAAF50] text-3xl sm:text-xl font-medium tracking-wide">
          Welcome to Dimansn Architects
        </h1>
        <h2 className="text-white font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mt-6 animate-fadeIn">
          Where Dreams
        </h2>
        <h2 className="text-white font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight animate-fadeIn">
          Come Alive
        </h2>

      </div>
    </section>
  );
}

export default Intro;

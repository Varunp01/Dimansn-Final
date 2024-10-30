import { useEffect, useState } from "react";

// Stats counter component with animation
function StatsCounter({ end, title }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Duration of animation in ms
    const increment = end / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);
  }, [end]);

  return (
    <div className="w-full sm:w-1/4 flex flex-col justify-center items-center bg-white border-x border-gray-200 p-4 transition transform hover:scale-105 hover:shadow-lg">
      <div className="font-bold text-[#DAAF50] sm:text-[48px] text-[30px]">{count}{title === "Company Rating" ? "" : "+"}</div>
      <div className="font-medium text-gray-700 text-[16px] text-center">{title}</div>
    </div>
  );
}

function DesignAndDecor() {
  return (
    <div className="container flex flex-col items-center justify-between w-full bg-[url('https://i.ibb.co/vsLhHsB/Mask-group-1.png')] bg-cover mx-auto p-6">
      <div className="text-center w-2/3 my-auto py-12">
        <div className="text-[#DAAF50] font-medium text-[36px] sm:text-[50px] mb-4">
          Design and Decoration
        </div>
        <div className="text-white font-semibold text-[30px] sm:text-[42px] mb-2">
          Stunning Luxury Apartments
        </div>
        <div className="text-white font-semibold text-[30px] sm:text-[42px] mb-6">
          Designed for Life
        </div>
        <div className="text-white font-normal text-[16px] max-w-md mx-auto">
          Indulge in the epitome of luxury living. Our stunning apartments are meticulously designed to offer unparalleled comfort and style. From spacious interiors to exquisite finishes, every detail is crafted to perfection. Experience the ultimate in modern living, where elegance meets functionality.
        </div>
      </div>
      
      {/* Animated Stats Section */}
      <div className="bg-white h-auto flex flex-wrap w-full max-w-4xl justify-around shadow-lg rounded-lg overflow-hidden animate-fadeIn my-8">
        <StatsCounter end={20} title="Years Of Experience" />
        <StatsCounter end={150} title="Project Completed" />
        <StatsCounter end={97} title="Happy Clients" />
        <StatsCounter end={4.7} title="Company Rating" />
      </div>
    </div>
  );
}

export default DesignAndDecor;

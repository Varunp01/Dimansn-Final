import '../App.css';

function HowWeWork() {
  return (
    <>
      <div className="HowWeWork mt-20 flex flex-col items-center" id="HowWeWork">
        <div className="text-center mb-8">
          <h2 className="inter font-semibold text-[#DAAF50] text-[42px]">How We Work</h2>
          <p className="inter font-normal text-gray-700 text-[16px] px-10">
            Our process is a collaborative journey, from the initial concept to the final realization.
          </p>
        </div>

        <div className="HowWeWorkCards grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
          {[
            {
              number: '01',
              heading: 'Concept',
              description:
                "Our collaborative approach ensures a seamless journey from concept to completion. We begin by listening attentively to your vision, understanding your needs, and exploring the possibilities. Together, we develop a clear and inspiring concept that aligns with your goals.",
            },
            {
              number: '02',
              heading: 'Design',
              description:
                "Our talented team of designers translates the concept into stunning visual representations, meticulously considering every detail to create spaces that are both functional and aesthetically pleasing.",
            },
            {
              number: '03',
              heading: 'Development',
              description:
                "With a focus on quality and efficiency, we oversee the entire development process, from construction to interior design. We work closely with skilled craftsmen and contractors to ensure that every aspect of your project is executed to perfection.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="card flex flex-col p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-1 bg-white"
            >
              <div className="number inter font-bold text-[#646E782B] text-[64px]">{card.number}</div>
              <div className="content">
                <h3 className="contentheading inter font-bold text-black text-[24px]">{card.heading}</h3>
                <p className="contentpara inter font-normal text-gray-600 text-[16px]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HowWeWork;

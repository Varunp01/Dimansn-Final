import Avatar from 'react-avatar';
import { BiSolidQuoteSingleRight, BiSolidQuoteSingleLeft } from "react-icons/bi";
import "./TestimonialCSS.css";

function Testimonial() {
    const carouselItems = document.querySelectorAll(".carousel_item");
    let i = 1;

    setInterval(() => {
        Array.from(carouselItems).forEach((item, index) => {
            item.style.transform = `translateX(-${i * 100}%)`;
        });

        i = (i + 1) % carouselItems.length; // loop back to first
    }, 3000); // Set the interval to 3 seconds for better readability

    return (
        <div className="testimonial-container">
            <div className="testimonial-header">
                <div className="about-heading text-[#DAAF50] inter text-xl font-medium">Our Client</div>
                <h2 className="testimonial-title text-black inter text-5xl font-semibold">
                    Here’s what our satisfied clients are saying
                </h2>
                <BiSolidQuoteSingleLeft className="quote-icon" />
            </div>

            <div className="carousel-container">
                <div className="carousel_items">
                    {/* Carousel Item */}
                    {Array(5).fill(null).map((_, index) => (
                        <div className="carousel_item text-center" key={index}>
                            <p className="testimonial-text">
                                Working with Dimansn was an absolute pleasure. Their team of experts guided us through the entire construction process, from initial planning to final handover. The attention to detail and commitment to quality was truly impressive. I highly recommend their services to anyone looking for a reliable and professional construction partner.
                            </p>
                            <div className="carousel_text justify-center">
                                <Avatar facebookId="100008343750912" size="50" round={true} />
                                <div className="client-info">
                                    <p className='text-lg font-semibold'>Joshua Keith</p>
                                    <p className='text-sm'>Senior Client</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <BiSolidQuoteSingleRight className="quote-icon" />
        </div>
    );
}

export default Testimonial;

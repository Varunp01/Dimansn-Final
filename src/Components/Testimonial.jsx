import Avatar from 'react-avatar';
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import "../App.css"
import "./TestimonialCSS.css"
function Testimonial() {
    const carouselItems = document.querySelectorAll(".carousel_item");
    let i = 1;

    setInterval(() => {
        // Accessing All the carousel Items
        Array.from(carouselItems).forEach((item, index) => {

            if (i < carouselItems.length) {
                item.style.transform = `translateX(-${i * 100}%)`
            }
        })


        if (i < carouselItems.length) {
            i++;
        }
        else {
            i = 0;
        }
    }, 2000)
    return (
        <>

            {/* <div className="AboutHeading1 text-[#DAAF50] inter text-xl font-medium">Our Client</div>
            <br />
            <div className="AboutHeading1 text-black inter text-5xl font-semibold">Here’s what our satisfied clients are saying</div>
            <br />
            <BiSolidQuoteSingleLeft />
            <br />
            <div className="inter font-normal text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae convallis dui, sit amet porttitor neque. Fusce auctor erat ac purus tristique lacinia.</div>
            <br />
            <BiSolidQuoteSingleRight />
            <br />
            <div className="flex">
                <Avatar facebookId="100008343750912" size="50" round={true} />
                <div className="px-5">
                    <p className='text-lg font-semibold'>Joshua Keith</p>
                    <p className='text-sm'>Senior Client</p>
                </div>
            </div> */}


            <div className="AboutHeading1 text-[#DAAF50] inter text-xl font-medium">Our Client</div>
            <br />
            <div className="AboutHeading1 text-black inter text-5xl font-semibold">Here’s what our satisfied clients are saying</div>
            <br />
            <BiSolidQuoteSingleLeft />
            <br />


            <div class="carousel-container">
                <div class="carousel_items">
                    <div class="carousel_item item1 text-center">
                        Working with Dimansn was an absolute pleasure. Their team of experts guided us through the entire construction process, from initial planning to final handover. The attention to detail and commitment to quality was truly impressive. I highly recommend their services to anyone looking for a reliable and professional construction partner.
                        <p class="carousel_text justify-center">
                            <Avatar facebookId="100008343750912" size="50" round={true} />
                            <div className="px-5">
                                <p className='text-lg font-semibold'>Joshua Keith</p>
                                <p className='text-sm'>Senior Client</p>
                            </div>
                        </p>
                    </div>
                    <div class="carousel_item item1 text-center">
                        Working with Dimansn was an absolute pleasure. Their team of experts guided us through the entire construction process, from initial planning to final handover. The attention to detail and commitment to quality was truly impressive. I highly recommend their services to anyone looking for a reliable and professional construction partner.
                        <p class="carousel_text justify-center">
                            <Avatar facebookId="100008343750912" size="50" round={true} />
                            <div className="px-5">
                                <p className='text-lg font-semibold'>Joshua Keith</p>
                                <p className='text-sm'>Senior Client</p>
                            </div>
                        </p>
                    </div>
                    <div class="carousel_item item1 text-center">
                        Working with Dimansn was an absolute pleasure. Their team of experts guided us through the entire construction process, from initial planning to final handover. The attention to detail and commitment to quality was truly impressive. I highly recommend their services to anyone looking for a reliable and professional construction partner.
                        <p class="carousel_text justify-center">
                            <Avatar facebookId="100008343750912" size="50" round={true} />
                            <div className="px-5">
                                <p className='text-lg font-semibold'>Joshua Keith</p>
                                <p className='text-sm'>Senior Client</p>
                            </div>
                        </p>
                    </div>
                    <div class="carousel_item item1 text-center">
                        Working with Dimansn was an absolute pleasure. Their team of experts guided us through the entire construction process, from initial planning to final handover. The attention to detail and commitment to quality was truly impressive. I highly recommend their services to anyone looking for a reliable and professional construction partner.
                        <p class="carousel_text justify-center">
                            <Avatar facebookId="100008343750912" size="50" round={true} />
                            <div className="px-5">
                                <p className='text-lg font-semibold'>Joshua Keith</p>
                                <p className='text-sm'>Senior Client</p>
                            </div>
                        </p>
                    </div>
                    <div class="carousel_item item1 text-center">
                        Working with Dimansn was an absolute pleasure. Their team of experts guided us through the entire construction process, from initial planning to final handover. The attention to detail and commitment to quality was truly impressive. I highly recommend their services to anyone looking for a reliable and professional construction partner.
                        <p class="carousel_text justify-center">
                            <Avatar facebookId="100008343750912" size="50" round={true} />
                            <div className="px-5">
                                <p className='text-lg font-semibold'>Joshua Keith</p>
                                <p className='text-sm'>Senior Client</p>
                            </div>
                        </p>
                    </div>
                </div>
            </div>

            <br />
            <BiSolidQuoteSingleRight />
            <br />

        </>
    )
}

export default Testimonial

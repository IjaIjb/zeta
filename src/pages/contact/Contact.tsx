import React, { useEffect } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import ContactMap from "./ContactMap";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = location.hash.replace("#", ""); // Remove the # from the hash
      scroller.scrollTo(target, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);
  return (
    <div className="bg-[#262626] h-full  relative">
      <div className="bg-black">
        <div
          className="about-transition_main-img bg-cover bg-center h-full"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b7eb0c290e7bf3aaab98f0_tranisiton-bg.webp')",
          }}
        >
          <div className="flex justify-center">
            <div className="max-w-[2000px] lg:px-14 px-3 w-full">
              <Navbar />
              <div className="flex justify-center mt-[200px] mb-[200px]">
                <h3 className="text-white text-center text-[60px] font-[500] max-w-[700px]">
                  We are closer to you than you think, Get in Touch
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20">
        <div id="get-in-touch" className="flex justify-center ">
          <h3 className="text-[#f5f5f5] text-center leading-[45px] lg:leading-[60px]  z-10 text-[40px] lg:text-[4rem] ">
            Reach out to us
          </h3>
        </div>
        <div className="flex justify-center">
          <h3 className="text-[#737373] max-w-[600px] z-10 text-center text-[19px] md:text-[25px] ">
         Have questions or want to collaborate? Let’s build a healthier, longer future together.
          </h3>
        </div>

        <div className="flex mt-5 mb-10 justify-center">
          <div className="lg:flex z-10 gap-4">
            <div className="flex z-10 gap-2 justify-center py-2 text-white bg-[#262626] items-center text-[16px] px-3  rounded-[12px]">
              Book Consultation
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 25.3594L11 22.7812V4.6875L20 7.26562V25.3594ZM21.5 25.2656V7.17188L27.4531 4.78125C28.1562 4.5 29 5.01562 29 5.8125V21.5156C29 21.9844 28.7188 22.4062 28.25 22.5469L21.5 25.2656ZM2.70312 7.5L9.5 4.78125V22.875L3.5 25.2656C2.79688 25.5469 2 25.0312 2 24.2344V8.53125C2 8.0625 2.28125 7.64062 2.70312 7.5Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
            </div>

            <div className="flex z-10 mt-3 lg:mt-0 gap-2 py-2 justify-center bg-[#23F7DD] text-[#080808] items-center text-[16px] px-7  rounded-[12px]">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <div id="our-locations">
        <ContactMap />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

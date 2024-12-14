import React from "react";
import Navbar from "../../component/Navbar";
import CoreValues from "./CoreValues";
import FutureProof from "../home/FutureProof";
import PicturesAlone from "../home/PicturesAlone";
import LatestNews from "../home/LatestNews";
import Footer from "../../component/Footer";

const About = () => {
  return (
    <div className="bg-[#262626] h-full  relative">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover "
          style={{
            backgroundImage:
              "url('https://cdn.multiversx.com/webflow/Hero%20section%20background.webp')",
            // transform: "rotate(-100deg)", // Rotate the image slightly left
            transformOrigin: "center",
            top: "-20%",
            // backgroundSize: "80%", // Reduce or increase the size of the background image
            left: "-10%", // Push the image to the right side
            position: "absolute", // Ensure it's positioned correctly
          }}
        ></div>

        <div className="lg:p-3 p-2 flex w-full  justify-center ">
          <div className="max-w-[2000px] overflow-hidden z-10 bg-black rounded-[50px]  w-full">
            <div className="bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20% w-full rounded-[15px]  pt-[6px]">
              <div className="flex justify-center">
                <div className="max-w-[2000px]  lg:px-14 px-3 w-full">
                  <div className="mx-7">
                    <Navbar />
                  </div>
                  <div className="">
                    <div className="flex justify-center mt-[100px]">
                      {/* <div className="bg-[#0A201D] flex gap-2 hover:gap-4 cursor-pointer items-center p-2 rounded-full">
                  <div className="bg-[#23F7DD] text-[8px] px-1 rounded-full">New</div>
               <h5 className="text-[#F5F5F5] text-[12px]">Spica 1.8 Live on Mainnet</h5>
                </div> */}
                    </div>
                    <div className="flex justify-center ">
                      <h3 className="text-[#f5f5f5] text-center leading-[45px] lg:leading-[60px]  z-10 text-[40px] lg:text-[4rem] ">
                        Who We Are
                      </h3>
                    </div>
                    <div className="flex justify-center">
                      <h3 className="text-[#737373] z-10 text-center text-[19px] md:text-[25px] ">
                        Revolutionizing Longevity and Cell Rejuvenation
                      </h3>
                    </div>

                    <div className="flex mt-5 mb-10 justify-center">
                      <div className="lg:flex z-10 gap-4">
                        <div className="flex z-10 gap-2 justify-center py-2 text-white bg-[#262626] items-center text-[16px] px-3  rounded-[12px]">
                          Explore Our Innovations
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

                    <div className="relative ">
                      <div className="absolute lg:block hidden w-full h-full inset-0 bg-cover">
                        <div
                          style={{
                            transform: "rotate(40deg)", // Rotate the image slightly left
                            transformOrigin: "center",
                            top: "-180%",
                            left: "-20%", // Push the image to the right side
                            position: "absolute", // Ensure it's positioned correctly
                            zIndex: 1, // Ensure the image is behind the gradient
                          }}
                          className="absolute w-[400px] h-[400px]"
                        >
                          <img
                            src="https://cdn.multiversx.com/webflow/Glass%20shield%404-1080x1080%202.webp"
                            alt=""
                            loading="eager"
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20%"
                          style={{
                            left: "-10%",
                            top: "-70%",
                            zIndex: 2, // Ensure the gradient is above the image
                          }}
                        ></div>
                      </div>
                      <div className="absolute lg:block hidden w-full h-full inset-0 bg-cover">
                        <div
                          style={{
                            transform: "rotate(-70deg)", // Rotate the image slightly left
                            transformOrigin: "center",
                            top: "-180%",
                            right: "-25%", // Push the image to the right side
                            position: "absolute", // Ensure it's positioned correctly
                            zIndex: 1, // Ensure the image is behind the gradient
                          }}
                          className="absolute w-[550px] h-[550px]"
                        >
                          <img
                            src="https://cdn.multiversx.com/webflow/Glass%20shield%404-1080x1080%201.webp"
                            alt=""
                            loading="eager"
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20%"
                          style={{
                            right: "-10%",
                            top: "-70%",
                            zIndex: 2, // Ensure the gradient is above the image
                          }}
                        ></div>
                      </div>
                      <div className="z-20 flex justify-center">
                        <div className="max-w-[1100px] w-full">
                          <div className="grid md:grid-cols-2 gap-5 w-full">
                            <div className="bg-[#262626] w-full z-10 rounded-[1rem] py-7 px-5">
                              <div className="flex flex-col ">
                                <h6 className="text-[#EFEFEF] text-[15px]">
                                  We are to serve you right and give you the
                                  best experience in navigation, biotech and all
                                  of ou rproducts
                                </h6>
                                <h6 className="text-[#23F7DD] text-end text-[35px]">
                                  Our Mission
                                </h6>
                              </div>
                            </div>

                            <div className="bg-[#262626] w-full z-10 rounded-[1rem] py-7 px-5">
                              <div className="flex flex-col ">
                                <h6 className="text-[#EFEFEF] text-[15px]">
                                  We are to serve you right and give you the
                                  best experience in navigation, biotech and all
                                  of ou rproducts
                                </h6>
                                <h6 className="text-[#23F7DD] text-end text-[35px]">
                                  OUR VISION
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center pb-10">
                      <div className="max-w-[2000px] md:px-14 px-4 w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CoreValues />
      <FutureProof />
      <PicturesAlone />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default About;

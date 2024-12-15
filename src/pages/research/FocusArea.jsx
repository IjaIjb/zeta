import React from "react";

const FocusArea = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="max-w-[2000px] h-full md:px-14 px-4 w-full ">
          <div className="relative">
            {/* Custom Arrow Buttons Positioned in Front of the Heading */}

            <div className="flex justify-center mt-8">
              <h4 className="text-white text-[45px] leading-[60px] md:text-[70px] font-semibold text-center max-w-[800px]">
                Engage the developer community
              </h4>
            </div>

            <div className="flex justify-center mt-2">
              <h4 className="text-[#737373] text-[18px]   text-center max-w-[600px]">
                Discover the places where the community gathers and the live
                community sessions happening.
              </h4>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="">
                <h4 className="text-[25px] text-white font">Key Focus Areas</h4>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 grid-cols-2">
              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-[20px]">Longevity Research</h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-[20px]">
                  Cell Rejuvenation Studies
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-[20px]">
                  Biomedical Device Development
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-[20px]">
                  Artificial Intelligence in Biotech
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-[20px]">Published Research</h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-[20px]">Ongoing Projects</h5>
              </div>
            </div>
          </div>

          <div className="relative mt-5">
            {/* Custom Arrow Buttons Positioned in Front of the Heading */}

            <div className="flex justify-center mt-8">
              <h4 className="text-white text-[45px] leading-[60px] md:text-[70px] font-semibold text-center max-w-[800px]">
                Build and get support to succeed
              </h4>
            </div>

            <div className="relative mb-[120px]">
              <div className="absolute">
                <img
                  src="https://cdn.multiversx.com/webflow/builders_slide-OPEN_SOURCE-02.webp"
                  alt=""
                  loading="lazy"
                  className="builders_support_bg-img"
                ></img>
              </div>

              <div className="flex justify-center mb-7 mt-2">
                <h4 className="text-[#737373] text-[18px]   text-center max-w-[600px]">
                  Start building with confidence as you tap into a network of
                  experts ready to guide you every step of the way.
                </h4>
              </div>

              <div className="grid md:grid-cols-2 lg:px-14 px-3 gap-4">
                <div className="bg-[#171717] z-10 rounded-[13px] flex justify-center items-center h-[300px] p-1">
                  <div>
                    <div className="flex justify-center text-center">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 36 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.1875 26.1562L26.4375 29.8125L8.0625 25.9688L8.90625 22.3125L27.1875 26.1562ZM31.9688 18L29.625 20.9062L15.1875 8.90625L17.625 6L31.9688 18ZM29.0625 21.75L27.4688 25.125L10.5 17.25L12.0938 13.7812L29.0625 21.75ZM24.5625 0L35.7188 15.0938L32.7188 17.3438L21.5625 2.25L24.5625 0ZM26.4375 30.75V34.5H7.6875V30.75H26.4375ZM30.1875 38.25V27H33.9375V42H0.1875V27H3.9375V38.25H30.1875Z"
                          fill="url(#paint0_linear_3735_9423)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_3735_9423"
                            x1="-6.70588"
                            y1="45"
                            x2="21.5294"
                            y2="45"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#00FFC2"></stop>
                            <stop offset="1" stop-color="#28CAE0"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h5 className="text-white text-center mt-5 max-w-[200px] text-[20px]">
                      Get answers to technical questions
                    </h5>
                    <div>
                      <div className="flex  mt-3 whitespace-nowrap z-10 gap-4 justify-center py-3 text-white bg-[#737373] items-center text-[16px] px-3  rounded-[12px]">
                        Ask Question
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#171717] z-10 rounded-[13px] flex justify-center items-center h-[300px] p-1">
                  <div>
                    <div className="flex justify-center text-center">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2915 37.0938L12.3853 34.1875C11.6353 33.4375 11.354 32.3125 11.729 31.1875C12.0103 30.3438 12.3853 29.3125 12.7603 28H2.9165C2.07275 28 1.32275 27.625 0.947754 26.875C0.479004 26.2188 0.479004 25.375 0.947754 24.625L5.82275 16.375C7.0415 14.3125 9.2915 13 11.6353 13H19.4165C19.604 12.625 19.7915 12.3438 20.0728 11.9688C27.7603 0.625 39.1978 0.25 45.9478 1.5625C47.0728 1.75 47.9165 2.59375 48.104 3.71875C49.4165 10.4688 49.0415 21.9062 37.6978 29.5938C37.3228 29.875 37.0415 30.0625 36.6665 30.25V38.0312C36.6665 40.375 35.354 42.625 33.2915 43.8438L25.0415 48.7188C24.2915 49.1875 23.4478 49.1875 22.7915 48.7188C22.0415 48.3438 21.6665 47.5938 21.6665 46.75V36.7188C20.2603 37.1875 19.1353 37.5625 18.2915 37.8438C17.2603 38.2188 16.0415 37.9375 15.2915 37.0938ZM36.6665 16.75C37.979 16.75 39.1978 16.0938 39.854 14.875C40.5103 13.75 40.5103 12.3438 39.854 11.125C39.1978 10 37.979 9.25 36.6665 9.25C35.2603 9.25 34.0415 10 33.3853 11.125C32.729 12.3438 32.729 13.75 33.3853 14.875C34.0415 16.0938 35.2603 16.75 36.6665 16.75Z"
                          fill="url(#paint0_linear_3735_10847)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_3735_10847"
                            x1="-0.0393784"
                            y1="49"
                            x2="28.1959"
                            y2="49"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#00FFC2"></stop>
                            <stop offset="1" stop-color="#28CAE0"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h5 className="text-white text-center mt-5 max-w-[200px] text-[20px]">
                      Join the next Developer office hours
                    </h5>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusArea;

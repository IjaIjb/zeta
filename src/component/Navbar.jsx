import { Transition } from "@headlessui/react";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleRe, setToggleRe] = useState(false);
  const [toggleSer, setToggleSer] = useState(false);
  const [toggleSo, setToggleSo] = useState(false);
  const [toggleCar, setToggleCar] = useState(false);
  const [toggleCol, setToggleCol] = useState(false);
  const [toggleCon, setToggleCon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <nav className="bg-white w-full z-20 top-6 rounded-[12px] py-2 "> */}
      <nav className="bg-[#0e0e0e]  z-20 top-6 rounded-[12px] py-2 ">
        <div className="flex w-full items-center  justify-between ">
          <div>
            <img src="/logo.png" className="w-full h-[60px]" alt="/" />
          </div>
          <div className=" md:pl-1 pl-[80px] pr-8 pt-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg md:hidden  hover:bg-gray-100"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#737373"
                    d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#737373"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="md:flex hidden gap-6">
            <div
              className="relative"
              onMouseOut={() => setToggle((prev) => !prev)}
              onMouseOver={() => setToggle((prev) => !prev)}
            >
              <h5 className="text-[#A3A3A3] cursor-pointer text-[12px]">
                About us
              </h5>
              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } p-2 bg-[#171717] absolute -bottom-30  mx-4 my-0 min-w-[200px] rounded-[15px]   shadow-[#171717] shadow-md`}
              >
                <div className="flex flex-col gap-3">
<h4 className="text-white">Who we are</h4>
<h4 className="text-white">Mission</h4>
<h4 className="text-white">Vission</h4>
              </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseOut={() => setToggleRe((prev) => !prev)}
              onMouseOver={() => setToggleRe((prev) => !prev)}
            >
              <h5 className="text-[#A3A3A3] cursor-pointer text-[12px]">
                Research & Innovation
              </h5>
              <div
                className={`${
                  toggleRe ? "flex" : "hidden"
                } p-2 bg-[#171717] absolute -bottom-30  mx-4 my-0 min-w-[200px] rounded-[15px]   shadow-[#171717] shadow-md`}
              >
              <div className="flex flex-col gap-3">
<h4 className="text-white">Longevity Research</h4>
<h4 className="text-white">Cell Rejuvenation Studies</h4>
<h4 className="text-white">Biomedical Device Development</h4>
<h4 className="text-white">AI in Biotech</h4>
<h4 className="text-white">Published Research</h4>
<h4 className="text-white">Ongoing Projects</h4>
              </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseOut={() => setToggleSer((prev) => !prev)}
              onMouseOver={() => setToggleSer((prev) => !prev)}
            >
              <h5 className="text-[#A3A3A3] cursor-pointer text-[12px]">
                Services
              </h5>
              <div
                className={`${
                  toggleSer ? "flex" : "hidden"
                } p-2 bg-[#171717] absolute -bottom-30  mx-4 my-0 min-w-[200px] rounded-[15px]   shadow-[#171717] shadow-md`}
              >
                   <div className="flex flex-col gap-3">
<h4 className="text-white">Contract Research</h4>
<h4 className="text-white">Clinical Trials</h4>
<h4 className="text-white">Data Analysis Services</h4>
<h4 className="text-white">Custom Biomedical Solutions</h4>

              </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseOut={() => setToggleSo((prev) => !prev)}
              onMouseOver={() => setToggleSo((prev) => !prev)}
            >
              <h5 className="text-[#A3A3A3] cursor-pointer text-[12px]">
                Solutions
              </h5>
              <div
                className={`${
                  toggleSo ? "flex" : "hidden"
                } p-2 bg-[#171717] absolute -bottom-30  mx-4 my-0 min-w-[200px] rounded-[15px]   shadow-[#171717] shadow-md`}
              >
                <div className="flex flex-col gap-3">
<h4 className="text-white">AI-Powered Healthcare Tools</h4>
<h4 className="text-white">Biomedical Devices for Regenerative Medicine</h4>
<h4 className="text-white">Microorganism Experimentation</h4>

              </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseOut={() => setToggleCar((prev) => !prev)}
              onMouseOver={() => setToggleCar((prev) => !prev)}
            >
              <h5 className="text-[#A3A3A3] cursor-pointer text-[12px]">
                Careers
              </h5>
              <div
                className={`${
                  toggleCar ? "flex" : "hidden"
                } p-2 bg-[#171717] absolute -bottom-30  mx-4 my-0 min-w-[200px] rounded-[15px]   shadow-[#171717] shadow-md`}
              >
               <div className="flex flex-col gap-3">
<h4 className="text-white">Join Our Team</h4>
<h4 className="text-white">Open Positions</h4>
<h4 className="text-white">Internship Opportunities
</h4>

              </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseOut={() => setToggleCol((prev) => !prev)}
              onMouseOver={() => setToggleCol((prev) => !prev)}
            >
              <h5 className="text-[#A3A3A3] cursor-pointer text-[12px]">
                Collaboration
              </h5>
              {/* <div
                className={`${
                  toggleCol ? "flex" : "hidden"
                } p-2 bg-[#171717] absolute -bottom-30  mx-4 my-0 min-w-[200px] rounded-[15px]   shadow-[#171717] shadow-md`}
              >
                <div className="">
                  <h4 className="text-white">Who we are</h4>
                  <h4 className="text-white">Who we are</h4>
                  <h4 className="text-white">Who we are</h4>
                </div>
              </div> */}
            </div>

            <div
              className="relative"
              onMouseOut={() => setToggleCon((prev) => !prev)}
              onMouseOver={() => setToggleCon((prev) => !prev)}
            >
              <h5 className="text-[#A3A3A3] cursor-pointer text-[12px]">
                Contact Us
              </h5>
              {/* <div
                className={`${
                  toggleCon ? "flex" : "hidden"
                } p-2 bg-[#171717] absolute -bottom-30  mx-4 my-0 min-w-[200px] rounded-[15px]   shadow-[#171717] shadow-md`}
              >
                <div className="">
                  <h4 className="text-white">Who we are</h4>
                  <h4 className="text-white">Who we are</h4>
                  <h4 className="text-white">Who we are</h4>
                </div>
              </div> */}
            </div>

  

          </div>
        </div>
        <Transition
           show={isOpen}
           enter="transition ease-out duration-500 transform"
           enterFrom="opacity-0 scale-95"
           enterTo="opacity-100 scale-100"
           leave="transition ease-in duration-400 transform"
           leaveFrom="opacity-100 scale-100"
           leaveTo="opacity-0 scale-95" 
           >
            {(ref) => (
                  <div
                  className="lg:hidden bg-[#0e0e0e] w-full pl-6 pr-4 h-screen mt-3"
                  id="mobile-menu"
                >
                  <div ref={ref} className="pt-10 pb-3 space-y-4">
                  <div
              className="relative"
              onMouseOut={() => setToggle((prev) => !prev)}
              onMouseOver={() => setToggle((prev) => !prev)}
            >
              <div className="flex gap-3">
              <h5 className="text-[#A3A3A3] cursor-pointer text-[15px]">
                About us
              </h5>
              <span className=" text-white pr-10">
                      {toggle ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m16.9 13.4l-4.2-4.2c-.4-.4-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4s1 .4 1.4 0l3.5-3.5l3.5 3.5c.2.2.4.3.7.3c.3 0 .5-.1.7-.3c.4-.4.4-1 0-1.4z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293Z"
                          />
                        </svg>
                      )}
                    </span>
              </div>
              <div className={`${toggle ? "flex" : "hidden"} px-3 py-3 bg-[#171717] rounded-[12px]`}>
                  <div className=" font-poppins flex flex-col justify-center flex-1">
              <div className="flex flex-col gap-3">
<h4 className="text-white">Who we are</h4>
<h4 className="text-white">Mission</h4>
<h4 className="text-white">Vission</h4>
              </div>
                  </div>
                </div>
            </div>

            <div
              className="relative"
              onMouseOut={() => setToggleRe((prev) => !prev)}
              onMouseOver={() => setToggleRe((prev) => !prev)}
            >
              <div className="flex gap-3">
              <h5 className="text-[#A3A3A3] cursor-pointer text-[15px]">
              Research & Innovation
              </h5>
              <span className=" text-white pr-10">
                      {toggleRe ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m16.9 13.4l-4.2-4.2c-.4-.4-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4s1 .4 1.4 0l3.5-3.5l3.5 3.5c.2.2.4.3.7.3c.3 0 .5-.1.7-.3c.4-.4.4-1 0-1.4z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293Z"
                          />
                        </svg>
                      )}
                    </span>
              </div>
              <div className={`${toggleRe ? "flex" : "hidden"} px-3 py-3 bg-[#171717] rounded-[12px]`}>
                  <div className=" font-poppins flex flex-col justify-center flex-1">
              <div className="flex flex-col gap-3">
<h4 className="text-white">Longevity Research</h4>
<h4 className="text-white">Cell Rejuvenation Studies</h4>
<h4 className="text-white">Biomedical Device Development</h4>
<h4 className="text-white">AI in Biotech</h4>
<h4 className="text-white">Published Research</h4>
<h4 className="text-white">Ongoing Projects</h4>
              </div>
                  </div>
                </div>
            </div>

            <div
              className="relative"
              onMouseOut={() => setToggleSer((prev) => !prev)}
              onMouseOver={() => setToggleSer((prev) => !prev)}
            >
              <div className="flex gap-3">
              <h5 className="text-[#A3A3A3] cursor-pointer text-[15px]">
              Services

              </h5>
              <span className=" text-white pr-10">
                      {toggleSer ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m16.9 13.4l-4.2-4.2c-.4-.4-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4s1 .4 1.4 0l3.5-3.5l3.5 3.5c.2.2.4.3.7.3c.3 0 .5-.1.7-.3c.4-.4.4-1 0-1.4z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293Z"
                          />
                        </svg>
                      )}
                    </span>
              </div>
              <div className={`${toggleSer ? "flex" : "hidden"} px-3 py-3 bg-[#171717] rounded-[12px]`}>
                  <div className=" font-poppins flex flex-col justify-center flex-1">
              <div className="flex flex-col gap-3">
<h4 className="text-white">Contract Research</h4>
<h4 className="text-white">Clinical Trials</h4>
<h4 className="text-white">Data Analysis Services</h4>
<h4 className="text-white">Custom Biomedical Solutions</h4>

              </div>
                  </div>
                </div>
            </div>



            <div
              className="relative"
              onMouseOut={() => setToggleSo((prev) => !prev)}
              onMouseOver={() => setToggleSo((prev) => !prev)}
            >
              <div className="flex gap-3">
              <h5 className="text-[#A3A3A3] cursor-pointer text-[15px]">
              Solutions

              </h5>
              <span className=" text-white pr-10">
                      {toggleSo ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m16.9 13.4l-4.2-4.2c-.4-.4-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4s1 .4 1.4 0l3.5-3.5l3.5 3.5c.2.2.4.3.7.3c.3 0 .5-.1.7-.3c.4-.4.4-1 0-1.4z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293Z"
                          />
                        </svg>
                      )}
                    </span>
              </div>
              <div className={`${toggleSo ? "flex" : "hidden"} px-3 py-3 bg-[#171717] rounded-[12px]`}>
                  <div className=" font-poppins flex flex-col justify-center flex-1">
              <div className="flex flex-col gap-3">
<h4 className="text-white">AI-Powered Healthcare Tools</h4>
<h4 className="text-white">Biomedical Devices for Regenerative Medicine</h4>
<h4 className="text-white">Microorganism Experimentation</h4>

              </div>
                  </div>
                </div>
            </div>

            <div
              className="relative"
              onMouseOut={() => setToggleCar((prev) => !prev)}
              onMouseOver={() => setToggleCar((prev) => !prev)}
            >
              <div className="flex gap-3">
              <h5 className="text-[#A3A3A3] cursor-pointer text-[15px]">
        Careers

              </h5>
              <span className=" text-white pr-10">
                      {toggleCar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m16.9 13.4l-4.2-4.2c-.4-.4-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4s1 .4 1.4 0l3.5-3.5l3.5 3.5c.2.2.4.3.7.3c.3 0 .5-.1.7-.3c.4-.4.4-1 0-1.4z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293Z"
                          />
                        </svg>
                      )}
                    </span>
              </div>
              <div className={`${toggleCar ? "flex" : "hidden"} px-3 py-3 bg-[#171717] rounded-[12px]`}>
                  <div className=" font-poppins flex flex-col justify-center flex-1">
              <div className="flex flex-col gap-3">
<h4 className="text-white">Join Our Team</h4>
<h4 className="text-white">Open Positions</h4>
<h4 className="text-white">Internship Opportunities
</h4>

              </div>
                  </div>
                </div>
            </div>

                  </div>

                  </div>
            )}

        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;

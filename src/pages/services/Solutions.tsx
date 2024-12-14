import React from "react";

const Solutions = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="max-w-[2000px] h-full md:px-14 px-4 w-full ">
          <div className="relative"></div>
          <div className="">
            <h4 className="text-[25px] text-white font-semibold mb-2">
              Solutions
            </h4>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black pb-5 rounded-[13px]">
              <img
                src="https://cdn.multiversx.com/webflow/Dyson-spheres03.webp"
                alt=""
                loading="lazy"
                className="-mt-10 card-img"
              />

              <div className="p-3  flex justify-center items-center ">
                <h5 className="text-white text-center text-[20px]">
                  AI-Powered Healthcare Tools
                </h5>
              </div>
            </div>

            <div className="bg-black pb-5 rounded-[13px]">
              <img
                src="https://cdn.multiversx.com/webflow/Dyson-spheres02.webp"
                alt=""
                loading="lazy"
                className="-mt-10 card-img"
              />

              <div className="p-3  flex justify-center items-center ">
                <h5 className="text-white text-center text-[20px]">
                  Biomedical Devices for Regenerative Medicine
                </h5>
              </div>
            </div>
            <div className="bg-black pb-5 rounded-[13px] overflow-hidden">
              <img
                src="https://cdn.multiversx.com/webflow/Dyson-spheres01.webp"
                alt=""
                loading="lazy"
                className="-mt-10 card-img"
              />

              <div className="p-3  flex justify-center items-center ">
                <h5 className="text-white text-center text-[20px]">
                  Microorganism Experimentation
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
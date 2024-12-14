import React from "react";

const FocusArea = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="max-w-[2000px] h-full md:px-14 px-4 w-full ">
          <div className="relative">
            {/* Custom Arrow Buttons Positioned in Front of the Heading */}
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
        </div>
      </div>
    </div>
  );
};

export default FocusArea;

import React from "react";

const LetsMake = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-[1500px] h-full md:px-14 px-4 w-full ">
          <div className="flex justify-center mt-20">
            <h4 className="text-[#F5F5F5] leading-[45px] lg:leading-[75px] text-center max-w-[700px] text-[35px] lg:text-[75px] ">
            AI-Powered Healthcare Tools

            </h4>
          </div>
          <h4 className="text-center text-[#F5F5F5] text-[16px] opacity-40 pt-4 pb-10">
          Biomedical Devices for Regenerative Medicine

          </h4>

          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden rounded-[40px] flex flex-col justify-between">
                <div className="flex justify-center">
                  <img
                    src="https://cdn.multiversx.com/webflow/esdt-visual.webp"
                    alt=""
                    className="bento-home_image-top w-[260px] h-[260px] -mt-10"
                  />
                </div>
                <div className="flex justify-center">
                  <h4 className="text-white text-center max-w-[100px] text-[1.5rem] font-[500] mb-4">
                    Native Assets
                  </h4>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden rounded-[40px] flex flex-col justify-between">
                <div className="flex justify-center">
                  <h4 className="text-white text-center max-w-[200px] text-[1.5rem] font-[500] mt-4">
                    Safest User Experience
                  </h4>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://cdn.multiversx.com/webflow/glass-shield.webp"
                    alt=""
                    className="bento-home_image-top w-[260px] h-[260px] -mb-14"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 col-span-12">
              <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden rounded-[40px] flex flex-col justify-between">
                <div className="flex justify-end">
                  <img
                    src="https://cdn.multiversx.com/webflow/stacking-transition-visual.webp"
                    alt=""
                    className="bento-home_image-top  lg:-mt-16 -mt-[130px] -mr-[250px]"
                  />
                </div>

                <div className="md:flex justify-between px-10">
                  <h4 className="text-white  max-w-[200px] text-[36px] font-[500] mt-4">
                    30% Developer Royalties
                  </h4>
                  <h4 className="text-[#a3a3a3] md:place-self-end max-w-[200px] text-[14px] font-[500] mt-4">
                    Developers get 30% of the gas fee every time someone calls
                    their smart contract
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-5">
            <div className="lg:col-span-3 md:col-span-4 col-span-12">
              <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden rounded-[40px] flex flex-col justify-between">
                <div className="flex justify-end">
                  <img
                    src="https://cdn.multiversx.com/webflow/state-double.webp"
                    alt=""
                    className="bento-home_image-top w-[300px] h-[350px] -mt-[90px] -mr-[180px]"
                  />
                </div>
                <div className="flex justify-center -mt-[100px] pb-[20px]">
                  <div>
                    <div>
                      <h4 className="text-white max-w-[150px] text-[1.5rem] font-[500] mb-4">
                        Adaptive State Sharing
                      </h4>
                    </div>
                    <h4 className="text-[#a3a3a3]  max-w-[153px] text-[14px] font-[500] mt-4">
                      The first to present a viable solution where all three
                      aspects of sharding are live
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-4 col-span-12">
              <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden rounded-[40px] flex flex-col justify-between">
                <div className="flex justify-start">
                  <img
                    src="https://cdn.multiversx.com/webflow/state-double.webp"
                    alt=""
                    className="bento-home_image-top w-[300px] h-[350px] -mt-[90px] -ml-[180px]"
                  />
                </div>
                <div className="flex justify-center -mt-[100px] pb-[20px]">
                  <div>
                    <div>
                      <h4 className="text-white text-right max-w-[150px] text-[1.5rem] font-[500] mb-4">
                        Secure Proof of Stake
                      </h4>
                    </div>
                    <h4 className="text-[#a3a3a3] text-right  max-w-[153px] text-[14px] font-[500] mt-4">
                      Energy-efficient consensus mechanism with provable
                      security guarantees
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-4 col-span-12">
              <div className="reltaive">
                <div
                  className="bg-[#171717] h-[350px] pb-5 overflow-hidden relative rounded-[40px] flex flex-col justify-end bg-no-repeat bg-cover bg-center"
                  //   style={{ backgroundImage: "url('https://cdn.multiversx.com/webflow/wasm.webp')" }}
                >
                  <div className="absolute w-full h-full inset-0 bg-cover">
                    <div
                      style={{
                        //   transform: "rotate(-40deg)", // Rotate the image slightly left
                        transformOrigin: "center",
                        top: "-10%",
                        left: "-50%", // Push the image to the right side
                        position: "absolute", // Ensure it's positioned correctly
                        zIndex: 1, // Ensure the image is behind the gradient
                      }}
                      className="absolute  w-[630px] h-[630px]"
                    >
                      <img
                        src="https://cdn.multiversx.com/webflow/wasm.webp"
                        alt=""
                        loading="eager"
                        className="absolute w-full h-full object-cover"
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 bg-[#0a0a0a]/[20%] "
                      style={{
                        left: "-10%",
                        top: "-70%",
                        zIndex: 2, // Ensure the gradient is above the image
                      }}
                    ></div>
                  </div>
                  <div className=" px-4 py-4 rounded-b-[40px]">
                    <div className="flex justify-center">
                      <h4 className="text-white z-50 text-center max-w-[200px] text-[1.5rem] font-[500] mb-2">
                        WASM-Based Virtual Machine
                      </h4>
                    </div>
                    <div className="flex justify-center">
                      <h4 className="text-[#a3a3a3] z-50 text-center max-w-[145px] text-[14px] font-[500]">
                        Write smart contracts in familiar languages, compile,
                        and run them through the fastest VM in the space
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:hidden block  col-span-12">
              <div className="relative">
                <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden relative rounded-[40px] flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center">
                  <div className="absolute w-full h-full inset-0">
                    <img
                      src="https://cdn.multiversx.com/webflow/sidechains.webp"
                      alt=""
                      loading="eager"
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <div className="-mt-10">
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                      <div className="relative inline-block px-3 rounded-full text-white">
                        <div className="bg-gradient-to-r from-[rgba(0,186,86,0.6)] via-[rgba(0,150,171,0.6)] to-[rgba(201,88,169,0.6)] p-[2px] rounded-full">
                          <div className="bg-[#171717] rounded-full px-4 py-1">
                            Live
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                      <h4 className="text-white text-[51px] font-[500] mb-2">
                        Sovereign Chains
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 lg:block hidden md:col-span-6 col-span-12">
              <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden rounded-[40px] flex flex-col justify-between">
                <div className="flex justify-start px-8 pt-7">
                  <h4 className="text-white  max-w-[130px] text-[1.5rem] font-[500] mt-4">
                    Resilient and Battle-Tested
                  </h4>
                </div>
                <div className="flex justify-end">
                  <img
                    src="https://cdn.multiversx.com/webflow/metal-block.webp"
                    alt=""
                    className="bento-home_image-top w-[260px] h-[260px] -mb-[100px] -mr-[50px]"
                  />
                </div>
              </div>
            </div>
            
          </div>

          <div className="grid grid-cols-12 gap-5 mt-5">
         
            <div className="lg:col-span-3 md:col-span-4 col-span-12">
              <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden rounded-[40px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-center">
                    <h4 className="text-white text-center max-w-[200px] text-[1.5rem] font-[500] mt-4">
                      Fast
                    </h4>
                  </div>
                  <div className="flex justify-center">
                    <h4 className="text-[#a3a3a3] text-center  max-w-[200px] text-[14px] font-[500] mt-4">
                      263,000 transactions per second max recorded
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://cdn.multiversx.com/webflow/fast-visual.webp"
                    alt=""
                    className="bento-home_image-top -mb-14"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:block hidden col-span-12">
              <div className="relative">
                <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden relative rounded-[40px] flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center">
                  <div className="absolute w-full h-full inset-0">
                    <img
                      src="https://cdn.multiversx.com/webflow/sidechains.webp"
                      alt=""
                      loading="eager"
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <div className="-mt-10">
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                      <div className="relative inline-block px-3 rounded-full text-white">
                        <div className="bg-gradient-to-r from-[rgba(0,186,86,0.6)] via-[rgba(0,150,171,0.6)] to-[rgba(201,88,169,0.6)] p-[2px] rounded-full">
                          <div className="bg-[#171717] rounded-full px-4 py-1">
                            Live
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                      <h4 className="text-white text-[51px] font-[500] mb-2">
                        Sovereign Chains
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 lg:hidden block  md:col-span-4 col-span-12">
              <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden rounded-[40px] flex flex-col justify-between">
                <div className="flex justify-start px-8 pt-7">
                  <h4 className="text-white  max-w-[130px] text-[1.5rem] font-[500] mt-4">
                    Resilient and Battle-Tested
                  </h4>
                </div>
                <div className="flex justify-end">
                  <img
                    src="https://cdn.multiversx.com/webflow/metal-block.webp"
                    alt=""
                    className="bento-home_image-top w-[260px] h-[260px] -mb-[100px] -mr-[50px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-4 col-span-12">
              <div className="bg-[#171717] h-[350px] pb-5 overflow-hidden rounded-[40px] flex flex-col justify-between">
                <div className="flex justify-center">
                  <img
                    src="https://cdn.multiversx.com/webflow/validators-2.webp"
                    alt=""
                    className="bento-home_image-top w-full "
                  />
                </div>
                <div>
                  <div className="flex justify-center">
                    <h4 className="text-white text-center text-[1.5rem] font-[500] mb-4">
                      Decentralized
                    </h4>
                  </div>
                  <div className="flex justify-center">
                    <h4 className="text-[#a3a3a3] text-center text-[14px] font-[500] ">
                      3,200+ validator nodes
                    </h4>
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

export default LetsMake;

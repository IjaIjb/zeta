import React, { useEffect } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
const Collaborators = () => {
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
    <div>
      <div className="bg-[#262626] relative overflow-hidden h-full">
        <div className="flex relative overflow-hidden bg-black h-full justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <Navbar />

            <div className="flex items-center overflow-hidden mt-[180px] pb-[150px]">
              <div className="flex flex-col">
                <h4 className="md:text-[55px] text-[37px] text-white leading-[85px] max-w-[700px]">
                The Role of AI in Longevity Prediction and Health Optimization
                </h4>
                <h5 className="text-[#A3A3A3] text-[24px] max-w-[650px]">
                Understanding Telomeres and Their Impact on Aging
                </h5>
                <h5 className="text-[#A3A3A3] text-[24px] max-w-[650px]">
                How Wearables and AI Are Redefining Wellness Management
                </h5>
              </div>
              
              <div
                style={{
                  //   transform: "rotate(-70deg)", // Rotate the image slightly left
                  transformOrigin: "center",
                  //   top: "-180%",
                  right: "-10%", // Push the image to the right side
                  position: "absolute", // Ensure it's positioned correctly
                  zIndex: 1, // Ensure the image is behind the gradient
                }}
                className="absolute w-[750px] h-[750px]"
              >
                <div className="relative overflow-hidden lg:w-[800px] lg:h-[800px] w-[250px] h-[250px] md:w-[600px] md:h-[600px] flex items-center justify-center">
                  {/* Inner Orbit */}
                  <div className="absolute w-full h-full animate-spin-slow">
                    <img
                      src="https://cdn.multiversx.com/webflow/Inner-Orbit.svg"
                      alt="Inner Orbit"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Outer Orbit */}
                  <div className="absolute w-full h-full animate-spin-reverse">
                    <img
                      src="https://cdn.multiversx.com/webflow/Outline-Orbit.svg"
                      alt="Outer Orbit"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Planet */}
                  <img
                    src="https://cdn.multiversx.com/webflow/Planet.webp"
                    alt="Planet"
                    className="lg:w-[600px] md:w-[400px] w-[150px] h-[150px] md:h-[400px] lg:h-[600px] z-10 opacity-80 animate-spin-slow"
                  />

                  {/* Gradient Layers */}
                  <div className="absolute lg:w-[800px] md:w-[600px] md:h-[600px] w-[250px] h-[250px] lg:h-[800px] rounded-full bg-gradient-to-r from-[#4ADE80] to-[#4ADE80] opacity-50 blur-xl"></div>
                  <div className="absolute lg:w-[800px] md:w-[600px] md:h-[600px] w-[250px] h-[250px] lg:h-[800px] rounded-full bg-gradient-to-r from-[#4ADE80] to-[#4ADE80] opacity-30 blur-2xl"></div>
                </div>
              </div>
              {/* Gradient overlay */}
            </div>
          </div>
        </div>


        {/* partner */}
        <div className="flex  h-full justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <div className="">
              <div className="">
                <h4 className="md:text-[38px] mb-7 mt-20 text-white font">
                  Our Partners
                </h4>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="border border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652ce80c184325a05b50d_logo_1.svg"
                      className="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Entangle</h4>
                    <h4 className="text-[#737373] text-[13px]">Messaging...</h4>
                  </div>
                </div>

                <div className="border border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Chainlink"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652cffe1ff665b895c94e_5f760a499b56c47b8fa74fbb_chainlink_logo.svg"
                      className="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Chainlink</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      The Industr-Standard...
                    </h4>
                  </div>
                </div>

                <div className="border border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Inspect"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652c53061e1aff334cc55_logo_inspect.svg"
                      className="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Inspect</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      The Industr-Standard...
                    </h4>
                  </div>
                </div>

                <div className="border  border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Flipside Crypto"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b78958a78fff262112b140_flipside-crypto-logo-vector%201.svg"
                      className=" w-[150px] h-[150px] partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">
                      Flipside Crypto
                    </h4>
                    <h4 className="text-[#737373] text-[13px]">
                      The Industr-Standard...
                    </h4>
                  </div>
                </div>

                <div className="border  border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="BNB Chain"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652c73122289ac2fba741_bnb_chain_full_binance_smart_chain_logo.svg"
                      className="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">BNB Chain</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      A community driven...
                    </h4>
                  </div>
                </div>

                <div className="border  border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="INDODAX"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652d213bba4915a0d8b41_INDODAX.svg"
                      className="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">INDODAX</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      Crypto Exchange...
                    </h4>
                  </div>
                </div>

                <div className="border  border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Chainlink"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652cffe1ff665b895c94e_5f760a499b56c47b8fa74fbb_chainlink_logo.svg"
                      className="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">MoonPay</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      Your Gateway to Web3
                    </h4>
                  </div>
                </div>

                <div className="border border-[#404040] rounded-[12px] h-[250px] p-1  flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="HTX"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652d1a46d9d913c27d6a0_HTX___Leading_Bitcoin_Exchange.svg"
                      className="w-[120px] h-[120px] partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">HTX</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      Leading crypto...
                    </h4>
                  </div>
                </div>

                <div className="border border-[#404040] rounded-[12px] h-[250px] p-2 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Unfinished"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652cca2664d1645d9c36e_image_2_.svg"
                      className="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Unfinished</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      We are vibrant...
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* resource*/}
        <div className="flex  h-full justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <div className="">
              <div className="">
                <h4 className="md:text-[38px] mb-7 mt-20 text-white font">
                  Resources
                </h4>
              </div>
              <div className="grid md:grid-cols-4 gap-3">
                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/6752e4dfd61a1d0efd63c0e1_67486c3405980e7d0a067a87_xMoney%2520FINAL.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Ex-SUI Foundation Managing Director Greg Siourounis
                        Named xMoney Global Co-Founder and CEO to Drive
                        MiCA-Compliant Stablecoin and Payments Program
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/672e0034f70151874b667ac5_From%2520Community%2520Members%2520to%2520On-Chain%2520Stakeholders-2.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Empowering Organizations Through On-Chain Community
                        Governance: PeerMe Builders Spotlight 🛠️
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/6752e5bcd61a1d0efd6475b7_67486c7c7956c5c5367acd7a_RWA%2520Highlights.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        RWA Highlights from xDay Munich
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/6752e5ce2e48a80e6b425f0b_67486cc9f0bffbb45d80f9cd_Beni%2520-%2520Townhall%2520infographics.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Wars mode = Focus Mode
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/66e2f51b945fe536e36c5fe8_Twitter%2520post%2520-%25201080%2520x%25201378.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Truly Open FInance: xExchange V3 is Here
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* blog*/}
        <div className="flex  h-full justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <div className="">
              <div className="">
                <h4 className="md:text-[38px] mb-7 mt-20 text-white font">
                  Blogs
                </h4>
              </div>
              <div className="grid md:grid-cols-4 gap-3">
                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/6752e4dfd61a1d0efd63c0e1_67486c3405980e7d0a067a87_xMoney%2520FINAL.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Ex-SUI Foundation Managing Director Greg Siourounis
                        Named xMoney Global Co-Founder and CEO to Drive
                        MiCA-Compliant Stablecoin and Payments Program
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/672e0034f70151874b667ac5_From%2520Community%2520Members%2520to%2520On-Chain%2520Stakeholders-2.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Empowering Organizations Through On-Chain Community
                        Governance: PeerMe Builders Spotlight 🛠️
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/6752e5bcd61a1d0efd6475b7_67486c7c7956c5c5367acd7a_RWA%2520Highlights.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        RWA Highlights from xDay Munich
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/6752e5ce2e48a80e6b425f0b_67486cc9f0bffbb45d80f9cd_Beni%2520-%2520Townhall%2520infographics.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Wars mode = Focus Mode
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/66e2f51b945fe536e36c5fe8_Twitter%2520post%2520-%25201080%2520x%25201378.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Truly Open FInance: xExchange V3 is Here
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* white papers */}
<div className="flex justify-center mt-10">
        <div className="max-w-[2000px] h-full md:px-14 px-4 w-full ">
          <div className="relative">
            {/* Custom Arrow Buttons Positioned in Front of the Heading */}
            <div className="flex justify-between items-center mb-5">
              <div className="">
              <h4 className="md:text-[38px]  text-white font">
                  White Papers
                  </h4>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#171717] rounded-[13px] flex justify-center text-center items-center h-[100px] p-1">
                <h5 className="text-white text-center max-w-[460px] text-[20px]">Biomarkers of Aging: Insights and Applications in Predictive Health</h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-center max-w-[460px] text-[20px]">Leveraging AI for Personalized Longevity and Disease Prevention</h5>
              </div>

         
            </div>
          </div>
        </div>
      </div>


        <Footer />
      </div>
    </div>
  );
};

export default Collaborators;

import React from "react";

const FutureProof = () => {
  return (
    <div className="p-1 mt-10">
      <div className="bg-[#080808] rounded-[20px]">
        <div className="flex justify-center">
          <div className="relative">
            {/* Rotating Planet and Orbits */}
            <div className="relative lg:w-[800px] lg:h-[800px] w-[250px] h-[250px] md:w-[600px] md:h-[600px] flex items-center justify-center">
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

            {/* Stationary Content */}
            <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center">
              <h4 className="text-white md:text-[75px] text-[40px] leading-[45px] md:leading-[75px] max-w-[450px] mb-4">
                Future-Proof in Every Way
              </h4>
              <p className="text-white text-[16px] md:text-[20px] max-w-[590px] mbb-4 md:mb-8">
                MultiversX is leading the way towards a more responsible and
                sustainable infrastructure for all digital things.
              </p>
              <div className="flex items-center gap-2 bg-[#4ADE80] rounded-[12px] py-3 px-3 md:px-6 text-black font-medium cursor-pointer">
                Learn about Sustainability
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.6719 8.79688L17.2969 15.1719C16.8281 15.6406 16.125 15.6406 15.7031 15.1719C15.2344 14.75 15.2344 14.0469 15.7031 13.5781L20.1562 9.125H1.125C0.46875 9.125 0 8.65625 0 8C0 7.39062 0.46875 6.875 1.125 6.875H20.1562L15.7031 2.42188C15.2344 2 15.2344 1.29688 15.7031 0.828125C16.125 0.40625 16.8281 0.40625 17.2969 0.828125L23.6719 7.25C24.0938 7.67188 24.0938 8.375 23.6719 8.79688Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureProof;

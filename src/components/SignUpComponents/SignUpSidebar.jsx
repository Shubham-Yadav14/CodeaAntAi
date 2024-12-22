import React from "react";
import fadedLogo from "../../utils/logoFaded.png";
import smallLogo from "../../utils/logo.svg";
import pie from "../../utils/pie.svg";
import arrow from "../../utils/arrow.svg";

function SignUpSidebar() {
  const stats = [
    { value: "30+", label: "Language Support" },
    { value: "10K+", label: "Developers" },
    { value: "100K+", label: "Hours Saved" },
  ];

  return (
    <div className="font-inter max-lg:hidden">
      <img
        src={fadedLogo}
        alt="Background Logo"
        className="fixed bottom-0 left-0 max-xl:w-[22vw]"
      />
      <div className="flex h-screen items-center justify-center flex-col">
        <div
          className="flex flex-col rounded-3xl w-[447px] h-[170px] max-xl:w-[35vw] max-xl:h-[14vw]"
          style={{ boxShadow: "0px 0px 24px 0px rgba(8, 23, 53, 0.16)" }}
        >
          <div className="flex items-center mt-[21px] ml-[22px] mb-[22px] text-[18px] leading-[27px] font-bold text-[#081735] max-xl:text-[1.4vw] max-xl:mt-[1.7vw] max-xl:mb-[1.7vw] max-xl:ml-[1.7vw]">
            <img src={smallLogo} alt="Small Logo" className="inline mr-[8px]" />
            AI to Detect & Autofix Bad Code
          </div>
          <hr className="h-[1px] text-[#E6E8F0]" />
          <div className="flex mt-[22.5px] justify-evenly max-xl:mt-[1.7vw]">
            {stats.map(({ value, label }) => (
              <div key={label} className="w-[123px] h-[47px] text-center">
                <div className="text-[18px] font-bold leading-[27px] text-[#081735] max-xl:text-[1.4vw]">
                  {value}
                </div>
                <div className="text-[14px] leading-[20px] text-[#171717] max-xl:text-[1.1vw]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-[265px] h-[164px] rounded-[24px] relative -top-[12px] left-[113px] bg-white max-xl:w-[21vw] max-xl:h-[12vw]"
          style={{ boxShadow: "0px 0px 24px 0px rgba(8, 23, 53, 0.16)" }}
        >
          <div className="flex items-center mt-[15.21px] ml-[31.83px] mb-[16.2px] max-xl:mt-[1vw] max-xl:mb-[1vw] max-xl:ml-[2.4vw]">
            <div className="flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#9D90FA40] max-xl:w-[4vw] max-xl:h-[4vw]">
              <img src={pie} alt="Pie Chart" />
            </div>
            <div className="ml-[83px] max-xl:ml-[5.7vw]">
              <div className="flex items-center">
                <img src={arrow} alt="Arrow" className="inline" />
                <span className="text-[14px] leading-[20px] font-bold text-[#0049C6]">
                  14%
                </span>
              </div>
              <div className="text-[12px] leading-[16px]">This week</div>
            </div>
          </div>
          <div className="ml-[33.83px] text-[14px] font-bold text-[#171717] max-xl:text-[1vw] max-xl:ml-[2.4vw]">
            Issues Fixed
          </div>
          <div className="ml-[33.83px] text-[32px] font-bold max-xl:text-[2vw] max-xl:ml-[2.4vw]">
            500K+
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSidebar;


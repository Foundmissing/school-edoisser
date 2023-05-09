import React from "react";
import terminal from "../assets/terminal.png";

const Developers = () => {
  return (
    <div className="text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex items-center">
        <div>
          <h2 className="text-3xl pb-2 font-bold">Join Our DeFi Community</h2>
          <p>
            Checkout the <span className="text-[#00d8ff]">documentation</span>,
            the <span className="text-[#00d8ff]">quick start</span> or a guide
            below to integrate your project with thousands of tokens and
            billions of liquidity.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end w-full py-16">
          <img
            src={terminal}
            alt="img"
            className="max-w-[250px] shadow-lg shadow-cyan-500/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;

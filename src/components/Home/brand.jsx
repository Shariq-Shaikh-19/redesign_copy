import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Brand() {
  const navigate = useNavigate();

  const brands = [
    {
      name: "Ecomagix",
      path: "/ecomagix",
      description: "Manage Ecomagix content",
    },
    {
      name: "Claymagix",
      path: "/claymagix",
      description: "Manage Claymagix content",
    },
    {
      name: "Woodmagix",
      path: "/woodmagix",
      description: "Manage Woodmagix content",
    },
    {
      name: "Skyace",
      path: "/skyace",
      description: "Manage Skyace content",
    },
  ];

  return (
    <div className="w-full md:ml-[15%] md:w-[85%] min-h-screen px-5 md:px-7 pt-24 pb-10 bg-[#F3F4FA] text-slate-800">

      {/* Page Heading */}
      <div className="mb-7">
        <h1 className="text-2xl md:text-3xl font-bold text-[#252044]">
          Brand Management
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Select a brand to manage its content and details.
        </p>
      </div>

      {/* Brand Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {brands.map((brand, index) => (
          <button
            key={brand.path}
            type="button"
            onClick={() => navigate(brand.path)}
            className="group w-full text-left bg-white border border-[#E5E3F0] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-violet-300 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
          >
            {/* Card Top */}
            <div className="flex items-center justify-between mb-10">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-violet-100 text-violet-700 font-bold text-lg">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="w-9 h-9 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                <FaArrowRight size={13} />
              </span>
            </div>

            {/* Card Content */}
            <h2 className="text-xl font-bold text-[#30265C] group-hover:text-violet-600 transition-colors">
              {brand.name}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              {brand.description}
            </p>

            {/* Bottom Accent */}
            <div className="w-10 h-1 bg-violet-400 rounded-full mt-6 group-hover:w-full transition-all duration-300" />
          </button>
        ))}

      </div>
    </div>
  );
}
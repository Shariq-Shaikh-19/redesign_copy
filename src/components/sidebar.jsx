import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import { LiaBlogSolid } from "react-icons/lia";
// import { Link } from "react-router-dom";
import { SiReactivex } from "react-icons/si";
import { TbBrandSafari } from "react-icons/tb";
import { MdOutlineEventSeat } from "react-icons/md";
import { AiOutlineFontSize } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import InfiniaLogo from "../assets/InfiniaLogo.png";

export default function Sidebar() {
  const menuItems = [
    { name: "DASHBOARD", path: "/", icon: RiDashboardFill },
    { name: "HOME", path: "/home", icon: IoHome },
    { name: "BLOG", path: "/blog", icon: LiaBlogSolid },
    { name: "ABOUT", path: "/about", icon: SiReactivex },
    { name: "BRAND", path: "/brand", icon: TbBrandSafari },
    { name: "EVENTS", path: "/event", icon: MdOutlineEventSeat },
    {
      name: "PRODUCTS",
      path: "/product",
      icon: MdProductionQuantityLimits,
    },
  ];

  return (
    <div className="fixed top-20 pt-3 left-0 w-[15%] min-h-screen bg-linear-to-b from-[#101e3d]  via-[#111e3c] to-[#182650] shadow-xl  overflow-hidden z-30 border-r border-white/5">
      {/* Navigation */}
      <div className="px-5 mt-4 flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({
                isActive,
              }) => `flex items-center gap-3 px-3 py-3  rounded-xl text-sm font-semibold transition-all duration-300
                 ${
                   isActive
                     ? "bg-linear-to-r from-[#1e00ff] to-[#bb00ff] text-white shadow-lg"
                     : "text-gray-200 hover:bg-white/10 hover:text-white"
                 }`}
            >
              <Icon className="text-xl shrink-0" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

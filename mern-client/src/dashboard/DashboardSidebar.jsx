import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiChartPie,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
  HiOutlineCloudUpload
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { icon: HiChartPie, label: "Dashboard", path:"/admin/dashboard" },
    { icon: HiOutlineCloudUpload, label: "Uploadbooks", path:"/admin/dashboard/upload" },
    { icon: HiInbox, label: "Managebooks" , path:"/admin/dashboard/manage" },
    { icon: HiUser, label: "Users" },
    { icon: HiShoppingBag, label: "Products" },
    { icon: HiArrowSmRight, label: "Sign In", path:"/sign-up" },
    { icon: HiTable, label: "Log out" , path:"/logout" },
    { icon: BiBuoy, label: "Help" }
  ];

  return (
    <div className={`bg-blue-700 text-white min-h-screen transition-all duration-300 ${isOpen ? "w-64" : "w-16"} relative`}>
      
      {/* Toggle button — always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-4 text-white focus:outline-none z-10"
        title={isOpen ? "Collapse" : "Expand"}
      >
        ☰
      </button>

      {/* Brand (only when open) */}
      <div className={`pt-4 px-4 mb-8 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-xl font-bold">Epic-Book</h2>
      </div>

      {/* Navigation links */}
      <ul className="space-y-4 px-2">
  {navItems.map((item, index) => (
    <li key={index}>
      <NavLink
        to={item.path || "#"}
        className={({ isActive }) =>
          `flex items-center space-x-3 hover:bg-blue-600 p-2 rounded transition-all ${
            isActive ? "bg-blue-600 font-semibold" : ""
          }`
        }
      >
        <item.icon size={20} />
        {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
      </NavLink>
    </li>
  ))}
</ul>

    </div>
  );
};

export default DashboardSidebar;

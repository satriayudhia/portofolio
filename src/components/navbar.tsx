import React from "react";
import MenuCard from "@/components/menuCard";

const Navbar = () => {
  return (
    <div className="bg-white rounded-2xl p-[30px] flex gap-4 w-fit ml-auto mb-10">
      <MenuCard />
    </div>
  );
};

export default Navbar;

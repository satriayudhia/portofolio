import React, { useState } from "react";
import {
  FaRegUser,
  FaRegFileLines,
  FaBriefcase,
  FaAddressBook,
} from "react-icons/fa6";
import { useRouter } from "next/router";

const MenuCard = () => {
  const [hovered, setHovered] = useState<null | number>(null);
  const { push, pathname } = useRouter();

  const menu = [
    {
      id: 1,
      name: "About",
      pathname: "/about",
      render: () => (
        <FaRegUser
          size={24}
          color={
            hovered === 1 || pathname === "/about" || pathname === "/"
              ? "#fff"
              : "#000"
          }
          className="mb-[10px]"
        />
      ),
      onClick: () => push("/about"),
    },
    {
      id: 2,
      name: "Resume",
      pathname: "/resume",
      render: () => (
        <FaRegFileLines
          size={24}
          color={hovered === 2 || pathname === "/resume" ? "#fff" : "#000"}
          className="mb-[10px]"
        />
      ),
      onClick: () => push("/resume"),
    },
    {
      id: 3,
      name: "Works",
      pathname: "/works",
      render: () => (
        <FaBriefcase
          size={24}
          color={hovered === 3 || pathname === "/works" ? "#fff" : "#000"}
          className="mb-[10px]"
        />
      ),
      onClick: () => push("/works"),
    },
    {
      id: 4,
      name: "Blogs",
      pathname: "/blogs",
      render: () => (
        <FaRegUser
          size={24}
          color={hovered === 4 || pathname === "/blogs" ? "#fff" : "#000"}
          className="mb-[10px]"
        />
      ),
      onClick: () => push("/blogs"),
    },
    {
      id: 5,
      name: "Contact",
      pathname: "/contact",
      render: () => (
        <FaAddressBook
          size={24}
          color={hovered === 5 || pathname === "/contact" ? "#fff" : "#000"}
          className="mb-[10px]"
        />
      ),
      onClick: () => push("/contact"),
    },
  ];

  return (
    <>
      {menu.map((item) => (
        <div
          key={`menu-${item.id}`}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
          className={`bg-slate-100 w-[84px] h-[84px] rounded-xl flex flex-col justify-center items-center cursor-pointer ${
            hovered === item.id ||
            pathname === item.pathname ||
            (pathname === "/" && item.pathname === "/about")
              ? "bg-gradient-primary"
              : ""
          } `}
          onClick={item.onClick}
        >
          {item.render()}

          <div
            className={`text-sm font-semibold ${
              hovered === item.id ||
              pathname === item.pathname ||
              (pathname === "/" && item.pathname === "/about")
                ? "text-white"
                : "text-black"
            } `}
          >
            {item.name}
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuCard;

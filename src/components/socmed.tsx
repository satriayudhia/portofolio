import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Socmed = () => {
  const [hovered, setHovered] = useState<null | number>(null);

  const socmed = [
    {
      id: 1,
      name: "facebook",
      render: () =>
        hovered === 1 ? <FaFacebookF color="#fff" /> : <FaFacebookF />,
      link: "https://facebook.com",
    },
    {
      id: 2,
      name: "instagram",
      render: () =>
        hovered === 2 ? <FaInstagram color="#fff" /> : <FaInstagram />,
      link: "https://instagram.com",
    },
    {
      id: 3,
      name: "linkedin",
      render: () =>
        hovered === 3 ? <FaLinkedinIn color="#fff" /> : <FaLinkedinIn />,
      link: "https://linkedin.com",
    },
    {
      id: 4,
      name: "twitter",
      render: () =>
        hovered === 4 ? <FaXTwitter color="#fff" /> : <FaXTwitter />,
      link: "https://x.com",
    },
  ];

  return (
    <>
      {socmed.map((item) => (
        <div
          key={item.id}
          onClick={() => window.open(item.link, "_blank")}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
          className={`flex justify-center items-center bg-slate-100 w-[40px] h-[40px] rounded-md cursor-pointer ${
            hovered === item.id ? "bg-gradient-primary" : ""
          }`}
        >
          {item.render()}
        </div>
      ))}
    </>
  );
};

export default Socmed;

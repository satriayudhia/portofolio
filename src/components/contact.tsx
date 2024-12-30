import React, { useState } from "react";
import {
  FaMobileScreen,
  FaRegEnvelope,
  FaLocationDot,
  FaCalendarDays,
} from "react-icons/fa6";

const Contact = () => {
  const [hovered, setHovered] = useState<null | number>(null);

  const contacts = [
    {
      id: 1,
      name: "Phone",
      value: "+62 8977 585 663",
      render: () =>
        hovered === 1 ? (
          <FaMobileScreen color="#fff" />
        ) : (
          <FaMobileScreen color="#E93B81" />
        ),
      link: "https://x.com",
      canRedirect: true,
    },
    {
      id: 2,
      name: "Email",
      value: "satria.yudhiap@gmail.com",
      render: () =>
        hovered === 2 ? (
          <FaRegEnvelope color="#fff" />
        ) : (
          <FaRegEnvelope color="#E93B81" />
        ),
      link: "https://gmail.com",
      canRedirect: true,
    },
    {
      id: 3,
      name: "Location",
      value: "Jakarta",
      render: () =>
        hovered === 3 ? (
          <FaLocationDot color="#fff" />
        ) : (
          <FaLocationDot color="#E93B81" />
        ),
      link: "https://gmail.com",
      canRedirect: true,
    },
    {
      id: 4,
      name: "Birthday",
      value: "16 April 1994",
      render: () =>
        hovered === 4 ? (
          <FaCalendarDays color="#fff" />
        ) : (
          <FaCalendarDays color="#E93B81" />
        ),
      link: "https://gmail.com",
      canRedirect: true,
    },
  ];

  return (
    <div className="py-5 px-4 rounded-2xl bg-slate-100 grid grid-cols-1 divide-y mb-8">
      {contacts.map((item) => (
        <div key={item.id} className="py-[10px]">
          <div className="flex items-center text-black gap-3">
            <div
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`w-[35px] h-[35px] shadow-md bg-white rounded-md flex items-center justify-center cursor-pointer ${
                hovered === item.id ? "bg-gradient-primary" : ""
              }`}
            >
              {item.render()}
            </div>
            <div>
              <div className="text-xs mb-[3px]">{item.name}</div>
              <div className="text-sm">{item.value}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;

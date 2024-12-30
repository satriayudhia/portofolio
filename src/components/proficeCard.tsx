import React from "react";
import Image from "next/image";
import profPic from "@/assets/profpic.jpg";
import Socmed from "@/components/socmed";
import Contact from "@/components/contact";
import { FaDownload } from "react-icons/fa6";
import { robotoSlab } from "@/configs/fonts";

const ProfileCard = () => {
  return (
    <div className="w-full h-fit px-[15px] py-[30px] bg-white rounded-[20px]">
      {/* <img
        src={profPic.src}
        alt="profpic"
        className="mx-auto rounded-[20px] mb-[21px] max-w-[210px] max-h-[]"
      /> */}

      <Image
        src={profPic}
        width={210}
        height={210}
        alt="profpic"
        className="mx-auto rounded-[20px] mb-[21px]"
        priority
        placeholder="blur"
        loading="eager"
      />

      <div
        className={`${robotoSlab.className} text-xl font-medium mx-auto text-black text-center mb-2`}
      >
        Satria Yudhia Putra
      </div>

      <div className="py-1 px-5 rounded-md text-center text-sm text-black font-semibold bg-slate-100 w-fit mx-auto leading-7 mb-4">
        Frontend Developer
      </div>

      <div className="max-w-[230px] mx-auto mb-8">
        <div className="flex justify-around text-black">
          <Socmed />
        </div>
      </div>

      <Contact />

      <div className="flex items-center justify-center gap-2 bg-gradient-primary text-white text-lg rounded-[10px] py-3 px-8 w-fit mx-auto cursor-pointer transition duration-300 hover:-translate-y-[2px]">
        <FaDownload /> Download CV
      </div>
    </div>
  );
};

export default ProfileCard;

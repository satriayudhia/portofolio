import React from "react";
import Slider from "react-slick";
import Antam from "@/assets/antam.png";
import UC from "@/assets/uc.png";
import Monster from "@/assets/monster.png";
import Mashida from "@/assets/mashida.png";
import NobuBank from "@/assets/nobu.png";
import Doss from "@/assets/doss.png";
import Image from "next/image";

function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container text-black">
      <Slider {...settings}>
        <div className="!flex items-center h-[100px] px-5 grayscale hover:grayscale-0">
          <Image
            src={Antam}
            width={100}
            height={100}
            alt="antam"
            priority={false}
            placeholder="blur"
            loading="lazy"
            title="Antam"
          />
        </div>
        <div className="!flex items-center h-[100px] px-5 grayscale hover:grayscale-0">
          <Image
            src={UC}
            width={100}
            height={100}
            alt="universitas ciputra"
            priority={false}
            placeholder="blur"
            loading="lazy"
            title="Universitas Ciputra"
          />
        </div>
        <div className="!flex items-center h-[100px] px-5 grayscale hover:grayscale-0">
          <Image
            src={Monster}
            width={100}
            height={100}
            alt="monsterAR"
            priority={false}
            placeholder="blur"
            loading="lazy"
            title="MonsterAR"
          />
        </div>
        <div className="!flex items-center h-[100px] px-5 grayscale hover:grayscale-0">
          <Image
            src={Mashida}
            width={100}
            height={100}
            alt="mashida"
            priority={false}
            placeholder="blur"
            loading="lazy"
            title="Mashida"
          />
        </div>
        <div className="!flex items-center h-[100px] px-5 grayscale hover:grayscale-0">
          <Image
            src={NobuBank}
            width={100}
            height={100}
            alt="Nobu Bank"
            priority={false}
            placeholder="blur"
            loading="lazy"
            title="Nobu Bank"
          />
        </div>
        <div className="!flex items-center h-[100px] px-5 grayscale hover:grayscale-0">
          <Image
            src={Doss}
            width={100}
            height={100}
            alt="DOSS"
            priority={false}
            placeholder="blur"
            loading="lazy"
            title="DOSS Camera & Gadget"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Clients;

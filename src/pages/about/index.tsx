import React from "react";
import Title from "@/components/title";
import { poppins } from "@/configs/fonts";
import { FaCode } from "react-icons/fa6";
import Clients from "@/components/clients";
import Footer from "@/components/footer";

const About = () => {
  const aboutList = [
    {
      id: 1,
      icon: () => <FaCode size="40" color="#1b74e4" />,
      title: "Web Development",
      description:
        "Providing the bussiness needed with web platform. Web created using javascript framework like ReactJS, VueJS, NextJS and NuxtJS.",
      class: "bg-red-50",
    },
    {
      id: 2,
      icon: () => <FaCode size="40" color="#1b74e4" />,
      title: "App Development",
      description:
        "Providing the bussiness needed with mobile apps platform. Web created using javascript framework React Native",
      class: "bg-sky-50",
    },
    {
      id: 3,
      icon: () => <FaCode size="40" color="#1b74e4" />,
      title: "SEO Optimization",
      description:
        "Making sure the website is crawled in google search by optimizing standarized html for web application.",
      class: "bg-sky-50",
    },
    {
      id: 4,
      icon: () => <FaCode size="40" color="#1b74e4" />,
      title: "Web Optimization",
      description:
        "Making sure the website is fast by optimizing standarized html for web application.",
      class: "bg-red-50",
    },
  ];

  return (
    <div className="bg-white overflow-hidden rounded-[20px]">
      <div className="p-[60px]">
        <Title title="About" />

        <div className={`${poppins.className} text-black`}>
          <p className="mb-4">
            Adaptive person, reliable to given task to complete based on target.
            Solutive and can work under pressure. Pursuing role where hard work
            and dedication will be highly valued.
          </p>

          <h2 className="text-2xl font-medium mb-[30px]">What I Do!</h2>

          <div className="grid grid-cols-2 gap-7">
            {aboutList.map((item) => (
              <div
                key={`about-${item.id}`}
                className={`${item.class} p-5 rounded-xl flex items-start gap-5`}
              >
                <div className="min-w-[40px] w-[40px] h-[40px]">
                  {item.icon()}
                </div>

                <div>
                  <h3 className="text-[22px] mb-[10px] font-medium">
                    {item.title}
                  </h3>
                  <p className="leading-7">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-[60px]">
        <h3 className="text-center text-2xl font-medium text-black mb-[50px]">
          Client
        </h3>

        <Clients />
      </div>

      <Footer />
    </div>
  );
};

export default About;

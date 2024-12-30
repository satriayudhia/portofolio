import Title from "@/components/title";
import React from "react";
import { poppins } from "@/configs/fonts";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaSchoolFlag,
} from "react-icons/fa6";
import Footer from "@/components/footer";

const Resume = () => {
  const educations = [
    {
      id: 1,
      class: "bg-red-50",
      render: () => (
        <>
          <span className="mb-[9px] text-sm font-normal">2012-2017</span>
          <h3 className="text-lg mb-1 font-normal">
            Bachelor Degree of <strong>Mechanical Engineering</strong>
          </h3>
          <p className="text-base font-normal">
            University of Muhammadiyah Malang
          </p>
        </>
      ),
    },
    {
      id: 2,
      class: "bg-sky-50",
      render: () => (
        <>
          <span className="mb-[9px] text-sm font-normal">2009-2012</span>
          <h3 className="text-lg mb-1 font-normal">
            <strong>Software Engineering</strong>
          </h3>
          <p className="text-base font-normal">SMKN 11 Bandung</p>
        </>
      ),
    },
  ];

  const experiences = [
    {
      id: 1,
      class: "bg-sky-50",
      render: () => (
        <>
          <span className="mb-[9px] text-sm font-normal">2023-present</span>
          <h3 className="text-lg mb-1 font-normal">
            <strong>Frontend Developer</strong>
          </h3>
          <p className="text-base font-normal">PT. Infosys Solusi Terpadu</p>
        </>
      ),
    },
    {
      id: 2,
      class: "bg-red-50",
      render: () => (
        <>
          <span className="mb-[9px] text-sm font-normal">
            June &apos;23-Oct &apos;23
          </span>
          <h3 className="text-lg mb-1 font-normal">
            <strong>Frontend Web Developer</strong>
          </h3>
          <p className="text-base font-normal">MonsterAR</p>
        </>
      ),
    },
    {
      id: 3,
      class: "bg-sky-50",
      render: () => (
        <>
          <span className="mb-[9px] text-sm font-normal">2021-2024</span>
          <h3 className="text-lg mb-1 font-normal">
            <strong>Frontend Web Developer</strong>
          </h3>
          <p className="text-base font-normal">PT. Capio Teknologi Indonesia</p>
        </>
      ),
    },
    {
      id: 4,
      class: "bg-red-50",
      render: () => (
        <>
          <span className="mb-[9px] text-sm font-normal">2021-2023</span>
          <h3 className="text-lg mb-1 font-normal">
            <strong>Frontend Developer</strong>
          </h3>
          <p className="text-base font-normal">PT. Global Sukses Digital</p>
        </>
      ),
    },
  ];

  const certificates = [
    {
      id: 2,
      class: "bg-red-50",
      render: () => (
        <>
          <span className="mb-[9px] text-sm font-normal">11 July 2020</span>
          <h3 className="text-lg mb-1 font-normal">
            <strong>Belajar Membuat Aplikasi Android untuk Pemula</strong>
          </h3>
          <p className="text-base font-normal">Dicoding Indonesia</p>
        </>
      ),
    },
    {
      id: 3,
      class: "bg-sky-50",
      render: () => (
        <>
          <span className="mb-[9px] text-sm font-normal">28 June 2020</span>
          <h3 className="text-lg mb-1 font-normal">
            <strong>Memulai Pemrograman Dengan Kotlin</strong>
          </h3>
          <p className="text-base font-normal">Dicoding Indonesia</p>
        </>
      ),
    },
    {
      id: 4,
      class: "bg-red-50",
      render: () => (
        <>
          <span className="mb-[9px] text-sm font-normal">13 June 2020</span>
          <h3 className="text-lg mb-1 font-normal">
            <strong>Belajar Dasar Pemrograman Web</strong>
          </h3>
          <p className="text-base font-normal">Dicoding Indonesia</p>
        </>
      ),
    },
  ];

  const bootcamps = [
    {
      id: 1,
      class: "bg-sky-50",
      render: () => (
        <>
          <span className="mb-[9px] text-sm font-normal">2020-2021</span>
          <h3 className="text-lg mb-1 font-normal">
            <strong>Fullstack Developer</strong>
          </h3>
          <p className="text-base font-normal">Dumbways Indonesia</p>
        </>
      ),
    },
  ];

  const workingSkills = [
    {
      id: 1,
      name: "ReactJS",
      value: 80,
      color: "#29D4FE",
    },
    {
      id: 2,
      name: "NextJS",
      value: 80,
      color: "#080808",
    },
    {
      id: 3,
      name: "VueJS",
      value: 90,
      color: "#48BA87",
    },
    {
      id: 4,
      name: "NuxtJS",
      value: 85,
      color: "#354E63",
    },
    {
      id: 5,
      name: "Javascript",
      value: 85,
      color: "#F0DC56",
    },
    {
      id: 6,
      name: "Typescript",
      value: 75,
      color: "#387BC8",
    },
  ];
  return (
    <div className="bg-white overflow-hidden rounded-[20px]">
      <div className="p-[60px]">
        <Title title="Resume" />

        <div className={`${poppins.className} text-black`}>
          <div className="grid grid-cols-2 gap-7">
            <div>
              <div className="flex gap-[6px] items-center mb-5">
                <div className="w-[40px] h-[40px]">
                  <FaGraduationCap color="#dd2476" size={40} />
                </div>

                <h4 className="text-2xl font-medium">Education</h4>
              </div>

              <div className="grid grid-rows-2 grid-flow-col gap-4">
                {educations.map((item) => (
                  <div
                    key={`education-${item.id}`}
                    className={`${item.class} p-5 rounded-xl`}
                  >
                    {item.render()}
                  </div>
                ))}
              </div>

              <div className="flex gap-[6px] items-center mb-5 mt-10">
                <div className="w-[40px] h-[40px]">
                  <FaCertificate color="#dd2476" size={40} />
                </div>

                <h4 className="text-2xl font-medium">Certificate</h4>
              </div>

              <div className="grid grid-rows-3 grid-flow-col gap-4">
                {certificates.map((item) => (
                  <div
                    key={`certificate-${item.id}`}
                    className={`${item.class} p-5 rounded-xl`}
                  >
                    {item.render()}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex gap-[6px] items-center mb-5">
                <div className="w-[40px] h-[40px]">
                  <FaBriefcase color="#dd2476" size={40} />
                </div>

                <h4 className="text-2xl font-medium">Experience</h4>
              </div>

              <div className="grid grid-rows-4 grid-flow-col gap-4">
                {experiences.map((item) => (
                  <div
                    key={`education-${item.id}`}
                    className={`${item.class} p-5 rounded-xl`}
                  >
                    {item.render()}
                  </div>
                ))}
              </div>

              <div className="flex gap-[6px] items-center mb-5 mt-10">
                <div className="w-[40px] h-[40px]">
                  <FaSchoolFlag color="#dd2476" size={40} />
                </div>

                <h4 className="text-2xl font-medium">Bootcamp</h4>
              </div>

              <div className="grid grid-rows-1 grid-flow-col gap-4">
                {bootcamps.map((item) => (
                  <div
                    key={`bootcamp-${item.id}`}
                    className={`${item.class} p-5 rounded-xl`}
                  >
                    {item.render()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-[60px]">
        <div className="grid grid-cols-2 gap-6 text-black">
          <div>
            <h4 className="text-2xl font-medium mb-5">Working Skills</h4>

            {workingSkills.map((item) => (
              <div key={`working-${item.id}`} className="mb-[30px]">
                <div className="flex items-center justify-between mb-[7px]">
                  <span>{item.name}</span>
                  <span>{item.value}%</span>
                </div>

                <div className="relative h-[6px] w-full bg-slate-100 rounded-md">
                  <div
                    style={{
                      width: `${item.value}%`,
                      background: item.color,
                    }}
                    className={`absolute left-0 top-0 h-[6px] rounded-md`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-5">Knowledges</h4>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resume;

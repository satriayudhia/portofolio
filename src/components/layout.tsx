import { Providers } from "@/configs/providers";
import ProfileCard from "@/components/proficeCard";
import Navbar from "@/components/navbar";
import Image from "next/image";
import bgLight from "@/assets/bg-light.jpg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="h-auto w-screen relative">
        {/* <img
          src={bgLight.src}
          alt="bg-light"
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            zIndex: "-10",
          }}
        /> */}
        <Image
          src={bgLight}
          alt="bg-light"
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            zIndex: "-10",
          }}
        />
        <div className="py-8 max-w-[1140px] relative mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <ProfileCard />
            <div className="col-span-2">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </div>
    </Providers>
  );
}

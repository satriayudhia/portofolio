import { FC } from "react";
import { robotoSlab } from "@/configs/fonts";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-4">
      <h1
        className={`${robotoSlab.className} text-4xl font-bold mb-4 text-black`}
      >
        {title}
      </h1>

      <div className="bg-[#dd2476] w-[200px] h-[3px] after:rounded-md mb-4" />
    </div>
  );
};

export default Title;

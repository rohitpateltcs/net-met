import Image from "next/image";
import React from "react";

const HeaderUpSection = () => {
  return (
    <div className="flex justify-between py-1">
      <div className="">
        <Image
          src="data:image/png;base64,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"
          alt=""
          width={80}
          height={80}
          className="animate-bounce cursor-pointer"
        />
      </div>
      <div className="h-10 w-10 cursor-pointer">
        <img
          src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s="
          alt=""
          className="w-full h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default HeaderUpSection;

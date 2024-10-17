import React from "react";
import instagramWords from "../../public/Instagram-words.svg";
import likeIcon from "../../public/like_icon.svg";
import sendIcon from "../../public/send_icon.svg";
import Image from "next/image";

function Header() {
  return (
    <div className="fixed z-10 top-0 bg-black left-0 right-0 border-b-[0.5px] p-1 flex justify-between items-center">
      <div className="flex flex-col items-center">
        <Image
          src={instagramWords}
          alt="instagram Words"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center">
          <Image src={likeIcon} alt="search" width={24} height={24} />
        </div>
        <div className="flex flex-col items-center">
          <Image src={sendIcon} alt="search" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}

export default Header;

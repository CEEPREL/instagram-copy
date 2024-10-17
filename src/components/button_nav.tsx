import React from "react";
import Image, { StaticImageData } from "next/image";

interface NavItem {
  id?: number;
  icon: StaticImageData;
  alt: string;
  onClick?: () => void;
}

interface ButtonNavProps {
  navItems: NavItem[];
}

const ButtonNav: React.FC<ButtonNavProps> = ({ navItems }) => {
  return (
    <div className="md:hidden flex justify-center items-center h-screen">
      <div className="fixed bottom-0 left-0 right-0 border-t-[0.5px] p-2 bg-black flex justify-around items-center">
        {navItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <button onClick={item.onClick}>
              <Image src={item.icon} alt={item.alt} width={24} height={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonNav;

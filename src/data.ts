import homeIcon from "../public/home.svg";
import searchIcon from "../public/search.svg";
import reelIcon from "../public/reel.svg";
import messageIcon from "../public/add-post-icon.svg";
import profileIcon from "../public/profile-icon.svg";
import { StaticImageData } from "next/image";

interface NavItem {
  id?: number;
  label?: string;
  icon: StaticImageData;
  alt: string;
  onClick?: () => void;
}

interface ButtonNavProps {
  navItems: NavItem[];
}

const navItemsData: NavItem[] = [
  {
    id: 1,
    label: "Home",
    icon: homeIcon,
    alt: "Home Icon",
  },
  {
    id: 2,
    label: "Search",
    icon: searchIcon,
    alt: "Search Icon",
  },
  {
    id: 3,
    label: "Messages",
    icon: messageIcon,
    alt: "Messages Icon",
  },
  {
    id: 4,
    label: "Reels",
    icon: reelIcon,
    alt: "Reels Icon",
  },
  {
    id: 5,
    label: "Profile",
    icon: profileIcon,
    alt: "Profile Icon",
  },
];
export { navItemsData };

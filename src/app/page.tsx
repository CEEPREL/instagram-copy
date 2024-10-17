import React from "react";
import ButtonNav from "@/components/button_nav";
import { navItemsData } from "@/data";
import Header from "@/components/header";

function page() {
  return (
    <div>
      <Header />
      <ButtonNav navItems={navItemsData} />
    </div>
  );
}

export default page;

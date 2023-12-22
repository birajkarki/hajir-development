import LeftCreateCompany from "@/app/components/LeftCreateCompany";
import RightCreateCompany from "@/app/components/RightCreateCompany";
import React from "react";

const Page = () => {
  return (
    <div className="flex">
      <RightCreateCompany />
      <LeftCreateCompany />
    </div>
  );
};

export default Page;

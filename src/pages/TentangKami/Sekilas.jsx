import React from "react";
import { SekilasPerusahaan } from "../../Components/home/SekilasPerusahaan";
import FrameBorder from "../../Components/Frame_border";

export const Sekilas = () => {
  return (
    <div className="w-full mx-auto py-16  text-gray-800">
      <FrameBorder title="Sekilas" link="Sekilas" />
      <div className="">
        <SekilasPerusahaan />
      </div>
    </div>
  );
};

import React, { useState } from "react";
import FrameBorder from "@/Components/Frame_border";
import HeaderFasilitas from "@/Components/Fasilitas/Header";
import { DataFalisitas } from "@/utils/data/Data_Fasilitas";
import "swiper/css/navigation";
import useFilterImageFasilitas from "@/hooks/useFilterImageFasilitas";
import ListImage from "@/Components/Fasilitas/ListImage";
import DetailImage from "@/Components/Fasilitas/DetailImage";
import chunkArray from "@/utils/Transform_List_Image_Fasilitas";

export const Fasilitas = () => {
  const Data = DataFalisitas;
  const DataItems = DataFalisitas.flatMap((facility) => facility.items);
  const WrappingData = chunkArray(DataItems, 3);

  const [active, setActive] = useState("All");
  const [selectedId, selectedIdSet, combinedData] = useFilterImageFasilitas();

  return (
    <main className="w-full">
      <FrameBorder title="Fasilitas" link="Fasilitas" />
      <article className="w-full px-5 py-10">
        <HeaderFasilitas />
        <article className="w-full flex flex-col justify-center items-center mt-5">
          <header className="w-full py-5">
            <ul className="flex justify-center max-md:flex-wrap gap-5 items-center">
              <li>
                <p className="hover:text-yellow-500 text-sm md:text-lg duration-300 font-sans hover:cursor-pointer font-medium" role="button" onClick={() => setActive("All")}>
                  All
                </p>
              </li>
              {Data.map((item) => (
                <li key={item.id}>
                  <p className="hover:text-yellow-500 text-sm md:text-lg duration-300 font-sans hover:cursor-pointer font-medium" role="button" onClick={() => setActive(item.title)}>
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </header>
          <ListImage WrappingData={WrappingData} selectedIdSet={selectedIdSet} DataFalisitas={DataFalisitas} selectedId={selectedId} active={active} />
        </article>
      </article>
      {/* Tampil Detail Image Fasilitas */}
      <DetailImage selectedId={selectedId} selectedIdSet={selectedIdSet} combinedData={combinedData} />
    </main>
  );
};

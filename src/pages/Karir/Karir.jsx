import React from "react";
import FrameBorder from "@/Components/Frame_border";
import HeaderKarir from "@/Components/Karir/Header";
import ListKarir from "@/Components/Karir/ListKarir";
import { Data_Karir } from "@/utils/Data/Data_Karir";

export const Karir = () => {
  const DataKarir = Data_Karir;
  return (
    <main className="w-full bg-slate-100">
      <FrameBorder title="Karir" link="karir" />
      <article className="w-full px-5 py-10">
        <HeaderKarir />
        <article className="w-full flex  justify-center items-center mt-12">
          <div className="w-full md:w-7/12    rounded-md space-y-6">
            {DataKarir.map((item, index) => (
              <ListKarir
                key={index}
                id={item.id}
                title={item.title}
                shortTitle={item.shortTitle}
              />
            ))}
          </div>
        </article>
      </article>
    </main>
  );
};

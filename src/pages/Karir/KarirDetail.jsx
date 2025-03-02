import React from "react";
import FrameBorder from "@/Components/Frame_border";
import HeaderKarir from "@/Components/Karir/Header";
import FormKarir from "@/Components/Karir/FormKarir";
import { Data_Karir } from "@/utils/Data/Data_Karir";
import { useParams } from "react-router";

export const KarirDetail = () => {
  const { id } = useParams();
  const data = Data_Karir.find((item) => item.id === parseInt(id));

  return (
    <main className="w-full bg-slate-100">
      <FrameBorder title="Karir" link="karir" />
      <article className="w-full px-5 py-10">
        <HeaderKarir />
        <article className="w-full flex  justify-center items-center mt-12">
          <div className="w-full md:w-7/12 p-5 rounded shadow-md bg-white ">
            <header className="w-full py-3  border-0 border-b-[1px] border-slate-300">
              <h1 className="text-center text-lg md:text-2xl text-slate-800 font-semibold uppercase tracking-wide">
                {data.title}
              </h1>
            </header>
            <figure className="w-full mt-4 overflow-auto">
              <img src={data.img} alt={data.title} />
            </figure>
            <section className="w-full mt-4">
              <header className="w-full text-slate-700 text-center space-y-3">
                <h1 className="text-lg md:text-2xl font-semibold">
                  KIRIMKAN LAMARAN KERJA
                </h1>
                <h3 className=" ">Lengkapi form dibawah ini.</h3>
              </header>
              <FormKarir />
            </section>
          </div>
        </article>
      </article>
    </main>
  );
};

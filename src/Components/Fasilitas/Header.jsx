import React from "react";

export default function HeaderFasilitas() {
  return (
    <header className=" sm:mt-10 w-full ">
      <section className="w-full flex justify-center items-center gap-3">
        <div className="max-[340px]:hidden w-1/6 sm:w-2/12 h-0.5 bg-yellow-500"></div>
        <h1 className="text-base   md:text-3xl font-bold text-slate-800">
          Fasilitas Perusahaan
        </h1>
        <div className="max-[340px]:hidden   w-1/6 sm:w-2/12 h-0.5 bg-yellow-500"></div>
      </section>
      <section className="w-full flex pt-3 justify-center items-center">
        <h2 className="max-sm:text-xs text-sm text-center md:text-lg font-roboto text-slate-700">
          Untuk memberikan pelayanan yang terbaik dalam menunjang kegiatan
          operasional maka kami telah memiliki fasilitas berikut.
        </h2>
      </section>
    </header>
  );
}

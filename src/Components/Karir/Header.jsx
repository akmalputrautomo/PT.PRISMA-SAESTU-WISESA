import React from "react";

export default function HeaderKarir() {
  return (
    <header className=" sm:mt-10 w-full ">
      <section className="w-full flex justify-center items-center gap-3">
        <div className="max-[340px]:hidden w-1/6 sm:w-2/12 h-0.5 bg-yellow-500"></div>
        <h1 className="text-base   md:text-3xl font-bold text-slate-800">
          Karir
        </h1>
        <div className="max-[340px]:hidden   w-1/6 sm:w-2/12 h-0.5 bg-yellow-500"></div>
      </section>
    </header>
  );
}

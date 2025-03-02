import React from "react";
import { Link } from "react-router";

export default function ListKarir({ id, title, shortTitle }) {
  return (
    <section className="w-full p-4 flex justify-between shadow-xl bg-white rounded-md">
      <header className="flex gap-4 items-center  ">
        <h2 className="text-xs sm:text-base md:text-2xl font-semibold p-2 bg-black text-white rounded-md">
          {shortTitle}
        </h2>
        <h1 className="text-xs sm:text-sm md:text-xl font-semibold">
          {title} ({shortTitle})
        </h1>
      </header>
      <Link
        to={`/karir/${id}`}
        className=" max-sm:text-xs max-md:text-sm flex items-center px-2 bg-yellow-500 font-semibold text-black rounded-md"
      >
        Lihat Detail
      </Link>
    </section>
  );
}

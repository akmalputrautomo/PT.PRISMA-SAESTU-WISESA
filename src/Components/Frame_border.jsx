import React from "react";
import { ImageImport } from "@/utils/ImageImport";
import { Link } from "react-router";

export default function FrameBorder({ title = "", link = "" }) {
  return (
    <header className="w-full h-72 relative">
      <figure className="w-full h-full   relative">
        <figcaption className="absolute top-0 flex  items-center flex-col justify-end pb-11  bg-black/65 left-0 w-full h-full space-y-2">
          <h1 className="text-white text-5xl  font-sans">{title}</h1>
          <section className="flex items-center gap-2 text-lg font-sans">
            <Link
              to="/"
              className="text-white hover:underline text-lg font-sans"
            >
              Home
            </Link>
            <span className="text-white text-lg font-sans">/</span>
            <h2 className="text-yellow-300 text-lg font-sans">{link}</h2>
          </section>
        </figcaption>
        <img
          src={ImageImport.FrameBorderPrisma}
          alt="frame border"
          className="w-full h-full object-none "
        />
      </figure>
    </header>
  );
}

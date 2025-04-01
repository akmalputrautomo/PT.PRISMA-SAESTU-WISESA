import React from "react";
import FrameBorder from "../../Components/Frame_border";

const directors = [
  { name: "JUANA", role: "Direktur Utama", image: "" },
  { name: "DIPTA WISESA", role: "Direktur", image: "" },
  { name: "ARIF NOVIANTO", role: "Komisaris & Manager Keuangan", image: "" },
  { name: "WAHYU", role: "Direksi", image: "" },
  { name: "SITI RISKIYA NUPUS", role: "Manager Personalia", image: "" },
  { name: "TISNA PRASETIAWAN", role: "Admin", image: "" },
];

export const BoardOfDicertor = () => {
  return (
    <div className="w-full mx-auto text-center">
      {/* Frame Border */}
      <FrameBorder title="Board Of Director" link="BoardOfDicertor" />

      {/* Judul */}
      <h2 className="text-3xl font-bold text-gray-900 flex pt-4 items-center justify-center gap-2 mb-12">
        <span className="border-t-2 border-yellow-500 w-12"></span>
        Board Of Directors
        <span className="border-t-2 border-yellow-500 w-12"></span>
      </h2>

      {/* Grid Layout */}
      <div className="flex flex-col gap-12 items-center">
        {/* Baris pertama (2 kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {directors.slice(0, 2).map((director, index) => (
            <DirectorCard key={index} director={director} />
          ))}
        </div>

        {/* Baris kedua (4 kolom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {directors.slice(2, 6).map((director, index) => (
            <DirectorCard key={index} director={director} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Komponen Card dengan Efek Hover
const DirectorCard = ({ director }) => (
  <div className="relative group bg-gray-100 shadow-lg rounded-lg overflow-hidden w-[250px] md:w-[280px] lg:w-[300px]">
    {/* Gambar Direktur */}
    <img src={director.image} alt={director.name} className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-105" />

    {/* Overlay Muncul Saat Hover */}
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="text-lg font-bold">{director.name}</div>
      <p className="text-sm">{director.role}</p>
    </div>
  </div>
);

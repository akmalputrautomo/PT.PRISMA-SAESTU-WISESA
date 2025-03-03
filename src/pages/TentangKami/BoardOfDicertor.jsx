import React from "react";
import FrameBorder from "../../Components/Frame_border";

const directors = [
  { name: "HADI BUNTARA", role: "Commissioner", image: "https://cdn.medcom.id/dynamic/content/2018/05/14/874136/tsQLu9A7aB.jpg?w=1024" },
  { name: "SALDJU", role: "President Director", image: "https://cdn.medcom.id/dynamic/content/2018/05/14/874136/tsQLu9A7aB.jpg?w=1024" },
  { name: "SIOK LIN", role: "Finance & Administration Director", image: "https://cdn.medcom.id/dynamic/content/2018/05/14/874136/tsQLu9A7aB.jpg?w=1024" },
  { name: "PRIYO SETIAWAN", role: "Sales & Marketing Director", image: "https://cdn.medcom.id/dynamic/content/2018/05/14/874136/tsQLu9A7aB.jpg?w=1024" },
  { name: "TITIS WIDJANARKO", role: "Operation General Manager", image: "https://cdn.medcom.id/dynamic/content/2018/05/14/874136/tsQLu9A7aB.jpg?w=1024" },
  { name: "IVAN PRANAJAYA", role: "Finance & Accounting General Manager", image: "https://cdn.medcom.id/dynamic/content/2018/05/14/874136/tsQLu9A7aB.jpg?w=1024" },
];

export const BoardOfDicertor = () => {
  return (
    <div className="w-full mx-auto py-16 text-center">
      {/* Frame Border */}
      <FrameBorder title="Visi & Misi" link="BoardOfDicertor" />

      {/* Judul */}
      <h2 className="text-3xl font-bold text-gray-900 flex pt-4 items-center justify-center gap-2 mb-8">
        <span className="border-t-2 border-yellow-500 w-12"></span>
        Board Of Directors
        <span className="border-t-2 border-yellow-500 w-12"></span>
      </h2>

      {/* Grid Layout */}
      <div className=" p-6 flex flex-col gap-8">
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

// Komponen Card untuk Direktur
const DirectorCard = ({ director }) => (
  <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
    <img src={director.image} alt={director.name} className="w-full h-72 object-cover" />
    <div className="bg-yellow-600 text-white text-center py-2 font-semibold">{director.name}</div>
    <p className="text-gray-700 text-sm py-2">{director.role}</p>
  </div>
);

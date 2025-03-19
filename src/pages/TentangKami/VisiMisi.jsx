import React from "react";
import { FaBuilding } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";
import FrameBorder from "../../Components/Frame_border";

export const VisiMisi = () => {
  const misiList = ["Memberikan pelayanan yang terbaik, jujur, profesional, dan berkualitas", "Menjunjung tinggi harkat, derajat, dan persaudaraan"];

  return (
    <div className="w-full mx-auto pb-4">
      {/* Frame Border */}
      <FrameBorder title="Visi & Misi" link="VisiMisi" />

      {/* Judul */}
      <div className="text-center pt-4 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
          <span className="border-t-2 border-yellow-500 w-12"></span>
          Visi & Misi
          <span className="border-t-2 border-yellow-500 w-12"></span>
        </h2>
        <h3 className="text-xl text-gray-700 mt-2">PT BUNTARA MEGAH INTI</h3>
      </div>

      {/* Konten Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Visi */}
        <div className="flex flex-col items-center">
          <FaBuilding className="text-4xl text-gray-700 mb-4" />
          <h4 className="text-2xl font-semibold text-gray-900">Visi</h4>
          <p className="text-gray-700 text-center mt-2">Memaksimalkan seluruh keterampilan, kemampuan, dan pengalaman demi tercapainya kualitas kerja yang terbaik serta mendukung terciptanya lingkungan kerja yang aman dan profesional.</p>
        </div>

        {/* Misi */}
        <div className="flex flex-col items-center md:items-center">
          <FaBuilding className="text-4xl text-gray-700 mb-4" />
          <h4 className="text-2xl font-semibold text-gray-900">Misi</h4>
          <ul className="text-gray-700 mt-2 space-y-2">
            {misiList.map((item, index) => (
              <li key={index} className="flex items-center">
                <HiCheck className="text-yellow-500 mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

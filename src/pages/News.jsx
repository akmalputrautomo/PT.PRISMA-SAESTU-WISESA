import React from "react";
import { useNavigate } from "react-router-dom";
import FrameBorder from "../Components/Frame_border";

export const News = () => {
  const navigate = useNavigate();

  const newsList = [
    {
      id: 1,
      title: "Sirkuit Mandalika Menggunakan Aspal Modifikasi Shell Cariphalte Racetrack",
      date: "SENIN, 20 NOVEMBER 2023",
      image: "https://cdn.medcom.id/dynamic/content/2018/05/14/874136/tsQLu9A7aB.jpg?w=1024",
    },
    {
      id: 2,
      title: "PT. Buntara dan PT. Shell Indonesia Luncurkan Teknologi Aspal Polimer",
      date: "SENIN, 20 NOVEMBER 2023",
      image: "https://via.placeholder.com/600", // Fallback gambar
    },
    {
      id: 3,
      title: "PT Buntara Megah Inti Resmikan Fasilitas Bitumen di Marunda",
      date: "SENIN, 13 MARET 2023",
      image: "https://via.placeholder.com/600", // Fallback gambar
    },
  ];

  return (
    <div className=" w-full">
      <FrameBorder title="News" link="News" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {newsList.map((news) => (
          <div key={news.id} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105" onClick={() => navigate(`/DetailNews/${news.id}`)}>
            <img src={news.image} alt={`Thumbnail ${news.title}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-md">{news.date}</span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{news.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { FaIndustry, FaTruck, FaLock, FaBalanceScale, FaMicrochip, FaCubes } from "react-icons/fa";

export const Section2 = () => {
  const items = [
    {
      icon: <FaIndustry size={40} />,
      title: "EFISIEN",
      description: "Fasilitas Pengisian Aspal ke dalam truk yang cepat dan efisien.",
    },
    {
      icon: <FaTruck size={40} />,
      title: "ARMADA",
      description: "Jumlah armada yang banyak, dapat menjamin kelancaran suplai aspal.",
    },
    {
      icon: <FaLock size={40} />,
      title: "SEGEL",
      description: "Menggunakan segel di setiap truk untuk menjamin kualitas dan kuantitas aspal.",
    },
    {
      icon: <FaBalanceScale size={40} />,
      title: "TERKALIBRASI",
      description: "Fasilitas Timbangan Aspal yang selalu terkalibrasi akan menjamin kuantitasnya.",
    },
    {
      icon: <FaMicrochip size={40} />,
      title: "TEKNOLOGI",
      description: "Teknologi saling terintegrasi memberikan layanan terbaik untuk customer.",
    },
    {
      icon: <FaCubes size={40} />,
      title: "PRODUK",
      description: "Produk aspal berkualitas dan tahan terhadap cuaca sangat penting.",
    },
  ];

  return (
    <div className="container mx-auto p-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg">
            <div className="mb-4 text-gray-700 transition duration-300 hover:text-white">{item.icon}</div>
            <h2 className="text-xl font-bold text-gray-800 transition duration-300 hover:text-white">{item.title}</h2>
            <div className="w-12 h-1 bg-yellow-500 mt-2 mb-4 transition duration-300 hover:bg-white"></div>
            <p className="text-gray-600 transition duration-300 hover:text-white">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

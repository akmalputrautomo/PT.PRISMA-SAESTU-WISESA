import React from "react";
import { FaIndustry, FaTruck, FaLock, FaBalanceScale, FaMicrochip, FaCubes, FaVideo, FaPrint, FaShieldAlt, FaTools, FaHeadset } from "react-icons/fa";

export const Section2 = () => {
  const items = [
    {
      icon: <FaVideo size={40} />,
      title: "CCTV & SECURITY SYSTEM",
      description: "Menyediakan solusi keamanan lengkap dengan CCTV, Access Door, dan Gate Parkir berkualitas tinggi.",
    },
    {
      icon: <FaLock size={40} />,
      title: "ACCESS CONTROL",
      description: "Sistem kontrol akses yang canggih untuk pengamanan gedung dan area terbatas.",
    },
    {
      icon: <FaPrint size={40} />,
      title: "PERCETAKAN",
      description: "Layanan percetakan profesional untuk kebutuhan perusahaan dan personal.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "KEAMANAN TERINTEGRASI",
      description: "Solusi keamanan terpadu untuk perusahaan dan properti pribadi.",
    },
    {
      icon: <FaTools size={40} />,
      title: "PEMASANGAN & PERAWATAN",
      description: "Layanan instalasi dan perawatan berkala untuk memastikan sistem berjalan optimal.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "SUPPORT 24/7",
      description: "Layanan dukungan teknis profesional siap membantu kapan saja.",
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

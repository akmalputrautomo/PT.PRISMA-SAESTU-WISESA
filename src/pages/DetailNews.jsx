import React from "react";
import { useParams } from "react-router-dom";
import FrameBorder from "../Components/Frame_border";

export const DetailNews = () => {
  const { id } = useParams();
  const newsList = [
    {
      id: 1,
      title: "Sirkuit Mandalika Menggunakan Aspal Modifikasi Shell Cariphalte Racetrack",
      date: "Senin, 20 November 2023",
      image: "https://cdn.medcom.id/dynamic/content/2018/05/14/874136/tsQLu9A7aB.jpg?w=1024",
      content: `Sirkuit Mandalika yang terletak di Kabupaten Lombok, Provinsi Nusa Tenggara Barat (NTB) dengan nama
      resmi Pertamina Mandalika International Street Circuit diresmikan oleh Presiden Jokowi pada tanggal 21 November 2021.
      
      Sirkuit Mandalika menggunakan produk khusus Aspal modifikasi Shell Cariphalte Racetrack dengan
      performa tinggi yang disesuaikan dengan kebutuhan sirkuit kelas internasional seperti Malaysia, Italia,
      hingga Jerman.`,
    },
    {
      id: 2,
      title: "PT. Buntara dan PT. Shell Indonesia Luncurkan Teknologi Aspal Polimer",
      date: "Senin, 20 November 2023",
      image: "https://via.placeholder.com/600",
      content: "Teknologi aspal polimer terbaru ini memberikan ketahanan lebih baik terhadap cuaca ekstrem dan beban lalu lintas berat.",
    },
    {
      id: 3,
      title: "PT Buntara Megah Inti Resmikan Fasilitas Bitumen di Marunda",
      date: "Senin, 13 Maret 2023",
      image: "https://via.placeholder.com/600",
      content: "Fasilitas baru ini diharapkan dapat meningkatkan efisiensi distribusi bitumen di wilayah Jabodetabek dan sekitarnya.",
    },
  ];

  // Cari berita berdasarkan ID (pastikan ID diubah ke integer)
  const selectedNews = newsList.find((news) => news.id === parseInt(id));

  if (!selectedNews) {
    return <div className="text-center py-10 text-red-500">Berita tidak ditemukan!</div>;
  }

  return (
    <div className=" mx-auto  ">
      <FrameBorder title="DetailNews" link="DetailNews" />
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden pt-12">
        {/* <h1 className="text-black flex justify-center items-center font-bold">NEWS</h1> */}
        <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-md">{selectedNews.date}</span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">{selectedNews.title}</h2>
          <p className="mt-4 text-gray-700 whitespace-pre-line">{selectedNews.content}</p>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const Halamantidaktersedia = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Halaman Tidak Tersedia</h2>
      <p className="text-gray-600 mt-2">Maaf, halaman yang Anda cari tidak ditemukan.</p>
      <Link to="/" className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

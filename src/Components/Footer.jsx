import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-gray-700 font-ro">
      {/* Bagian Informasi */}
      <div className="container mx-auto flex flex-wrap justify-between p-10 gap-6">
        {/* Head Office */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-bold mb-2">HEAD OFFICE</h1>
          <p className="text-gray-300">Jl. Grenjeng, No.03, Karanglo, Babadan RT.03 RW.01</p>
          <p className="text-gray-300">Purwomartani, Kalasan, Sleman</p>
          <p className="text-gray-300">Daerah Istimewa Yogyakarta 55571</p>
        </div>

        {/* Kontak */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-bold mb-2">HUBUNGI</h1>
          <p className="text-gray-300">Telp: 0274-2853379</p>
          <p className="text-gray-300">Email: prismasaestuwisesa@gmail.com</p>
        </div>

        {/* Bidang Usaha */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-bold mb-2">BIDANG USAHA</h1>
          <p className="text-gray-300">Perdagangan Alat Telekomunikasi, Komputer, Elektronik, Percetakan, dan Penerbitan.</p>
        </div>

        {/* Follow Us */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-bold mb-2">FOLLOW US</h1>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition-all duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="w-full h-[7rem] bg-blue-950 flex items-center px-5">
        {/* Logo & Nama Perusahaan */}
        <div className="flex items-center gap-3">
          <img
            className="w-[15rem] h-[5rem] rounded-md"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9roHRJvKU-RlBF8z6UMS3F-y29u3gvc6cEBTXvQdETACzc1cK9nxlB-ykO44dq_iT9m3mLRXc20NdnWZuLuG2AWoXPIM8oLnzELxaTgkVc_UMoJ1gjEwtdYMds1X7oJyvJ_sfZ1VudrU/w640-h186/logo+prisma.png"
            alt="Logo PT. PRISMA SAESTU WISESA"
          />
        </div>

        {/* Copyright */}
        <div className="text-white font-semibold text-center mx-auto">
          <p>Copyright © 2025 PT. PRISMA SAESTU WISESA</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

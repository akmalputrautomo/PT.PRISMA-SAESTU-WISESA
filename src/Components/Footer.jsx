import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ImageImport } from "../utils/ImageImport";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#00e5ff] text-white border-t relative border-gray-700 ">
      {/* Bagian Informasi */}
      <figure className="w-full h-72 relative">
        <img
          src={ImageImport.FrameBorderPrisma}
          alt="pt-prisma"
          className="max-md:object-none object-cover h-full w-full  "
        />
        <section className="w-full z-10 bg-black/80 absolute top-0">
          <div className="container mx-auto flex flex-wrap justify-between p-2 md:p-10 gap-6">
            {/* Head Office */}
            <div className="w-full md:w-1/4">
              <h1 className="md:text-lg font-bold mb-2">HEAD OFFICE</h1>
              <p className=" max-md:text-sm text-slate-50">
                Jl. Grenjeng, No.03, Karanglo, Babadan RT.03 RW.01
              </p>
              <p className="max-md:text-sm text-slate-50">
                Purwomartani, Kalasan, Sleman
              </p>
              <p className="max-md:text-sm text-slate-50">
                Daerah Istimewa Yogyakarta 55571
              </p>
            </div>

            {/* Kontak */}
            <div className="w-full md:w-1/4">
              <h1 className="md:text-lg font-bold mb-2">HUBUNGI</h1>
              <p className="max-md:text-sm text-slate-50">Telp: 0274-2853379</p>
              <p className="max-md:text-sm text-slate-50">
                Email: prismasaestuwisesa@gmail.com
              </p>
            </div>

            {/* Bidang Usaha */}
            <div className="w-full md:w-1/4">
              <h1 className="md:text-lg font-bold mb-2">BIDANG USAHA</h1>
              <p className="max-md:text-sm text-slate-50">
                Perdagangan Alat Telekomunikasi, Komputer, Elektronik,
                Percetakan, dan Penerbitan.
              </p>
            </div>

            {/* Follow Us */}
            <div className="w-full md:w-1/4">
              <h1 className="md:text-lg font-bold mb-2">FOLLOW US</h1>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-all duration-300"
                >
                  <FaFacebook className="text-lg md:text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-500 transition-all duration-300"
                >
                  <FaInstagram className="text-lg md:text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  <FaTwitter className="text-lg md:text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bawah */}
          <div className="w-full h-auto bg-blue-950 flex max-md:flex-col max-md:gap-3 mt-2 items-center py-3 md:px-5">
            {/* Logo & Nama Perusahaan */}
            <div className="flex items-center ">
              <img
                className="w-36  sm:w-[15rem] sm:h-[5rem] rounded-md"
                src={ImageImport.Logo}
                alt="Logo PT. PRISMA SAESTU WISESA"
              />
            </div>

            {/* Copyright */}
            <div className="text-white max-sm:text-sm font-semibold text-center mx-auto">
              <p>Copyright © 2025 PT. PRISMA SAESTU WISESA</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </section>
      </figure>
    </footer>
  );
};

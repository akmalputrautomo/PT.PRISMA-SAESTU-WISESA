import React from "react";

export const Section5 = () => {
  return (
    <footer className="w-full bg-black text-white p-10 border-t border-gray-700">
      <div className="container mx-auto flex flex-wrap justify-between gap-6">
        {/* Head Office */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-bold mb-2">HEAD OFFICE</h1>
          <p>Jl. Grenjeng, No.03, Karanglo, Babadan RT.03 RW.01</p>
          <p>Purwomartani, Kalasan, Sleman</p>
          <p>Daerah Istimewa Yogyakarta 55571</p>
        </div>

        {/* Kontak */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-bold mb-2">HUBUNGI</h1>
          <p>Telp: 0274-2853379</p>
          <p>Email: prismasaestuwisesa@gmail.com</p>
        </div>

        {/* Bidang Usaha */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-bold mb-2">BIDANG USAHA</h1>
          <p>Perdagangan Alat Telekomunikasi, Komputer, Elektronik, Percetakan, dan Penerbitan.</p>
        </div>

        {/* Follow Us - Sejajar dengan H1 */}
        <div className="w-full md:w-1/4 flex items-center">
          <h1 className="text-lg font-bold">FOLLOW US</h1>
          <div className="flex gap-4 ml-4">
            {/* Tambahkan ikon sosial media di sini */}
            <a href="#" className="hover:text-gray-400">
              🔵
            </a>
            <a href="#" className="hover:text-gray-400">
              🔴
            </a>
            <a href="#" className="hover:text-gray-400">
              🟠
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

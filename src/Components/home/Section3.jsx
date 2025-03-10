import React from "react";

export const Section3 = () => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl">
      {/* Judul Perusahaan */}
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6 uppercase tracking-wide">PT. PRISMA SAESTU WISESA</h2>

      {/* Deskripsi Perusahaan */}
      <p className="text-gray-700 text-justify leading-relaxed">
        <span className="font-semibold text-yellow-500">PT. PRISMA SAESTU WISESA</span> adalah perusahaan yang bergerak di bidang penyedia jasa dan pengadaan perangkat <strong className="text-gray-900">Security System</strong>, termasuk{" "}
        <strong className="text-gray-900">CCTV, Access Door, Gate Parkir</strong>, serta percetakan. Kami berkomitmen untuk memenuhi kebutuhan baik perusahaan maupun individu dalam bidang keamanan dan percetakan.
      </p>

      {/* Pengalaman dan Kemampuan */}
      <h3 className="text-2xl font-bold text-gray-900 mt-8">Pengalaman dan Kemampuan</h3>
      <p className="text-gray-700 text-justify mt-2 leading-relaxed">
        Kami memiliki pengalaman luas dalam bidang <strong>Security System</strong>, yang telah diterapkan di berbagai kota, seperti <span className="text-yellow-500">Jakarta, Surabaya, dan Sulawesi</span>. Kami juga bekerja sama dengan{" "}
        <strong className="text-gray-900">PT. KONE INDO ELEVATOR</strong> dalam berbagai proyek besar, termasuk:
      </p>
      <ul className="list-none mt-4 space-y-2">
        {["Gold Coast Apartemen", "Gedung Graha Niaga", "Gedung Kementerian Keuangan", "Gedung Bank Indonesia Kendari", "Gedung Ciputra World Office Surabaya"].map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <span className="text-yellow-500">✔</span>
            <span className="text-gray-800">{item}</span>
          </li>
        ))}
      </ul>

      {/* Maksud dan Tujuan */}
      <h3 className="text-2xl font-bold text-gray-900 mt-8">Maksud dan Tujuan Perusahaan</h3>
      <p className="text-gray-700 text-justify mt-2 leading-relaxed">
        Dengan tenaga ahli muda dan profesional, <strong className="text-yellow-500">PT. PRISMA SAESTU WISESA</strong> siap bersaing dan mendukung program pemerintah. Kami berpartisipasi dalam tender pengadaan di <strong>BUMN</strong> serta
        melayani berbagai klien dari instansi hingga perorangan.
      </p>
      <p className="text-gray-700 text-justify mt-4">Komitmen kami mencakup:</p>
      <ul className="list-none mt-4 space-y-2">
        {["Menyediakan produk dengan jaminan kualitas dan garansi", "Memberikan pelayanan yang baik, profesional, dan bertanggung jawab", "Menjamin kerahasiaan dan eksklusivitas produk serta layanan kami"].map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <span className="text-yellow-500">✔</span>
            <span className="text-gray-800">{item}</span>
          </li>
        ))}
      </ul>

      {/* Closing Statement */}
      <p className="text-gray-700 text-center mt-8 font-medium">
        Dengan prinsip <span className="text-yellow-500">keamanan, profesionalisme, dan kualitas</span>, kami terus berinovasi untuk menjadi mitra terpercaya bagi setiap klien kami.
      </p>
    </div>
  );
};

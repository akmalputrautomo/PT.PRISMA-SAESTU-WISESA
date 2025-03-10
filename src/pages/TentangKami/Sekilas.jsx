import React from "react";
import FrameBorder from "../../Components/Frame_border";

export const Sekilas = () => {
  return (
    <div className="w-full mx-auto text-gray-800 bg-gray-100 ">
      <FrameBorder title="Profil Singkat Perusahaan" link="Sekilas" />

      {/* Sejarah Perusahaan */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300 mt-8">
        <h2 className="text-lg font-bold text-blue-900 border-b-2 border-blue-900 text-center pb-2 mb-4">SEJARAH PERUSAHAAN</h2>

        <p className="text-justify leading-relaxed text-md text-gray-700">
          Berawal pada pertengahan bulan Agustus tahun 2018 di Jakarta, sebuah perusahaan swasta memenangkan tender pengadaan alat Security System beserta System IVMS (Intelligent Visitor Management System) untuk gedung Direktorat Jenderal
          Imigrasi di Jl. HR. Rasuna Said, Jakarta Selatan. Perusahaan ini mengadakan dan memasang alat untuk visitor di dalam gedung Imigrasi. Di area-area tertentu, sistem ini membatasi dan mendata setiap visitor yang berada di dalam
          gedung imigrasi, serta menampilkan database setiap visitor yang keluar dan masuk menggunakan sistem aplikasi IVMS.
        </p>

        <p className="text-justify leading-relaxed text-md text-gray-700 mt-3">
          Tim kami, bersama tenaga ahli di bidang IVMS, berhasil menyelesaikan pekerjaan ini dalam waktu 30 hari kalender dengan baik. Sistem ini memberikan kemudahan bagi manajemen dalam gedung dan hingga saat ini masih digunakan di dalam
          Gedung Imigrasi.
        </p>

        <p className="text-justify leading-relaxed text-md text-gray-700 mt-3">
          Pada bulan Oktober 2018, perusahaan kembali memenangkan tender untuk pekerjaan pemasangan IVMS beserta alatnya di gedung Equity Tower, kawasan SCBD, Jakarta Selatan. Sistem ini menggunakan alat Pedestrian Gate buatan KABA (yang
          sekarang menjadi DORMAKABA). Dalam kurun waktu 21 hari, tim kami berhasil menyelesaikan pekerjaan tersebut dengan baik, memberikan kemudahan dan keamanan berbasis sistem di dalam gedung.
        </p>

        <p className="text-justify leading-relaxed text-md text-gray-700 mt-3">
          Dengan pengalaman yang telah kami dapatkan dalam mengerjakan proyek-proyek sebelumnya, akhirnya kami mendirikan perusahaan baru dengan nama <strong>PT. PRISMA SAESTU WISESA</strong>, yang siap bersaing dengan perusahaan lainnya di
          industri ini.
        </p>
      </div>
    </div>
  );
};

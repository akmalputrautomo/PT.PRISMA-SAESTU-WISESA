import React from "react";
import FrameBorder from "../../Components/Frame_border";

export const MengapaMemilihKami = () => {
  return (
    <div className="w-full mx-auto text-gray-800">
      <FrameBorder title="Mengapa Memilih Kami" link="MengapaMemilihKami" />

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300">
        <h2 className="text-lg font-bold text-blue-900 border-b-2 border-blue-900 text-center pb-2 mb-4">
          PROFIL SINGKAT PERUSAHAAN <br /> PT. PRISMA SAESTU WISESA
        </h2>

        {/* <div className="grid grid-cols-1 gap-x-4 gap-y-6 text-md">
          <p>
            <strong>Nama Perusahaan:</strong> PT. PRISMA SAESTU WISESA
          </p>
          <p>
            <strong>No. Tlp/Fax:</strong> 0274-2853379
          </p>
          <p>
            <strong>Alamat Perusahaan:</strong> Jl. Grenjeng No.03 RT/RW 03/01, Karanglo, Purwomartani, Kalasan Sleman, Jogjakarta 55571
          </p>
          <p>
            <strong>Email:</strong> prismasaestuwisesa@gmail.com
          </p>
          <p>
            <strong>Akta Pendirian:</strong> No.64 Hari Kamis, 21 Februari 2019
          </p>
          <p>
            <strong>Notaris:</strong> JUANITA LESTIA RINI, S.H., M.Kn
          </p>
          <p>
            <strong>No. Pengesahan Menkum:</strong> AHU-00063.AH.02.02.TAHUN 2018
          </p>
          <p>
            <strong>Tanggal:</strong> 05 September 2018
          </p>
          <p>
            <strong>No. S.I.U.P:</strong> 9120304370651 (05 Maret 2019)
          </p>
          <p>
            <strong>No. N.P.W.P:</strong> 90.608.399.3-453.000
          </p>
          <p>
            <strong>Surat P.K.P:</strong> S-311PKP/WPJ.08/KP.1003/2019
          </p>
          <p>
            <strong>No. S.K.T.P:</strong> S-4730KT/WPJ.08/KP.1003/2019
          </p>
          <p>
            <strong>Ket. Domisili Perusahaan:</strong> 503/21-Kel.Pd.A/II/2019
          </p>
          <p>
            <strong>Bidang Usaha:</strong> Perdagangan Alat Telekomunikasi, Komputer, Elektronik, Percetakan, dan Penerbitan
          </p>
        </div> */}
        <div className="space-y-4">
          {[
            ["Nama Perusahaan", "PT. PRISMA SAESTU WISESA"],
            ["No. Tlp/Fax", "0274-2853379"],
            ["Alamat Perusahaan", "Jl. Grenjeng No.03 RT/RW 03/01, Karanglo, Purwomartani, Kalasan Sleman, Jogjakarta 55571"],
            ["Email", "prismasaestuwisesa@gmail.com"],
            ["Akta Pendirian", "No.64 Hari Kamis, 21 Februari 2019"],
            ["Notaris", "JUANITA LESTIA RINI, S.H., M.Kn"],
            ["No. Pengesahan Menkum", "AHU-00063.AH.02.02.TAHUN 2018"],
            ["Tanggal", "05 September 2018"],
            ["No. S.I.U.P", "9120304370651 (05 Maret 2019)"],
            ["No. N.P.W.P", "90.608.399.3-453.000"],
            ["Surat P.K.P", "S-311PKP/WPJ.08/KP.1003/2019"],
            ["No. S.K.T.P", "S-4730KT/WPJ.08/KP.1003/2019"],
            ["Ket. Domisili Perusahaan", "503/21-Kel.Pd.A/II/2019"],
            ["Bidang Usaha", "Perdagangan Alat Telekomunikasi, Komputer, Elektronik, Percetakan, dan Penerbitan"],
          ].map(([label, value], index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <p className="w-full sm:w-56 font-semibold">{label}</p>
              <p className="hidden sm:block">:</p>
              <p className="w-full">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

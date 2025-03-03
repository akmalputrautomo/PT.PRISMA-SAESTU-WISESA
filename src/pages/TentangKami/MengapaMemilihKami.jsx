import React from "react";
import FrameBorder from "../../Components/Frame_border";

export const MengapaMemilihKami = () => {
  // Data list poin "Mengapa Memilih Kami"
  const reasons = [
    {
      title: "Dukungan Teknis",
      description:
        "Sebagai bisnis yang berorientasi kepada pelanggan, kami bersama dengan tim principal berusaha untuk menjadi mitra yang strategis bagi pelanggan kami dengan berperan aktif memberikan konsultasi dan dukungan teknis sebagai bagian komitmen pelayanan kami sehingga produk kami dapat teraplikasikan dengan tepat.",
    },
    {
      title: "Ketersediaan Barang yang Berkesinambungan",
      description: "Jaminan akan ketersediaan produk dan kesiapan delivery yang sesuai dengan jadwal yang ditentukan.",
    },
    {
      title: "Jaminan Mutu",
      description: "Sebagai mitra resmi yang ditunjuk oleh PT Shell Indonesia, kami memberikan jaminan originalitas produk yang berkualitas tinggi serta kualitas yang konsisten dari waktu ke waktu.",
    },
    {
      title: "Risk Management Pricing",
      description: "Kami menawarkan metode harga yang stabil sesuai dengan jadwal proyek sebagai solusi yang kami tawarkan kepada pelanggan untuk mengatasi ketidakpastian inflasi.",
    },
    {
      title: "Sistem Pemantauan Pengiriman",
      description:
        "Dengan adanya sistem pemantauan terhadap truk transportasi, maka konsumen dapat memantau pengiriman dari depo ke lokasi pengiriman. Selain itu, terdapat sistem keamanan untuk menjamin bahwa produk yang kami kirimkan akurat isi dan akurat mutu.",
    },
  ];

  return (
    <div className="w-full mx-auto py-16  text-gray-800">
      {/* Frame Border (Judul) */}
      <FrameBorder title="Mengapa Memilih Kami" link="MengapaMemilihKami" />

      {/* Judul Utama */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 pt-4">Mengapa Memilih Kami?</h2>

      {/* List Alasan */}
      <div className="space-y-6 p-5">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-xl font-semibold">{index + 1}.</span>
            <div>
              <h3 className="text-lg font-semibold">{reason.title} :</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

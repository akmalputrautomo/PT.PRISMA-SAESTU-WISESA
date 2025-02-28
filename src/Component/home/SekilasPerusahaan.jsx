import React from "react";
import YouTube from "react-youtube";

export const SekilasPerusahaan = () => {
  const videoId = "TNqOJmpHZfs"; // ID video YouTube

  const opts = {
    height: "500", // Ukuran lebih proporsional
    width: "900",
    playerVars: {
      autoplay: 0, // Video tidak otomatis diputar
      controls: 1, // Tampilkan kontrol pemutar
      rel: 0, // Tidak menampilkan rekomendasi dari channel lain
      modestbranding: 1, // Sembunyikan logo YouTube
    },
  };

  return (
    <div className="flex flex-col items-center my-10">
      {/* Judul dengan Efek Hover */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-16 h-1 bg-blue-950 rounded-full"></div>
        <h1 className="text-4xl font-bold text-gray-900 relative transition-all duration-300 hover:text-yellow-600">Sekilas Perusahaan</h1>
        <div className="w-16 h-1 bg-blue-950 rounded-full"></div>
      </div>

      {/* Pemutar Video YouTube dengan Shadow & Border */}
      <div className="mt-10 p-2 bg-black shadow-lg rounded-2xl border border-gray-300 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

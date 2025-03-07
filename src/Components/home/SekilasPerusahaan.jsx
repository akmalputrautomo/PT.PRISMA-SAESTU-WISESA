import React from "react";
import YouTube from "react-youtube";

export const SekilasPerusahaan = () => {
  const videoId = ""; // ID video YouTube

  const opts = {
    playerVars: {
      autoplay: 0, // Video tidak otomatis diputar
      controls: 1, // Tampilkan kontrol pemutar
      rel: 0, // Tidak menampilkan rekomendasi dari channel lain
      modestbranding: 1, // Sembunyikan logo YouTube
    },
  };

  return (
    <div className="flex flex-col items-center my-10 px-4">
      {/* Judul dengan Efek Hover */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 sm:w-16 h-1 bg-yellow-500 rounded-full"></div>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">Sekilas Perusahaan</h1>
        <div className="w-12 sm:w-16 h-1 bg-yellow-500 rounded-full"></div>
      </div>

      {/* Pemutar Video YouTube Responsif */}
      <div className="mt-10 p-2 bg-black shadow-lg rounded-2xl border border-gray-300 overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-4xl">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <YouTube
            videoId={videoId}
            opts={{
              ...opts,
              width: "100%",
              height: "100%",
            }}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

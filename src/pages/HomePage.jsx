import React from "react";

// lib aceternity

// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { SekilasPerusahaan } from "../Components/home/SekilasPerusahaan";
import { Section2 } from "../Components/home/Section2";
import { TerhubungDenganKami } from "../Components/home/TerhubungDenganKami";
import { ImageImport } from "../utils/ImageImport";
import { Coba } from "../Components/home/coba";

// Data Gambar
const dataGambar = [
  {
    id: 1,
    src: ImageImport.FrameBorderPrisma,
    alt: "Gambar Placeholder 1",
    caption: "Ini adalah gambar pertama",
  },
  {
    id: 2,
    src: ImageImport.Image4,
    alt: "Gambar Placeholder 2",
    caption: "Ini adalah gambar kedua",
  },
  {
    id: 3,
    src: ImageImport.Image6,
    alt: "Gambar Placeholder 3",
    caption: "Ini adalah gambar ketiga",
  },
];

export const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* section 1 */}
      <div className="bg-black w-screen h-screen">
        <Swiper autoplay={{ delay: 10000, disableOnInteraction: false }} navigation loop={true} modules={[Navigation, Autoplay]} className="mySwiper">
          {dataGambar.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-screen">
                {/* Gambar */}
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover opacity-50" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Overlay Teks */}
        <div className="text-4xl font-bold absolute inset-0 flex flex-col justify-center items-center bg-opacity-30  text-white ">
          <div className="backdrop-blur-sm rounded-md flex items-center justify-center flex-col p-4 text-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ">THE BEST SOLUTION FOR YOUR</p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ">SECURITY NEEDS</p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <Section2 />

      {/* Sekilas Perusahaan */}
      {/* <SekilasPerusahaan /> */}
      <Coba />

      {/* Terhubung Dengan Team Kami */}
      <TerhubungDenganKami />
    </div>
  );
};

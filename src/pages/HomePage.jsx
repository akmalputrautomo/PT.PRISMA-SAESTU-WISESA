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

// Data Gambar
const dataGambar = [
  {
    id: 1,
    src: "https://cdn.medcom.id/dynamic/content/2018/05/14/874136/tsQLu9A7aB.jpg?w=1024",
    alt: "Gambar Placeholder 1",
    caption: "Ini adalah gambar pertama",
  },
  {
    id: 2,
    src: "https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg",
    alt: "Gambar Placeholder 2",
    caption: "Ini adalah gambar kedua",
  },
  {
    id: 3,
    src: "https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg",
    alt: "Gambar Placeholder 3",
    caption: "Ini adalah gambar ketiga",
  },
];

export const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* section 1 */}
      <div className="bg-black w-screen h-screen">
        <Swiper
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          navigation
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {dataGambar.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-screen">
                {/* Gambar */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Overlay Teks */}
        <div className="text-4xl font-bold absolute inset-0 flex flex-col justify-center items-center bg-opacity-30  text-white ">
          <div className="backdrop-blur-sm rounded-md flex items-center justify-center flex-col">
            <p>THE BEST SOLUTION FOR YOUR</p>
            <p> SECURITY NEEDS</p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <Section2 />

      {/* Sekilas Perusahaan */}
      <SekilasPerusahaan />

      {/* Terhubung Dengan Team Kami */}
      <TerhubungDenganKami />
    </div>
  );
};

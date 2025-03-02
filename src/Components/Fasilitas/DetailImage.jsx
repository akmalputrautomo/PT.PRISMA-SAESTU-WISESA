import { X } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function DetailImage({ selectedId, selectedIdSet, combinedData }) {
  return (
    <article className={`w-full top-0 z-20 h-screen ${selectedId ? "block" : "hidden"}  fixed bg-black/50`}>
      <section className="absolute top-2 right-3 z-10">
        <button className="hover:cursor-pointer" onClick={() => selectedIdSet(null)}>
          <X size={36} className="text-white" />
        </button>
      </section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-full">
        {combinedData.map((item, index) => (
          <SwiperSlide key={index}>
            <article className="w-full h-full justify-center flex">
              <figure className="w-10/12 h-full flex flex-col justify-center items-center py-10">
                <img src={item.image} alt="iamge" width={500} height={500} className="w-full md:w-1/3 object-contain md:object-cover rounded-md" />
                <figcaption className="w-full md:w-1/3 max-md:text-sm bg-slate-50 px-2 py-4">{item.title}</figcaption>
              </figure>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

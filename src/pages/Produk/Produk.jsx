import React from "react";
import FrameBorder from "@/Components/Frame_border";
import HeaderProduk from "@/Components/Produk/Header";
import { useNavigate } from "react-router";
import { DataProduk } from "../../utils/Data/Data_Produk";

export const Produk = () => {
  const data = DataProduk.filter((item) => item.id);

  const navigate = useNavigate();
  return (
    <main className="w-full">
      <FrameBorder title="Produk" link="produk" />
      <article className="w-full  px-5 py-10 ">
        <HeaderProduk title="Kategori Produk" />
        <article className="w-full flex justify-center  gap-5 mt-12 ">
          <div className="w-10/12 flex justify-center  gap-10 max-md:flex-wrap">
            {data.map((item, index) => (
              <section
                key={index}
                className="bg-white group shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105"
                onClick={() => navigate(`/produk/${item.id}`)}
              >
                <img
                  src={item.items[0].image}
                  alt={`Thumbnail ${item.title}`}
                  width={200}
                  height={200}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-yellow-500  text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </section>
            ))}
          </div>
        </article>
      </article>
    </main>
  );
};

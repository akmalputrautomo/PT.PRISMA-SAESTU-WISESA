import React from "react";
import { useParams } from "react-router";
import FrameBorder from "../../Components/Frame_border";
import HeaderProduk from "../../Components/Produk/Header";
import { DataProduk } from "../../utils/Data/Data_Produk";

export default function ProdukDetail() {
  const { id } = useParams();
  const data = DataProduk.find((item) => item.id === parseInt(id));

  return (
    <main className="w-full bg-slate-100">
      <FrameBorder title="Produk" link="produk" params={data.id} />
      <article className="w-full  px-5 py-10 ">
        <HeaderProduk title={data.title} deskripsi={data.deskripsi} />
        <article className="w-full flex justify-center  gap-5 mt-12 ">
          <div className=" w-full md:w-10/12 flex justify-center  gap-10 flex-wrap">
            {data.items.map((item, index) => (
              <section
                key={index}
                className="bg-white group shadow-md rounded-lg overflow-hidden  hover:shadow-lg transition-transform transform hover:scale-105  w-96"
              >
                <img
                  src={item.image}
                  alt={`Thumbnail ${item.title}`}
                  width={400}
                  height={400}
                  className="  object-contain"
                />
                <div className="p-4 space-y-3">
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-yellow-500  text-gray-900">
                    {item.jenis}
                  </h3>
                  <p>{item.deskripsi}</p>
                </div>
              </section>
            ))}
          </div>
        </article>
      </article>
    </main>
  );
}

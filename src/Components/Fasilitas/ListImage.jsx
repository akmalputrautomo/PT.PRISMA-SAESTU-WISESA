import { Search } from "lucide-react";
import React from "react";

export default function ListImage({
  WrappingData,
  selectedIdSet,
  active,
  DataFalisitas,
}) {
  return (
    <div className="w-10/12 flex max-md:flex-wrap justify-center md:justify-between  transition-all duration-300  gap-5">
      {active === "All" ? (
        WrappingData.map((group, groupIndex) => (
          <section
            key={`group-${groupIndex}`}
            className="flex transition-all duration-300 flex-col gap-5"
          >
            {group.map((item) => (
              <section
                key={`image-${item.id}`} // Gunakan item.id sebagai key agar unik
                className="group relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="image"
                  width={350}
                  height={350}
                  className="rounded-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="bg-blue-800 w-fit py-1 rounded px-2 group-hover:opacity-100 opacity-0 absolute top-0 z-10">
                  <h1 className="text-sm font-sans text-white">{item.title}</h1>
                </div>
                <div className="bg-slate-500/50 w-full h-full py-1 rounded px-2 group-hover:opacity-100 opacity-0 absolute top-0 flex justify-center items-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => selectedIdSet(item.id)}
                  >
                    <Search size={36} className="hover:text-white" />
                  </button>
                </div>
              </section>
            ))}
          </section>
        ))
      ) : (
        <>
          {DataFalisitas.filter((value) => value.title === active).map(
            (facility) =>
              facility.items.map((item) => (
                <section
                  key={`selected-${item.id}`}
                  className="flex flex-col gap-5"
                >
                  <img
                    src={item.image}
                    alt="image"
                    width={350}
                    height={350}
                    className="rounded-md transition-transform duration-300 hover:scale-105"
                  />
                </section>
              ))
          )}
        </>
      )}
    </div>
  );
}

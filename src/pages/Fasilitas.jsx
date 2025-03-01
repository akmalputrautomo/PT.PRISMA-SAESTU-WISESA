import React from "react";
import FrameBorder from "@/Components/Frame_border";
import HeaderFasilitas from "@/Components/Fasilitas/Header";
import { DataFalisitas } from "@/utils/data/Data_Fasilitas";
import { Search } from "lucide-react";
const chunkArray = (arr, size) => {
  let chunks = arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
  return chunks;
};
export const Fasilitas = () => {
  const Data = DataFalisitas;
  const DataItems = DataFalisitas.flatMap((facility) => facility.items);
  const WrappingData = chunkArray(DataItems, 3);
  const [active, setActive] = React.useState("All");

  console.log(active);

  return (
    <main className="w-full">
      <FrameBorder title="Fasilitas" link="Fasilitas" />
      <article className="w-full px-5 py-10">
        <HeaderFasilitas />
        <article className="w-full flex flex-col justify-center items-center mt-5">
          <header className="w-full py-5">
            <ul className="flex justify-center max-md:flex-wrap gap-5 items-center">
              <li>
                <p
                  className="hover:text-yellow-500 text-sm md:text-lg duration-300 font-sans hover:cursor-pointer font-medium"
                  role="button"
                  onClick={() => setActive("All")}
                >
                  All
                </p>
              </li>
              {Data.map((item) => (
                <li key={item.id}>
                  <p
                    className="hover:text-yellow-500 text-sm md:text-lg duration-300 font-sans hover:cursor-pointer font-medium"
                    role="button"
                    onClick={() => setActive(item.title)}
                  >
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </header>
          <div className="w-10/12 flex max-md:flex-wrap justify-between transition-all duration-300  gap-5">
            {active === "All" ? (
              WrappingData.map((item, index) => (
                <section
                  key={index}
                  className="flex transition-all duration-300 flex-col gap-5"
                >
                  {item.map((item, index) => (
                    <section className="group relative overflow-hidden ">
                      <img
                        key={index}
                        src={item.image}
                        alt="image"
                        width={350}
                        height={350}
                        className="rounded-md transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="bg-blue-800 w-fit py-1 rounded px-2 group-hover:opacity-100 opacity-0 absolute top-0 z-10">
                        <h1 className="text-sm font-sans text-white">
                          {item.title}
                        </h1>
                      </div>
                      <div className="bg-slate-500/50 w-full h-full py-1 rounded px-2 group-hover:opacity-100 opacity-0 absolute top-0 flex justify-center items-center">
                        <button className="cursor-pointer">
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
                  (item) =>
                    item.items.map((item, index) => (
                      <section key={index} className="flex flex-col gap-5">
                        <img
                          src={item.image}
                          alt="image"
                          width={350}
                          height={350}
                          className="rounded-md  transition-transform duration-300 hover:scale-105"
                        />
                      </section>
                    ))
                )}
              </>
            )}
          </div>
        </article>
      </article>
    </main>
  );
};

import { useState } from "react";
import { ImageImport } from "@/utils/ImageImport";
import { Link, useLocation } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { DataProduk } from "@/utils/Data/Data_Produk";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
const ListNavbar = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Tentang Kami",
    link: "/TentangKami",
    list_link: [
      {
        name: "Sekilas Perusahaan",
        link: "/TentangKami/Sekilas",
      },
      {
        name: "Visi Misi",
        link: "/TentangKami/VisiMisi",
      },
      {
        name: "Board Of Director",
        link: "/TentangKami/BoardOfDicertor",
      },
      {
        name: "Mengapa Memilih Kami",
        link: "/TentangKami/MengapaMemilihKami",
      },
    ],
  },
  {
    name: "Produk",
    link: "/produk",
    list_link: DataProduk.map((item) => ({
      name: item.title,
      link: `/Produk${item.id ? `/${item.id}` : ""}`,
    })),
  },
  {
    name: "Fasilitas",
    link: "/fasilitas",
  },
  {
    name: "Karir",
    link: "/karir",
  },
  {
    name: "News",
    link: "/News",
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation().pathname;
  const splitPathname = pathname.split("/")[1].toLowerCase();

  const [transparant, transparantSet] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) transparantSet(true);
    else transparantSet(false);
  });
  // Toggle List Mobile
  const [openListNavbarMobile, setOpenListNavbarMobile] = useState({});
  const toggleMenu = (index) => {
    setOpenListNavbarMobile((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <motion.header
      animate={transparant ? { backgroundColor: "#ffffff" } : { backgroundColor: "rgba(0,0,0,0)", boxShadow: "none" }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="w-full fixed top-0 z-20  font-semibold font-roboto  justify-center  py-5 flex bg-white text-black shadow-md"
    >
      <section className="container w-full flex justify-between lg:mx-28 items-center max-sm:px-4">
        {/* Logo */}
        <Link to={"/"} className="sm:basis-1/5">
          <img src={ImageImport.Logo} className="sm:w-36 w-32 max-[340px]:w-23 max-w-full" />
        </Link>
        {/* List Navbar Desktop */}
        <nav className="w-full hidden md:flex items-center justify-end   ">
          <ul className="w-full flex items-center justify-end gap-9">
            {ListNavbar.map((item, index) => (
              <li key={index} className=" group block  relative  ">
                <Link to={item.link} className="uppercase block overflow-hidden">
                  <div className="flex text-xs lg:text-sm  items-center gap-0.5">
                    {item.name} {item.hasOwnProperty("list_link") && <ChevronDown size={16} />}
                  </div>
                  <span className="w-full group-hover:h-1 block transition-all duration-300 group-hover:opacity-100  group-hover:translate-0 opacity-0 -translate-x-100 bg-orange-500 rounded-2xl "></span>
                </Link>
                {item.hasOwnProperty("list_link") && (
                  <ul className=" hidden group-hover:block  duration-300 transition-all  shadow-lg w-48 space-y-5 bg-white p-3 pb-0    absolute top-5 lg:top-6  text-black">
                    {item.list_link.map((item, index) => (
                      <li key={index} className="">
                        <Link to={item.link} className="max-lg:text-sm w-full hover:text-blue-500 duration-300  font-medium">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li></li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Button Toggle Navbar Mobile */}
        <section className="flex items-center rounded-full shadow-md  md:hidden">
          <button className="hover:bg-gray-200 p-2 rounded-full hover:cursor-pointer" onClick={() => setIsOpen(true)}>
            <Menu />
          </button>
        </section>
      </section>
      {/* About Mobile */}
      <section className={`block ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300  fixed px-4 bg-slate-300 w-full top-0 h-screen  md:hidden`}>
        <header className="w-full pt-5  flex justify-between items-center">
          <figure>
            <img src={ImageImport.Logo} alt="logo" width={150} height={150} className="w-32 max-[340px]:w-23" />
          </figure>
          <section>
            <button className="hover:bg-gray-200 p-2 shadow bg-slate-100 rounded-full hover:cursor-pointer" onClick={() => setIsOpen(false)}>
              <X className=" max-[340px]:size-4" />
            </button>
          </section>
        </header>
        <nav>
          <ul className="max-[340px]:space-y-3  space-y-5 mt-10 divide-y-2 divide-slate-100 max-[340px]:text-xs">
            {ListNavbar.map((item, index) => (
              <li key={index} className="block pb-3">
                {item.hasOwnProperty("list_link") ? (
                  <section className="w-full overflow-hidden">
                    <button className="flex justify-between items-center  w-full cursor-pointer" onClick={() => toggleMenu(index)}>
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    <section className={`w-full  pt-3 transition-all origin-top  duration-300 ${openListNavbarMobile[index] ? "h-auto scale-y-100 opacity-100 " : "h-0 scale-y-0  opacity-0 "} `}>
                      <ul className="space-y-3 pl-2">
                        {item.list_link.map((item, index) => (
                          <li key={index}>
                            <Link to={item.link} className="block text-black hover:text-blue-400 duration-300 ">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </section>
                ) : (
                  <Link to={item.link} className="flex justify-between items-center">
                    {item.name}{" "}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </motion.header>
  );
}

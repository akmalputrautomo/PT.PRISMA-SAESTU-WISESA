import { DataProduk } from "./data/Data_Produk";

export const ListNavbar = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Tentang Kami",
    link: "/TentangKami/Sekilas",
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
];

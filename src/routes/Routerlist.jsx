import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { SekilasPerusahaan } from "../pages/TentangKami/SekilasPerusahaan";
import { VisiMisi } from "../pages/TentangKami/VisiMisi";
import { BoardOfDicertor } from "../pages/TentangKami/BoardOfDicertor";
import { MengapaMemilihKami } from "../pages/TentangKami/MengapaMemilihKami";
import { Produk1 } from "../pages/Produk/Produk1";
import { Produk2 } from "../pages/Produk/Produk2";
import { Produk3 } from "../pages/Produk/Produk3";
import { Fasilitas } from "../pages/Fasilitas";
import { Karir } from "../pages/Karir";
import { News } from "../pages/News";
import { Section5 } from "../Component/home/Section5";
import { Footer } from "../Component/Footer";

export const Routerlist = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Tentang Kami */}
        <Route path="/TentangKami/SekilasPerusahaan" element={<SekilasPerusahaan />} />
        <Route path="/TentangKami/VisiMisi" element={<VisiMisi />} />
        <Route path="/TentangKami/BoardOfDirector" element={<BoardOfDicertor />} />
        <Route path="/TentangKami/MengapaMemilihKami" element={<MengapaMemilihKami />} />

        {/* Produk */}
        <Route path="/Produk/Produk1" element={<Produk1 />} />
        <Route path="/Produk/Produk2" element={<Produk2 />} />
        <Route path="/Produk/Produk3" element={<Produk3 />} />

        {/* Fasilitas */}
        <Route path="/Fasilitas" element={<Fasilitas />} />

        {/* Karir */}
        <Route path="/Karir" element={<Karir />} />

        {/* News */}
        <Route path="/News" element={<News />} />
      </Routes>
      {/* <Section5 /> */}
      <Footer />
    </BrowserRouter>
  );
};

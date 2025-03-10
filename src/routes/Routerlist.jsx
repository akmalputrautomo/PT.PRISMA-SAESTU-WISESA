import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailNews } from "@/pages/DetailNews";
import { HomePage } from "@/pages/HomePage";
import { VisiMisi } from "@/pages/TentangKami/VisiMisi";
import { BoardOfDicertor } from "@/pages/TentangKami/BoardOfDicertor";
import { MengapaMemilihKami } from "@/pages/TentangKami/MengapaMemilihKami";
import { Fasilitas } from "@/pages/Fasilitas";
import { News } from "@/pages/News";
import Navbar from "@/Components/navbar";
import { Footer } from "@/Components/Footer";
import ProdukDetail from "@/pages/Produk/ProdukDetail";
import { Produk } from "@/pages/Produk/Produk";
import { Karir } from "@/pages/Karir/Karir";
import { KarirDetail } from "@/pages/Karir/KarirDetail";
import { Sekilas } from "@/pages/TentangKami/Sekilas";
import { Halamantidaktersedia } from "@/pages/Halamantidaktersedia"; // Tambahkan ini

export const Routerlist = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Tentang Kami */}
        <Route path="/TentangKami/Sekilas" element={<Sekilas />} />
        <Route path="/TentangKami/VisiMisi" element={<VisiMisi />} />
        <Route path="/TentangKami/BoardOfDicertor" element={<BoardOfDicertor />} />
        <Route path="/TentangKami/MengapaMemilihKami" element={<MengapaMemilihKami />} />

        {/* Produk */}
        <Route path="/produk" element={<Produk />} />
        <Route path="/produk/:id" element={<ProdukDetail />} />

        {/* Fasilitas */}
        <Route path="/fasilitas" element={<Fasilitas />} />

        {/* Karir */}
        <Route path="/karir" element={<Karir />} />
        <Route path="/karir/:id" element={<KarirDetail />} />

        {/* News */}
        <Route path="/News" element={<News />} />
        <Route path="/DetailNews/:id" element={<DetailNews />} />

        {/* Halaman 404 */}
        <Route path="*" element={<Halamantidaktersedia />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

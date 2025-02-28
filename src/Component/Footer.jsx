import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full h-[7rem] bg-blue-950 flex items-center px-5 relative">
      {/* Logo & Nama Perusahaan (Kiri) */}
      <div className="flex items-center gap-3 absolute left-5">
        <img
          className="w-[15rem] h-[5rem] rounded-md"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9roHRJvKU-RlBF8z6UMS3F-y29u3gvc6cEBTXvQdETACzc1cK9nxlB-ykO44dq_iT9m3mLRXc20NdnWZuLuG2AWoXPIM8oLnzELxaTgkVc_UMoJ1gjEwtdYMds1X7oJyvJ_sfZ1VudrU/w640-h186/logo+prisma.png"
          alt="Logo PT. PRISMA SAESTU WISESA"
        />
      </div>

      {/* Copyright (Tengah) */}
      <div className="text-white font-semibold text-center mx-auto">
        <p>Copyright © 2025 PT. PRISMA SAESTU WISESA</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

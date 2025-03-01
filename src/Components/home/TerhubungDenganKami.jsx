import React from "react";
import { FaEnvelope } from "react-icons/fa";

export const TerhubungDenganKami = () => {
  const teamMembers = [
    { name: "WAHYU", role: "Direksi", image: "", email: "#" },
    { name: " TISNA PRASETIAWAN", role: "Admin", image: "", email: "#" },
    { name: "SITI RISKIYA NUPUS", role: "Manager Personalia", image: "", email: "#" },
    { name: "ARIF NOVIANTO", role: "Komisaris", image: "", email: "#" },
  ];

  return (
    <div className="container mx-auto py-12 text-center bg-gray-100">
      {/* Judul dengan garis kiri dan kanan */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-1 bg-yellow-500"></div>
        <h2 className="text-2xl font-bold text-gray-800">Terhubung Dengan Team Kami</h2>
        <div className="w-16 h-1 bg-yellow-500"></div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={member.image} className="w-24 h-24 rounded-full border-2 border-black object-cover" />
            <h3 className="mt-3 text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <a href={member.email} className="mt-2 text-black hover:text-yellow-500 transition">
              <FaEnvelope size={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

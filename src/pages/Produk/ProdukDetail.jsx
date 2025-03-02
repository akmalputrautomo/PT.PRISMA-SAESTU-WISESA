import React from "react";
import { useParams } from "react-router";

export default function ProdukDetail() {
  const { id } = useParams();

  return <main className="mt-24 ">Produk1 {id}</main>;
}

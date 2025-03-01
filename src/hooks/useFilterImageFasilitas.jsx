import { useMemo, useState } from "react";
import { DataFalisitas } from "../utils/Data/Data_Fasilitas";

export default function useFilterImageFasilitas() {
  const DataItems = DataFalisitas.flatMap((facility) => facility.items);

  const [selectedId, selectedIdSet] = useState(null);

  const selectedData = DataItems.find((item) => item.id === selectedId);

  // Ambil sisa data yang tidak terpilih
  const remainingData = DataItems.filter((item) => item.id !== selectedId);

  // Gabungkan data yang dipilih duluan dengan data lainnya
  const combinedData = useMemo(() => {
    return selectedData ? [selectedData, ...remainingData] : remainingData;
  }, [selectedData]);
  return [selectedId, selectedIdSet, combinedData];
}

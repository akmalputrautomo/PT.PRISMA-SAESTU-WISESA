import { useMemo, useState } from "react";
import { DataFalisitas } from "../utils/Data/Data_Fasilitas";

export default function useFilterImageFasilitas() {
  // Flatten array agar semua items masuk dalam satu array
  const DataItems = useMemo(
    () => DataFalisitas.flatMap((facility) => facility.items),
    []
  );

  const [selectedId, selectedIdSet] = useState(0);
  console.log(selectedId);

  // Cari data yang dipilih berdasarkan selectedId
  const selectedData = useMemo(
    () => DataItems.find((item) => item.id === selectedId) || null,
    [selectedId, DataItems]
  );

  // Ambil sisa data yang tidak terpilih
  const remainingData = useMemo(
    () => DataItems.filter((item) => item.id !== selectedId),
    [selectedId, DataItems]
  );

  // Gabungkan selectedData dengan remainingData
  const combinedData = useMemo(() => {
    return selectedData ? [selectedData, ...remainingData] : remainingData;
  }, [selectedData, remainingData]);

  return [selectedId, selectedIdSet, combinedData];
}

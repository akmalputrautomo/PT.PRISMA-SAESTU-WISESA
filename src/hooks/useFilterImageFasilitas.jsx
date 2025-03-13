import { useMemo, useState } from "react";
import { DataFalisitas } from "@/utils/data/Data_Fasilitas";

export function useFilterImageFasilitas() {
  const DataItems = useMemo(
    () => DataFalisitas.flatMap((facility) => facility.items),
    []
  );

  const [selectedId, selectedIdSet] = useState(0);

  const selectedData = useMemo(
    () => DataItems.find((item) => item.id === selectedId) || null,
    [selectedId, DataItems]
  );

  const remainingData = useMemo(
    () => DataItems.filter((item) => item.id !== selectedId),
    [selectedId, DataItems]
  );

  const combinedData = useMemo(() => {
    return selectedData ? [selectedData, ...remainingData] : remainingData;
  }, [selectedData, remainingData]);

  return [selectedId, selectedIdSet, combinedData];
}

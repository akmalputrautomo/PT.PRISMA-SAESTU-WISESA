const chunkArray = (arr, size) => {
  let chunks = arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
  return chunks;
};
export default chunkArray;

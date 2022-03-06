export const getDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if (typeof data === "string") {
    const parsedData = JSON.parse(data);
    return parsedData;
  }
  return [];
};

export const setDataToLocalStorage = (key: string, data: string): any => {
  localStorage.setItem(key, data);
};

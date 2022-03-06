import { useQuery } from "react-query";
import { getDataFromLocalStorage } from "../apis/localStorageHandlers";

export const useTodos = (onSuccess: (data: ITodo[]) => void) => {
  return useQuery<ITodo[], Error>(
    "fetch-todos",
    () => getDataFromLocalStorage("todos"),
    {
      onSuccess,
    }
  );
};

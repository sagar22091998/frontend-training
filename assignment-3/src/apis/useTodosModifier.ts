import { useMutation } from "react-query";
import { setDataToLocalStorage } from "./localStorageHandlers";

export const useTodosModifier = (onSuccess: () => void) => {
  return useMutation<void, Error, ITodo[]>(
    (todos) => setDataToLocalStorage("todos", JSON.stringify(todos)),
    {
      onSuccess,
    }
  );
};

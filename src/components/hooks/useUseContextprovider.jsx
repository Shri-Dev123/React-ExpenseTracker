import { useContext } from "react";
import { createMyContext } from "../../context/MyContext";

export default function useUseContextProvider() {
  return useContext(createMyContext);
}

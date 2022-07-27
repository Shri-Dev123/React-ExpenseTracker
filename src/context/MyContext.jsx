import React, { createContext, useReducer } from "react";
import myReducer from "./myReducer";

const initialState = {
  transactions: []
};
export const createMyContext = createContext();

export default function MyContextProvider({ children }) {
  const [state, dispatch] = useReducer(myReducer, initialState);

  function deleteTransaction(id) {
    return dispatch({ type: "Delete-Transaction", payload: id });
  }

  function addTransaction({ id, text, amount }) {
    return dispatch({ type: "Add-Transaction", payload: { id, text, amount } });
  }

  return (
    <createMyContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </createMyContext.Provider>
  );
}

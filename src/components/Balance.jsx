import React from "react";
import useExpense from "./hooks/useExpense";
import useIncome from "./hooks/useIncome";

export default function Balance() {
  const balance = useIncome() - useExpense() * -1;
  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">₹{balance}</h1>
    </div>
  );
}

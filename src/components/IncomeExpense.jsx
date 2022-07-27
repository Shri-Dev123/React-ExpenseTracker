import { useContext } from "react";
import { createMyContext } from "../context/MyContext";

export default function IncomeExepense() {
  const { transactions } = useContext(createMyContext);

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, curr) => acc + curr, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +₹{income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -₹{expense - expense * 2}
        </p>
      </div>
    </div>
  );
}

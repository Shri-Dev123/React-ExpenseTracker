import { useContext } from "react";
import { createMyContext } from "../context/MyContext";

export default function TransactionList() {
  const { transactions, deleteTransaction } = useContext(createMyContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction, index) => (
          <li key={index} className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>₹{transaction.amount}</span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

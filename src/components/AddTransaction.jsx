import { useState } from "react";
import useUseContextProvider from "./hooks/useUseContextprovider";

export default function AddTransaction() {
  const { addTransaction } = useUseContextProvider();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h3>Add new transaction</h3>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
          const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: +amount
          };
          addTransaction(newTransaction);
          setAmount(0);
          setText("");
        }}
      >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button>Add transaction</button>
      </form>
    </div>
  );
}

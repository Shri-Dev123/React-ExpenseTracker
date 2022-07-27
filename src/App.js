import "./styles.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExepense from "./components/IncomeExpense";
import Transaction from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

export default function App() {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExepense />
      <Transaction />
      <AddTransaction />
    </div>
  );
}

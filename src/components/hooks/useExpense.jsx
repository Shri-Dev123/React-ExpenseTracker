import useUseContextProvider from "./useUseContextprovider";

export default function useExpense() {
  const { transactions } = useUseContextProvider();
  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, curr) => acc + curr, 0);
  return expense;
}

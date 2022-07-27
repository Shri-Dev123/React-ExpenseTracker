import useUseContextProvider from "./useUseContextprovider";

export default function useIncome() {
  const { transactions } = useUseContextProvider();
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, curr) => acc + curr, 0);
  return income;
}

export default function myReducer(state, action) {
  switch (action.type) {
    case "Add-Transaction":
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case "Delete-Transaction":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        )
      };

    default:
      return {};
  }
}

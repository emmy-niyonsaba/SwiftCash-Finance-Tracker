import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { FinanceState, Transaction } from "../types/FinancialTypes";
import { useLocalStorage } from "../hooks/useLocalStorage";

type FinanceAction =
  | { type: "HYDRATE_TRANSACTIONS"; payload: Transaction[] }
  | { type: "ADD_TRANSACTION"; payload: Transaction }
  | { type: "DELETE_TRANSACTION"; payload: { index: number } };

type FinanceContextValue = {
  state: FinanceState;
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (index: number) => void;
  hydrateTransactions: (transactions: Transaction[]) => void;
  totals: {
    income: number;
    expense: number;
    balance: number;
  };
};

const FinanceContext = createContext<FinanceContextValue | undefined>(undefined);

function financeReducer(state: FinanceState, action: FinanceAction): FinanceState {
  switch (action.type) {
    case "HYDRATE_TRANSACTIONS": {
      return { transactions: action.payload };
    }
    case "ADD_TRANSACTION": {
      return { transactions: [...state.transactions, action.payload] };
    }
    case "DELETE_TRANSACTION": {
      return {
        transactions: state.transactions.filter((_, index) => index !== action.payload.index),
      };
    }
    default:
      return state;
  }
}

export function FinanceProvider({ children }: { children: ReactNode }) {
  const [storedTransactions, setStoredTransactions] = useLocalStorage<Transaction[]>("transactions", []);

  const [state, dispatch] = useReducer(financeReducer, {
    transactions: storedTransactions,
  });

  useEffect(() => {
    setStoredTransactions(state.transactions);
  }, [setStoredTransactions, state.transactions]);

  const addTransaction = useCallback((transaction: Transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }, []);

  const deleteTransaction = useCallback((index: number) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: { index } });
  }, []);

  const hydrateTransactions = useCallback((transactions: Transaction[]) => {
    dispatch({ type: "HYDRATE_TRANSACTIONS", payload: transactions });
  }, []);

  const totals = useMemo(() => {
    const income = state.transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    const expense = state.transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    return {
      income,
      expense,
      balance: income - expense,
    };
  }, [state.transactions]);

  const value = useMemo(
    () => ({ state, addTransaction, deleteTransaction, hydrateTransactions, totals }),
    [state, addTransaction, deleteTransaction, hydrateTransactions, totals]
  );

  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>;
}

export function useFinance() {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error("useFinance must be used within a FinanceProvider");
  }
  return context;
}

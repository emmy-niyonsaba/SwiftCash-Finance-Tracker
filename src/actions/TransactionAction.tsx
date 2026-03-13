
import { redirect } from "react-router-dom";
import type { Transaction, TransactionType, Category } from "../types/FinancialTypes";

export const transactionAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const transaction: Transaction = {
    id: crypto.randomUUID(),
    description: formData.get("description") as string,
    amount: Number(formData.get("amount")),
    type: formData.get("type") as TransactionType,
    category: formData.get("category") as Category,
    date: new Date().toISOString(),
  };

  const stored = JSON.parse(localStorage.getItem("transactions") || "[]");
  stored.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(stored));

  return redirect("/transactions");
}
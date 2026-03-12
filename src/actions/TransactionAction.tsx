
import { redirect } from "react-router-dom";
import type{ Transaction } from "../types/FinancialTypes";

export const transactionAction = async ({request}) => {
const formData =  await request.formData()
 const transaction:Transaction = {
    id: crypto.randomUUID(),
    description: formData.get("description"),
    amount: Number(formData.get("amount")),
    type: formData.get("type"),
    category: formData.get("category"),
    date: new Date().toISOString(),
  };

  const stored = JSON.parse(localStorage.getItem("transactions") || "[]");

  stored.push(transaction);

  localStorage.setItem("transactions", JSON.stringify(stored));

  return redirect("/transactions");
}

import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function DeleteTransaction() {
  const { transactionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
    const updated = transactions.filter((_: unknown, index: number) => index !== parseInt(transactionId ?? "-1"));
    localStorage.setItem("transactions", JSON.stringify(updated));
    navigate("/transactions", { replace: true });
  }, [transactionId, navigate]);

  return null;
}


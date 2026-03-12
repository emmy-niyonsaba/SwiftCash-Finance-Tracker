

import  {useParams,useNavigate, Link} from 'react-router-dom'

export default function DeleteTransaction() {
    const {transactionId} = useParams()
    console.log("Transaction ID to delete:", transactionId);
  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  console.log(transactions);
    const updatedTransactions = transactions.filter((_: any, index: number) => index !== parseInt(transactionId || "-1"));
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    console.log("Transaction deleted successfully!");
    console.log("Updated transactions:", updatedTransactions);

    // alert ("Transaction deleted successfully!");

    const navigate = useNavigate();
    navigate("/transactions");

    return(
        <div>
            <h1>Transaction deleted successfull</h1>
            <Link to="/transactions">back</Link>
        </div>
    )

}

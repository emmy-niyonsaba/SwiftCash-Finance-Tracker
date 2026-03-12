import { useRef, useEffect } from "react";
import { Form } from "react-router-dom";

function AddTransaction() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className=" flex items-center justify-center mx-auto">
      <div className="  bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Transaction
        </h1>

        <Form method="post" className="space-y-5 w-full">

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>

            <input
              ref={inputRef}
              name="description"
              placeholder="Enter description"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Amount
            </label>

            <input
              type="number"
              name="amount"
              min="1"
              placeholder="Enter amount"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Transaction Type
            </label>

            <select
              name="type"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Transaction
          </button>

        </Form>
      </div>
    </div>
  );
}

export default AddTransaction;
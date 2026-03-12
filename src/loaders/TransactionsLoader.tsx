export  function transactionsLoader() {
  const data =  localStorage.getItem("transactions");

  return data ? JSON.parse(data) : [];
} 
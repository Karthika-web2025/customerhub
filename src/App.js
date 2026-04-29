import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./frontend/components/Navbar";
import CustomerForm from "./frontend/components/CustomerForm";
import CustomerTable from "./frontend/components/CustomerTable";

function App() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const res = await axios.get("http://localhost:5000/customers");
    setCustomers(res.data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/customers/${id}`);
    fetchCustomers();
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <CustomerForm onCustomerAdded={fetchCustomers} />
        <CustomerTable customers={customers} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
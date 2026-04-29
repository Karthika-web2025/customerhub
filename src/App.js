import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./frontend/components/Navbar";
import CustomerForm from "./frontend/components/CustomerForm";
import CustomerTable from "./frontend/components/CustomerTable";

function App() {
  const [customers, setCustomers] = useState([]);

  const API_URL = "https://customerhub-2.onrender.com/";

  const fetchCustomers = async () => {
    const res = await axios.get(`${API_URL}/customers`);
    setCustomers(res.data);
  };

  useEffect(() => {
    const timer = setTimeout(()=>{
    fetchCustomers();

    },5000)
    return()=>clearTimeout(timer)
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/customers/${id}`);
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
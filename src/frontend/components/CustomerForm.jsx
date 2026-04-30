import React, { useState } from "react";
import axios from "axios";
import "../../App.css";

function CustomerForm({ onCustomerAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://customerhub-2.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (!name || !email || !phone) {
      alert("All fields are required!");
      return;
    }

     // Email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone: only digits, length 10
  const phonePattern = /^[0-9]{10}$/;

  if (!name || !email || !phone) {
    alert("All fields are required!");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Enter a valid email address");
    return;
  }

   if (!phonePattern.test(phone)) {
    alert("Phone must be 10 digits");
    return;
  }
    try {
      setLoading(true);

      await axios.post(`${API_URL}/customers`, {
        name,
        email,
        phone
      });

      setName("");
      setEmail("");
      setPhone("");

      onCustomerAdded();
    } catch (err) {
      alert("Error adding customer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="input"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button className="sub-btn" disabled={loading}>
        {loading ? "Adding..." : "Submit"}
      </button>
    </form>
  );
}

export default CustomerForm;
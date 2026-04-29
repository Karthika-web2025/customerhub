const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// In-memory storage
let customers = [];
let idCounter = 1;

// ➕ Add customer
app.post("/customers", (req, res) => {
  const { name, email, phone } = req.body;

  const newCustomer = {
    id: idCounter++,
    name,
    email,
    phone
  };

  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

// 📋 Get all customers
app.get("/customers", (req, res) => {
  res.json(customers);
});

// ❌ Delete customer
app.delete("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);

  customers = customers.filter(c => c.id !== id);

  res.json({ message: "Customer deleted successfully" });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
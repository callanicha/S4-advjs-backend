import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// --- Middlewares ---
app.use(cors());
app.use(express.json()); 

// --- Fake in-memory storage (for demo) ---
const users = [];
const products = [];

// --- Routes ---

// Signup
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if user already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({ name, email, password });
  res.status(201).json({ message: "Signup successful" });
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  
  // Normally you'd generate a real token here
  res.status(200).json({ 
    token: "fake-jwt-token", 
    name: user.name, 
    email: user.email 
  });
});

// Create Product (protected - but no auth for demo)
app.post("/products", (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price || !description) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description,
  };
  products.push(newProduct);
  res.status(201).json({ message: "Product created", product: newProduct });
});

// Get all Products
app.get("/products", (req, res) => {
  res.status(200).json(products);
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
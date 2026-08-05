

// Mengimpor library express yang sudah diinstal
const express = require("express");

// Membuat instance aplikasi Express
const app = express();
const PORT = 3000;

// Middleware bawaan agar Express bisa membaca JSON dari request
app.use(express.json());

// Route paling dasar, hanya untuk mengecek server hidup
app.get("/", (req, res) => {
    res.send("Selamat datang di API Tokomurah!");
});

// Menjalankan server dan mendengarkan di PORT yang ditentukan
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

app.get("/api/ping", (req, res) => {
  // res.json() otomatis mengubah objek JavaScript menjadi format JSON
  res.json({
    status: "success",
    message: "pong",
    waktuServer: new Date().toISOString(),
  });
});

// server.js (tambahan)
// Data sementara di memori (akan diganti database sungguhan di Hari 4)
let produk = [
  { id: 1, nama: "Kaos Polos Premium", harga: 89000 },
  { id: 2, nama: "Tas Ransel Kasual", harga: 145000 },
  { id: 3, nama: "Sepatu Sneakers", harga: 299000 },
];

// Variabel penghitung id agar produk baru selalu punya id unik
let idBerikutnya = 4;




// GET /api/products -> mengambil semua produk
app.get("/api/products", (req, res) => {
  res.json({ status: "success", data: produk });
});

// GET /api/products/:id -> mengambil satu produk berdasarkan id
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = produk.find((p) => p.id === id);

  if (!item) {
    return res.status(404).json({ status: "error", message: "Produk tidak ditemukan" });
  }

  res.json({ status: "success", data: item });
});


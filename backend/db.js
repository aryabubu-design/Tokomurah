const Database = require("better-sqlite3");
const db = new Database("Tokomurah.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS produk (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    harga INTEGER NOT NULL
  )
`);

const jumlahProduk = db.prepare("SELECT COUNT(*) AS count FROM produk").get();
if (jumlahProduk.count === 0) {
  const tambahProduk = db.prepare("INSERT INTO produk (nama, harga) VALUES (?, ?)");

  tambahProduk.run("Kaos boxy", 150000);
  tambahProduk.run("Tas Ransel", 300000);
  tambahProduk.run("celana y2k", 500000);
  tambahProduk.run("hoodie preface", 650000);

  console.log("Data awal produk berhasil ditambahkan ke database.");cd
}

const semuaProduk = db.prepare("SELECT * FROM produk").all();
console.log(semuaProduk);

module.exports = db;

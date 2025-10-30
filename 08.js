// ======================================================
// 8. Exception Handling dalam JavaScript
// ======================================================

// 1. Konsep Penanganan Kesalahan dalam Pemrograman
console.log("=== 1. Try - Catch - Finally ===");

try {
  let mahasiswa = ["Andi", "Budi", "Citra"];
  // Ini akan error karena indeks ke-5 tidak ada (undefined)
  console.log(mahasiswa[5].toUpperCase());
} catch (error) {
  console.log("Terjadi error: " + error.message);
} finally {
  console.log("Proses selesai.\n");
}



// 2. Penggunaan throw
console.log("=== 2. Throw Error (Custom Validation) ===");

function cekUsia(usia) {
  if (usia < 18) {
    // Melempar error secara manual
    throw new Error("Maaf, Anda belum cukup umur!");
  }
  return "Selamat datang!";
}

try {
  console.log(cekUsia(16)); // Coba ubah ke 20 untuk melihat hasil normal
} catch (error) {
  console.log("Terjadi kesalahan: " + error.message);
} finally {
  console.log("Pengecekan usia selesai.\n");
}



// 3. Custom Error Handling (membuat error class sendiri)
console.log("=== 3. Custom Error Class ===");

// Membuat class error khusus
class ValidasiError extends Error {
  constructor(pesan) {
    super(pesan);
    this.name = "ValidasiError";
  }
}

function cekNama(nama) {
  if (nama.length < 3) {
    throw new ValidasiError("Nama terlalu pendek!");
  }
  return `Nama valid: ${nama}`;
}

try {
  console.log(cekNama("Jo")); // Coba ubah ke "Joko" untuk hasil normal
} catch (error) {
  if (error instanceof ValidasiError) {
    console.log("Terjadi kesalahan validasi: " + error.message);
  } else {
    console.log("Kesalahan lain: " + error.message);
  }
} finally {
  console.log("Pengecekan nama selesai.");
}

// Class Induk
class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  belajar() {
    console.log(this.nama + " sedang belajar.");
  }

  info() {
    console.log("Nama: " + this.nama + ", NIM: " + this.nim + ", Jurusan: " + this.jurusan);
  }
}

// Class Anak 1
class MahasiswaS1 extends Mahasiswa {
  ujian() {
    console.log(this.nama + " sedang ujian skripsi.");
  }
}

// Class Anak 2
class MahasiswaS2 extends Mahasiswa {
  tugas() {
    console.log(this.nama + " sedang mengerjakan tugas penelitian.");
  }
}

// Membuat 3 objek
const mhs1 = new Mahasiswa("Ilqi", "12345", "Informatika");
const mhs2 = new MahasiswaS1("Budi", "67890", "Sistem Informasi");
const mhs3 = new MahasiswaS2("Sari", "54321", "Teknik Komputer");

// Panggil 4 method
mhs1.belajar();   // Method 1
mhs1.info();      // Method 2

mhs2.ujian();     // Method 3
mhs3.tugas();     // Method 4

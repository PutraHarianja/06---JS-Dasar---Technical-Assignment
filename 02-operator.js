/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

let pengeluaran = 750000 + 2000000 + 1000000 + 250000;
let gaji = 5000000 + (0.1 * 5000000) + (0.05 * 5000000);
/// Sisa Gaji
const sisaGaji = gaji - pengeluaran;
console.log("gaji yang tersisa adalah " + sisaGaji);


/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = (oneInString == oneInNumber);
console.log("Apakah oneInString dan oneInNumber sama(tipe data tidak termasuk)? " + isSame);


/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = (studentA > studentB);
console.log("Apakah studentA lebih besar dari studentB ? " + isHigher);


/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = (oneInString === oneInNumber);
console.log("Apakah oneInString dan oneInNumber sama(tipe data juga dihitung)? " + final);;

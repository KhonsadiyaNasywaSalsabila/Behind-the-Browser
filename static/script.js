// PETUNJUK 1 (JavaScript Global Variable & Console): Bagian flag pertama ada di sini.
// Menggunakan 'var' agar variabel ini mudah diakses dari console browser.
var firstFlagPart = "picoCTF{s3cr3ts_";

// Log bagian pertama flag ke console saat script dimuat
console.log("Petunjuk Konsol: Bagian pertama flag Anda adalah: " + firstFlagPart);
console.log("PETUNJUK: Coba ketik 'firstFlagPart' di konsol untuk mengonfirmasi nilainya!");


// PETUNJUK 2 (Local Storage): Bagian flag: ar3_fun_
localStorage.setItem('flag_part_local', 'ar3_fun_');

// PETUNJUK 3 (Session Storage): Bagian flag: t0_f1nd}
sessionStorage.setItem('flag_part_session', 't0_f1nd}');

// Event listener untuk tombol "Tampilkan Petunjuk"
document.getElementById('showCluesBtn').addEventListener('click', () => {
    const cluesMessageDiv = document.getElementById('cluesMessage');
    cluesMessageDiv.classList.remove('hidden');
    cluesMessageDiv.classList.add('success');
    cluesMessageDiv.innerHTML = `
        **PETUNJUK:**
        <br>1. Web browser Anda mungkin tahu lebih banyak daripada yang Anda kira.
        <br>2. Bagaimana jika Anda mencoba 'berbicara' dengan halaman web ini secara langsung?
        <br>3. Data, bahkan yang 'sementara' atau 'lokal', bisa meninggalkan jejak.
        <br>Gabungkan semua bagian untuk mendapatkan flag lengkap!
    `;
    console.log("Jangan lupa cek Local Storage dan Session Storage di tab Application!");
});
// Mengambil semua elemen HTML yang dibutuhkan
const btnTraktir = document.getElementById('btn-traktir');
const btnHadiah = document.getElementById('btn-hadiah');
const emojiDisplay = document.getElementById('emoji-display');
const mainQuestion = document.getElementById('main-question');
const textMessage = document.getElementById('text-message');

// Fitur 1: Membuat tombol "Kado Aja" kabur saat didekati/disentuh (Prank)
function pindahTombol() {
    // Menghitung koordinat acak di dalam area layar browser
    const x = Math.random() * (window.innerWidth - btnHadiah.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - btnHadiah.offsetHeight - 20);
    
    // Mengubah posisi tombol menjadi fixed agar bisa meloncat bebas
    btnHadiah.style.position = 'fixed';
    btnHadiah.style.left = `${x}px`;
    btnHadiah.style.top = `${y}px`;
}

// Memicu fungsi kabur saat kursor mendekat (PC) atau layar disentuh (HP)
btnHadiah.addEventListener('mouseover', pindahTombol);
btnHadiah.addEventListener('touchstart', pindahTombol);

// Fitur 2: Aksi ketika Esa klik tombol "Traktiran Dong!"
btnTraktir.addEventListener('click', () => {
    // Mengubah konten kartu menjadi pesan sukses/selamat
    emojiDisplay.innerHTML = '🍕🎉🥳'; // Mengubah emoji utama
    mainQuestion.innerHTML = 'Asyik, Ditunggu Traktirannya! 💸'; // Mengubah teks pertanyaan
    textMessage.innerHTML = 'Keputusan mantap, Sa! Nanti malam langsung gass tempat makan ya, ditunggu pc-annya. Btw, HBD sekali lagi buat lo! 👑✨';
    
    // Menyembunyikan kedua tombol setelah berhasil diklik
    btnHadiah.style.display = 'none';
    btnTraktir.style.display = 'none';
    
    // Memunculkan efek konfeti sederhana
    buatKonfeti();
});

// Fitur Tambahan: Efek konfeti berhamburan sederhana
function buatKonfeti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = ['#00f2fe', '#4facfe', '#ff007f', '#ffff00'][Math.floor(Math.random() * 4)];
        document.body.appendChild(confetti);
        
        // Menghapus elemen konfeti setelah animasi selesai agar tidak memberatkan browser
        setTimeout(() => confetti.remove(), 4000);
    }
}

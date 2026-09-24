# Portofolio Pribadi - Dimas Surya Alamsyah

## Deskripsi
Website ini adalah portofolio pribadi sederhana yang dibuat menggunakan **HTML, CSS, dan JavaScript**. Website menampilkan informasi diri, keahlian, daftar proyek, serta form kontak.

Tampilan website dibuat responsif sehingga dapat digunakan pada laptop, tablet, maupun smartphone.

## Teknologi yang Digunakan
- **HTML5**: membuat struktur dan isi halaman website.
- **CSS3**: mengatur tampilan, warna, layout, animasi, dan desain responsif.
- **JavaScript**: membuat website menjadi interaktif, seperti menu mobile, filter proyek, modal detail proyek, validasi form, dan animasi angka.
- **Google Fonts (Poppins)**: digunakan untuk membuat tulisan website lebih menarik.

## Struktur File
text
project/
├── index.html
├── script.js
└── style.css


### 1. `index.html`
File ini merupakan struktur utama website.

Di dalamnya terdapat beberapa bagian:
- **Navbar** untuk menu Beranda, Tentang, Keahlian, Portofolio, dan Kontak.
- **Hero/Beranda** yang menampilkan nama dan profesi.
- **Tentang Saya** yang berisi informasi pribadi dan statistik.
- **Keahlian & Teknologi** yang menampilkan kemampuan seperti HTML, CSS, JavaScript, UI/UX, dan Git.
- **Portofolio Proyek** yang berisi beberapa contoh proyek.
- **Kontak** untuk mengirim pesan.
- Tombol dan elemen interaktif yang akan dikendalikan oleh JavaScript.

### 2. `style.css`
File ini digunakan untuk mengatur tampilan website.

Beberapa pengaturan yang dibuat:
- Tema warna **navy/dark** dengan aksen cyan dan teal.
- Layout menggunakan **Flexbox dan CSS Grid**.
- Tombol memiliki efek hover.
- Navbar berubah saat halaman di-scroll.
- Tersedia desain responsif untuk ukuran layar yang berbeda.
- Terdapat animasi pada beberapa bagian website.

### 3. `script.js`
File JavaScript digunakan untuk membuat fitur website menjadi interaktif.

Fitur utamanya:
- Membuka dan menutup menu hamburger pada tampilan mobile.
- Mengubah tampilan navbar ketika halaman di-scroll.
- Tombol **Back to Top**.
- Filter kategori proyek seperti Web App, Landing Page, dan UI/UX.
- Menampilkan detail proyek menggunakan modal.
- Validasi form kontak.
- Menampilkan notifikasi ketika form berhasil diproses.
- Interaksi tombol download CV.
- Animasi angka statistik ketika bagian Tentang Saya terlihat.

## Cara Menjalankan Website

### Cara 1 - Langsung di Browser
1. Pastikan ketiga file berada dalam satu folder.
2. Buka file index.html.
3. Website akan terbuka menggunakan browser seperti Chrome atau Edge.

### Cara 2 - Menggunakan Visual Studio Code
1. Buka Visual Studio Code.
2. Pilih File > Open Folder.
3. Pilih folder yang berisi index.html, style.css, dan script.js.
4. Buka file index.html.
5. Klik kanan pada index.html.
6. Pilih **Open with Live Server** jika ekstensi Live Server sudah terpasang.
7. Website akan terbuka di browser.

## Alur Kerja Program
Secara sederhana, cara kerja website adalah:


index.html
    ↓
Membuat struktur halaman
    ↓
style.css
    ↓
Mengatur tampilan website
    ↓
script.js
    ↓
Menambahkan interaksi
    ↓
Website Portofolio

## Fitur Interaktif
Website memiliki beberapa fitur yang menggunakan JavaScript:

1. **Menu Mobile**
   Menu navigasi dapat dibuka dan ditutup menggunakan tombol hamburger.

2. **Navigasi Aktif**
   Menu navigasi akan menyesuaikan dengan bagian halaman yang sedang dilihat.

3. **Filter Portofolio**
   Pengguna dapat memilih kategori proyek untuk menampilkan proyek tertentu.

4. **Modal Detail Proyek**
   Tombol detail dapat menampilkan informasi proyek, fitur, dan teknologi yang digunakan.

5. **Validasi Form**
   Form kontak akan memeriksa nama, email, subjek, dan pesan sebelum diproses.

6. **Animasi Statistik**
   Angka statistik akan berjalan dari angka kecil sampai nilai target ketika bagian statistik mulai terlihat.

## Catatan
Beberapa link seperti GitHub, LinkedIn, dan file CV masih berupa contoh atau placeholder. Link tersebut dapat diganti dengan link pribadi yang sebenarnya.

## Kesimpulan
Website ini merupakan contoh portofolio pribadi yang menggabungkan **HTML sebagai struktur, CSS sebagai tampilan, dan JavaScript sebagai interaksi**. Kode dibuat agar website terlihat modern, responsif, dan mudah digunakan.

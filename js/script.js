document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
     1. MOBILE NAVIGATION & HAMBURGER MENU
     ========================================================== */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle buka/tutup menu mobile
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Menutup menu mobile saat salah satu link diklik
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Menutup menu jika klik di luar area menu
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ==========================================================
     2. STICKY HEADER & ACTIVE NAV INDICATOR ON SCROLL
     ========================================================== */
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');

  const handleScrollEffects = () => {
    const scrollY = window.scrollY;

    // Header background blur saat scroll
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Active navigation link highlighting
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScrollEffects);

  /* ==========================================================
     3. BACK TO TOP BUTTON
     ========================================================== */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================
     4. PORTOFOLIO CATEGORY FILTER
     ========================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Perbarui tombol aktif
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Tampilkan/sembunyikan kartu
      portfolioCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === cardCategory) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ==========================================================
     5. MODAL DETAIL PROYEK
     ========================================================== */
  // Database data proyek untuk tampilan modal detail
  const projectDetails = {
    1: {
      title: "Sistem Manajemen Kas Mahasiswa",
      category: "Web Application",
      description: "Aplikasi web ringan yang dirancang khusus untuk mempermudah bendahara kelas dalam mencatat iuran rutin anggota, menghitung total kas secara real-time, serta mencatat pos pengeluaran beserta buktinya.",
      features: [
        "Pencatatan pemasukan dan pengeluaran kas kelas",
        "Kalkulasi saldo otomatis tanpa reload halaman",
        "Ekspor ringkasan laporan kas ke format teks/cetak",
        "Desain responsif yang mudah dibuka langsung dari ponsel"
      ],
      tech: ["HTML5", "CSS3", "JavaScript DOM", "Local Storage"],
      liveDemo: "#",
      github: "https://github.com"
    },
    2: {
      title: "Kopi Senja - Website Kafe Lokal",
      category: "Landing Page",
      description: "Halaman landing page interaktif untuk sebuah kedai kopi lokal bernuansa santai. Memuat katalog racikan kopi andalan, ulasan pelanggan, jam operasional, dan integrasi penunjuk arah peta.",
      features: [
        "Desain bertema hangat dan modern",
        "Katalog menu makanan & kopi interaktif",
        "Animasi hover halus pada galeri foto",
        "Formulir reservasi meja sederhana"
      ],
      tech: ["HTML5", "CSS Flexbox & Grid", "JavaScript Event"],
      liveDemo: "#",
      github: "https://github.com"
    },
    3: {
      title: "Kalkulator Pajak & Gaji Bersih",
      category: "Web Application",
      description: "Alat bantu digital untuk mempermudah pekerja dan freelancer di Indonesia menghitung perkiraan potongan pajak penghasilan bulanan serta gaji bersih yang diterima dengan akurat.",
      features: [
        "Perhitungan instan begitu angka nominal diketik",
        "Pilihan status tanggungan keluarga (PTKP)",
        "Tampilan rincian potongan yang transparan dan mudah dibaca",
        "Dapat digunakan tanpa koneksi internet (offline ready)"
      ],
      tech: ["JavaScript DOM", "CSS Grid", "Regex Validation"],
      liveDemo: "#",
      github: "https://github.com"
    },
    4: {
      title: "Redesain Antarmuka Belajar Online",
      category: "UI/UX Design",
      description: "Eksplorasi konsep tampilan aplikasi kursus daring yang memprioritaskan kemudahan membaca materi di layar ponsel kecil, navigasi materi terstruktur, dan mode fokus gelap (dark mode).",
      features: [
        "Design system lengkap dengan palet warna navy & aksen teal",
        "Alur navigasi mulai dari katalog kursus hingga kuis akhir",
        "Prototipe interaktif untuk pengujian kenyamanan pengguna",
        "Tata letak tipografi yang ramah mata"
      ],
      tech: ["Figma", "UI/UX Principles", "Design Tokens", "Wireframing"],
      liveDemo: "#",
      github: "https://github.com"
    },
    5: {
      title: "Katalog Produk UMKM Nusantara",
      category: "Landing Page & Catalog",
      description: "Showcase berbasis web untuk memamerkan produk kerajinan tangan dari pelaku UMKM daerah. Dilengkapi fitur penyaringan kategori barang instan menggunakan manipulasi DOM.",
      features: [
        "Penyaringan produk real-time tanpa jeda muat ulang",
        "Tampilan kartu produk beresolusi tinggi dengan label harga",
        "Tombol pesan cepat langsung terhubung ke WhatsApp penjual",
        "Ukuran berkas sangat ringan dan cepat diakses"
      ],
      tech: ["HTML5 Semantik", "CSS Flexbox", "JavaScript Filtering"],
      liveDemo: "#",
      github: "https://github.com"
    },
    6: {
      title: "Daily Habit & Task Tracker",
      category: "Web Application",
      description: "Aplikasi daftar tugas dan pelacak kebiasaan harian produktif. Memungkinkan pengguna mencentang target harian, melihat persentase keberhasilan mingguan, dan menyimpan progres di memori browser.",
      features: [
        "Tambah, centang selesai, dan hapus tugas secara interaktif",
        "Penyimpanan otomatis menggunakan Web Local Storage",
        "Indikator progres batang lingkaran visual",
        "Notifikasi pengingat ramah di browser"
      ],
      tech: ["JavaScript ES6", "Local Storage", "CSS Custom Props"],
      liveDemo: "#",
      github: "https://github.com"
    }
  };

  const modalOverlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const detailButtons = document.querySelectorAll('.btn-detail');

  const openModal = (projectId) => {
    const data = projectDetails[projectId];
    if (!data) return;

    // Render HTML isi modal secara dinamis
    modalBody.innerHTML = `
      <div class="modal-content-wrapper">
        <span class="modal-category-tag">${data.category}</span>
        <h3>${data.title}</h3>
        <p class="modal-desc-full">${data.description}</p>
        
        <div class="modal-features-list">
          <h4>Fitur & Keunggulan Utama:</h4>
          <ul>
            ${data.features.map(feat => `<li>${feat}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-tech-stack">
          <h4>Teknologi yang Digunakan:</h4>
          <div class="modal-tags">
            ${data.tech.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>

        <div class="modal-actions">
          <a href="${data.github}" target="_blank" class="btn btn-primary">Lihat Kode di GitHub</a>
          <button class="btn btn-outline" onclick="document.getElementById('modal-overlay').classList.remove('open'); document.body.style.overflow = '';">Tutup</button>
        </div>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Event listener tombol detail proyek
  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectId = e.currentTarget.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Tutup jika klik di area overlay gelap
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Tutup dengan tombol keyboard ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  /* ==========================================================
     6. FORM VALIDATION & INTERACTIVE TOAST FEEDBACK
     ========================================================== */
  const contactForm = document.getElementById('contact-form');
  const toastAlert = document.getElementById('toast-alert');

  if (contactForm) {
    const namaInput = document.getElementById('nama');
    const emailInput = document.getElementById('email');
    const subjekInput = document.getElementById('subjek');
    const pesanInput = document.getElementById('pesan');

    const namaError = document.getElementById('nama-error');
    const emailError = document.getElementById('email-error');
    const subjekError = document.getElementById('subjek-error');
    const pesanError = document.getElementById('pesan-error');

    // Helper validasi email sederhana
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Bersihkan pesan error saat user mengetik
    [namaInput, emailInput, subjekInput, pesanInput].forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const errorElem = document.getElementById(`${input.id}-error`);
        if (errorElem) errorElem.textContent = '';
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validasi Nama
      if (!namaInput.value.trim()) {
        namaInput.classList.add('error');
        namaError.textContent = 'Nama lengkap wajib diisi!';
        isValid = false;
      } else if (namaInput.value.trim().length < 3) {
        namaInput.classList.add('error');
        namaError.textContent = 'Nama minimal harus terdiri dari 3 karakter.';
        isValid = false;
      }

      // Validasi Email
      if (!emailInput.value.trim()) {
        emailInput.classList.add('error');
        emailError.textContent = 'Alamat email wajib diisi!';
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        emailError.textContent = 'Format email tidak valid (contoh: user@domain.com).';
        isValid = false;
      }

      // Validasi Subjek
      if (!subjekInput.value.trim()) {
        subjekInput.classList.add('error');
        subjekError.textContent = 'Subjek pesan tidak boleh kosong!';
        isValid = false;
      }

      // Validasi Pesan
      if (!pesanInput.value.trim()) {
        pesanInput.classList.add('error');
        pesanError.textContent = 'Isi pesan wajib dituliskan!';
        isValid = false;
      } else if (pesanInput.value.trim().length < 10) {
        pesanInput.classList.add('error');
        pesanError.textContent = 'Pesan minimal harus memuat 10 karakter.';
        isValid = false;
      }

      // Jika valid, proses simulasi kirim
      if (isValid) {
        const submitBtn = document.getElementById('btn-submit');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span>Mengirimkan Pesan...</span>';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;

          // Reset formulir
          contactForm.reset();

          // Tampilkan notifikasi toast sukses
          if (toastAlert) {
            toastAlert.classList.add('show');
            setTimeout(() => {
              toastAlert.classList.remove('show');
            }, 6000);
          }
        }, 1200);
      }
    });
  }

  /* ==========================================================
     7. DOWNLOAD CV BUTTON INTERACTION
     ========================================================== */
  const btnDownloadCv = document.getElementById('btn-download-cv');
  if (btnDownloadCv) {
    btnDownloadCv.addEventListener('click', () => {
      alert("Halo! Terima kasih atas ketertarikan Anda.\n\nBerkas Curriculum Vitae (CV) dapat Anda tautkan ke file PDF asli Anda di folder proyek (misalnya: assets/cv-budi.pdf).");
    });
  }

  /* ==========================================================
     8. COUNTER ANGKA STATISTIK (INTERSECTION OBSERVER)
     ========================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let counterStarted = false;

  const runCounterAnimation = () => {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      const suffix = stat.textContent.includes('%') ? '%' : '+';
      let current = 0;
      const increment = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = `${target}${suffix}`;
          clearInterval(timer);
        } else {
          stat.textContent = `${current}${suffix}`;
        }
      }, 35);
    });
  };

  const aboutSection = document.getElementById('tentang');
  if (aboutSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counterStarted) {
          counterStarted = true;
          runCounterAnimation();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);
  }

});

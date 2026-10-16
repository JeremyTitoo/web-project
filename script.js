/* ==========================================
   1. MANIPULASI DOM & EVENT LISTENER 
   ========================================== */

const themeToggleBtn = document.querySelector('#themeToggleBtn');
const btnUbahTeks = document.querySelector('#btnUbahTeks');
const profileDesc = document.querySelector('#profileDesc');

let teksBerubah = false;

// Event Listener 1: Tombol Ubah Teks Profil
btnUbahTeks.addEventListener('click', function() {
    if (!teksBerubah) {
        profileDesc.textContent = "saya sigma mewing, suka mengedit, suka game, suka kamu, apalagi suka uang";
        teksBerubah = true;
    } else {
        profileDesc.textContent = "Makan mi campur sawi, pas kamu senyum manis begini, dompetku langsung terancam krisis lagi. Membeli beras ke pasar rebo, bukannya malas nyuci baju, tapi baumu masih nempel, aku kangen kamu. Beli es krim rasa vanila, walau kamu sering bikin naik darah, kenapa sih mukamu tetap imut? Ke warung membeli kerupuk kulit, kalau kamu ngambeknya makin sulit, harus kubujuk pakai seblak atau boba nih nanti?";
        teksBerubah = false;
    }
});

// Event Listener 2: Tombol Ganti Tema / Dark Mode (classList.toggle)
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


/* ==========================================
   2. SLIDESHOW / CAROUSEL PORTOFOLIO
   ========================================== */

let currentIndex = 0;

function tampilkanSlide(index) {
    const slides = document.querySelectorAll('.showcase-slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length === 0) return;

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
    }
}

document.querySelector('#btnNext').addEventListener('click', function() {
    tampilkanSlide(currentIndex + 1);
});

document.querySelector('#btnPrev').addEventListener('click', function() {
    tampilkanSlide(currentIndex - 1);
});

function pindahSlide(index) {
    tampilkanSlide(index);
}


/* ==========================================
   3. MODAL PREVIEW LAYAR PENUH
   ========================================== */

const modalPreview = document.querySelector('#modalPreview');
const modalImg = document.querySelector('#modalImg');
const modalTitle = document.querySelector('#modalTitle');
const modalDesc = document.querySelector('#modalDesc');
const btnTutupModal = document.querySelector('#btnTutupModal');

function bukaModal(index) {
    const slides = document.querySelectorAll('.showcase-slide');
    if (slides[index]) {
        const img = slides[index].querySelector('img');
        const title = slides[index].querySelector('h3');
        const desc = slides[index].querySelector('p');

        modalImg.src = img.src;
        modalTitle.textContent = title ? title.textContent : 'Portofolio';
        modalDesc.textContent = desc ? desc.textContent : '';

        modalPreview.style.display = 'flex';
    }
}

btnTutupModal.addEventListener('click', function() {
    modalPreview.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modalPreview) {
        modalPreview.style.display = 'none';
    }
}); 
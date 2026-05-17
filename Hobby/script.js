// --- 1. PŁYNNE PRZEWIJANIE (SMOOTH SCROLL) ---
document.getElementById('exploreBtn').addEventListener('click', function() {
    document.getElementById('destinations').scrollIntoView({
        behavior: 'smooth'
    });
});

// --- 2. LOGIKA ZAKŁADEK (TABS) ---
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        const targetId = button.getAttribute('data-target');

        button.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});

// --- 3. LOGIKA AKORDEONU (PORADY) ---
const accordions = document.querySelectorAll('.accordion-btn');

accordions.forEach(acc => {
    acc.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove('show');
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add('show');
        }
    });
});

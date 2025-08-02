// Hamburger menu functionality
document.querySelector('.hamburger').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    const isActive = this.classList.contains('active');

    if (isActive) {
        this.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.setAttribute('aria-expanded', 'false');
    } else {
        this.classList.add('active');
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.setAttribute('aria-expanded', 'true');
    }
});

// Close mobile menu when clicking outside
document.getElementById('mobileMenu').addEventListener('click', function (e) {
    if (e.target === this) {
        document.querySelector('.hamburger').classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking on menu items
document.querySelectorAll('.mobile-nav-item, .mobile-action-btn').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.hamburger').classList.remove('active');
        document.getElementById('mobileMenu').classList.remove('active');
        document.body.style.overflow = 'auto';
        document.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
    });
});
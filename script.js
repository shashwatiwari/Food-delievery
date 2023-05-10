// Smooth scrolling to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to current navigation link
    document.querySelector(`nav ul li a[href="#${currentSection}"]`).classList.add('active');

});

// Handle order button click
document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // Handle order logic here
        console.log('Order button clicked');
    });
});
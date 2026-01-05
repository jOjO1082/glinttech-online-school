document.addEventListener('DOMContentLoaded', () => {



const menuLinks = document.querySelectorAll('.desktop-menu a');
const menuIcon = document.querySelector('.menu-icon-container');
const mobileMenu = document.querySelector('.mobile-menu-container');
const closeIcon = document.querySelector('.close-container');



// Add active link styling to the clicked menu link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.forEach(l => l.classList.remove('font-semibold', 'border-blue-900', 'active-link', 'text-blue-800', 'border-b-2'));
        link.classList.add('font-semibold', 'border-blue-900', 'active-link', 'text-blue-800', 'border-b-2');
    });
});




// Toggle mobile menu visibility
menuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-y-[200%]', 'opacity-0');
    mobileMenu.classList.add('translate-y-0', 'opacity-100');
});

// Close mobile menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        mobileMenu.classList.remove('translate-y-0',);
        mobileMenu.classList.add('-translate-y-[200%]');
    }
});

// Close mobile menu when a close icon is clicked
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-y-0',);
    mobileMenu.classList.add('-translate-y-[200%]');
});

});











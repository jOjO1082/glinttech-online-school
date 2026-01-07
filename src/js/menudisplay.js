document.addEventListener('DOMContentLoaded', () => {



const menuLinks = document.querySelectorAll('.desktop-menu a');
const menuIcon = document.querySelector('.menu-icon-container');
const mobileMenu = document.querySelector('.mobile-menu-container');
const closeIcon = document.querySelector('.close-container');



// Add active link styling to the clicked menu link
menuLinks.forEach(link => { 

    if (link.href === window.location.href ) {
        link.classList.add('font-semibold', 'border-blue-900', 'active-link', 'text-blue-800', 'border-b-2');
    } else {
        link.classList.remove('font-semibold', 'border-blue-900', 'active-link', 'text-blue-800', 'border-b-2');
    }
    
});

// Add active link to the styling of the category buttons
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('font-semibold', 'text-blue-800', 'border-b-2', 'border-blue-900', 'active-link', "text-slate-700"));
        button.classList.add('font-semibold', 'text-blue-800', 'border-b-2', 'border-blue-900');
    });
});



// Toggle mobile menu visibility
menuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-y-[200%]', 'opacity-0');
    mobileMenu.classList.add('translate-y-0', 'opacity-100', 'z-50');
    
});

// Close mobile menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'z-50');
        mobileMenu.classList.add('-translate-y-[200%]', 'opacity-0');
    }
});

// Close mobile menu when a close icon is clicked
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'z-50');
    mobileMenu.classList.add('-translate-y-[200%]', 'opacity-0');
});

});


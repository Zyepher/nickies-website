// Dark mode toggle
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

// Function to update theme color meta tag
function updateThemeColorMeta(isDark) {
    themeColorMeta.content = isDark ? '#000000' : '#ffffff';
}

// Check for saved theme preference or default to dark mode
// Note: dark class is already set by inline script in head to prevent flash
const savedTheme = localStorage.getItem('theme');
if (!savedTheme) {
    // If no saved preference, save the default (dark)
    localStorage.setItem('theme', 'dark');
}
// Theme-color meta is already set by inline script

function updateMobileThemeText() {
    const mobileThemeText = document.getElementById('mobile-theme-text');
    const isDark = html.classList.contains('dark');
    mobileThemeText.textContent = isDark ? 'Enter Light Mode' : 'Enter Dark Mode';
}

function toggleTheme() {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateMobileThemeText();
    updateThemeColorMeta(isDark);
}

// Initialize mobile theme text on page load
updateMobileThemeText();

themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', () => {
    toggleTheme();
    // Close sidebar after toggling theme
    closeSidebar();
});

// Mobile sidebar toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileSidebar = document.getElementById('mobile-sidebar');
const mobileOverlay = document.getElementById('mobile-overlay');
let isSidebarOpen = false;

function openSidebar() {
    mobileSidebar.classList.remove('-translate-x-full');
    mobileSidebar.classList.add('translate-x-0');
    mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
    mobileOverlay.classList.add('opacity-100');
    isSidebarOpen = true;
}

function closeSidebar() {
    mobileSidebar.classList.remove('translate-x-0');
    mobileSidebar.classList.add('-translate-x-full');
    mobileOverlay.classList.remove('opacity-100');
    mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
    isSidebarOpen = false;
}

mobileMenuToggle.addEventListener('click', () => {
    if (isSidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

// Close sidebar when overlay is clicked
mobileOverlay.addEventListener('click', () => {
    closeSidebar();
});

// Close sidebar when a mobile nav item is clicked
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
        closeSidebar();
    });
});

// Header scroll effect
const header = document.getElementById('main-header');
let lastScrollY = 0;

function updateHeaderOnScroll() {
    const scrollY = window.scrollY;
    
    if (scrollY === 0) {
        // At top - solid background
        header.classList.remove('bg-white/95', 'dark:bg-black/95', 'backdrop-blur-sm');
        header.classList.add('bg-white', 'dark:bg-black');
    } else {
        // Scrolled - transparent background
        header.classList.remove('bg-white', 'dark:bg-black');
        header.classList.add('bg-white/95', 'dark:bg-black/95', 'backdrop-blur-sm');
    }
    
    lastScrollY = scrollY;
}

window.addEventListener('scroll', updateHeaderOnScroll);
updateHeaderOnScroll(); // Initial check

// Smooth scroll offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ toggles
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('svg');
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        
        toggle.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});
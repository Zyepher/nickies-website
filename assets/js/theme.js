// Theme initialization - runs immediately to prevent flash
(function() {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme ? savedTheme === 'dark' : true; // Default to dark
    document.querySelector('meta[name="theme-color"]').content = isDark ? '#000000' : '#ffffff';
    // Also set dark class on html element early
    if (isDark) {
        document.documentElement.classList.add('dark');
    }
})();
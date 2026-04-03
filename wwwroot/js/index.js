// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const themeOptions = document.querySelectorAll('.theme-option');

    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);

    // Toggle dropdown
    themeToggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        themeDropdown.classList.toggle('show');
        updateButtonIcon();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
        themeDropdown.classList.remove('show');
    });

    // Theme selection
    themeOptions.forEach(option => {
        option.addEventListener('click', function () {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);

            // Update active state
            themeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');

            // Close dropdown
            themeDropdown.classList.remove('show');
        });
    });

    // Update active theme option
    function updateActiveOption(theme) {
        themeOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-theme') === theme) {
                option.classList.add('active');
            }
        });
    }

    // Update button icon based on current theme
    function updateButtonIcon() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const icon = themeToggleBtn.querySelector('i.fa-moon');
        const chevron = themeToggleBtn.querySelector('i.fa-chevron-down');

        if (currentTheme === 'dark') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }

        // Rotate chevron when dropdown is open
        if (themeDropdown.classList.contains('show')) {
            chevron.style.transform = 'rotate(180deg)';
        } else {
            chevron.style.transform = 'rotate(0deg)';
        }
    }

    // Set theme function
    function setTheme(theme) {
        // Remove existing theme attribute
        document.documentElement.removeAttribute('data-theme');

        if (theme === 'system') {
            // Check system preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        } else if (theme === 'dark' || theme === 'light') {
            document.documentElement.setAttribute('data-theme', theme);
        }

        // Save preference
        localStorage.setItem('theme', theme);

        // Update UI
        updateActiveOption(theme);
        updateButtonIcon();
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'system') {
            setTheme('system');
        }
    });

    // Scroll animation (existing code)
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in-up');
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;

        elements.forEach(function (el) {
            const elementTop = el.getBoundingClientRect().top + scrollY;
            const elementBottom = elementTop + el.offsetHeight;

            if (elementTop < (scrollY + windowHeight - 50) &&
                elementBottom > (scrollY + 50)) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Smooth scrolling (existing code)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize active theme option
    updateActiveOption(savedTheme);
    updateButtonIcon();
});
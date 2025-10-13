// smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// scroll animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// navbar toggler
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    const isActive = navbarCollapse.classList.toggle('active');
    navbarToggler.setAttribute('aria-expanded', isActive ? 'true' : 'false');
});

// auto close for mobile navbar | this is used when a nav link is clicked
document.querySelectorAll('.navbar-nav a').forEach(navLink => {
    navLink.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('active')) {
            navbarCollapse.classList.remove('active');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
});

// signal that site scripts executed successfully
window.__siteScriptsLoaded = true;

// console verification messages
if (window.__siteScriptsLoaded) {
    console.info('Site scripts loaded successfully.');
}

console.log('Welcome to the Golden Age website');
console.log('This website is open source! You can view the source code at https://github.com/goldenagenetwork/website');
console.log('If you see any vulnerable code or files in our website, please report it to the vulns@gasmp.net email.');
console.log('Developed with ❤️ by pvrz (https://github.com/pvrzz)');
console.log('⚠️ WARNING: If someone asked you to insert code into the website, you may be getting scammed or misled. Do NOT insert any code here without proper knowledge of how the website or console works. ⚠️');

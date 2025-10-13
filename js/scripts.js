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

(function ensureUserWayWidget() {
    var SRC = 'https://cdn.userway.org/widget.js';
    var ACCOUNT = 'Grhg0DGJZw';
    var maxAttempts = 2;
    var attempts = 0;

    function hasScript() {
        try {
            var sel = 'script[src="' + SRC.replace(/[-/\\.^$*+?()[\]{}|]/g, '\\$&') + '"]';
            return !!document.querySelector(sel);
        } catch (e) { return false; }
    }

    function inject(force) {
        if (!force && hasScript()) return;
        var s = document.createElement('script');
        s.src = SRC + (force ? ('?cb=' + Date.now()) : '');
        s.setAttribute('data-account', ACCOUNT);
        s.crossOrigin = 'anonymous';
        s.onload = function () { window.__userwayLoaded = true; };
        s.onerror = function () {
            attempts += 1;
            if (attempts < maxAttempts) {
                setTimeout(function(){ inject(true); }, 1500);
            }
        };
        (document.body || document.documentElement).appendChild(s);
    }

    function maybeLoad() {
        if (window.__userwayLoaded) return;
        if (!hasScript()) { inject(false); }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', maybeLoad);
    } else {
        maybeLoad();
    }

    window.addEventListener('load', function () {
        setTimeout(function () {
            if (!window.__userwayLoaded) { inject(true); }
        }, 1000);
    });
})();

const nav = document.querySelector('.nav-section');
const nav_logo = document.querySelector('.nav-logo');
const nav_link = document.querySelectorAll('.nav-link');
const settings = document.querySelector('.settings');
const settings_line = document.querySelectorAll('.settings-line');
const responsive_nav = document.querySelector('.responsive-nav');
const responsive_icon = document.querySelector('.responsive-icon');
const responsive_nav_link = document.querySelectorAll('.responsive-nav-link');

const pages = [
    '../Home/Home.html',
    '../../PulseTrack.html',
    '../LearnHub/LearnHub.html',
    '../Archive/Archive.html',
    '../About/About.html',
];

const pages_from_nl = [
    'PulseTrack.Pages/Home/Home.html',
    'PulseTrack.html',
    'PulseTrack.Pages/LearnHub/LearnHub.html',
    'PulseTrack.Pages/Archive/Archive.html',
    'PulseTrack.Pages/About/About.html',
];

const native_pages = [
    'Home.html',
    'PulseTrack.html',
    'LearnHub.html',
    'Archive.html',
    'About.html',
]

nav_link.forEach((link, index) => {
    link.onclick = function() {
        if (pages[index] == 'not_available') {
            alert("Access to the PulseTrack page is restricted. This page only works locally with the PulseX device.");
            return;
        }

        if (window.location.href.includes('PulseTrack.html')) {
            window.location.href = pages_from_nl[index];
        }

        else {
            window.location.href = pages[index];
        }
    }
});

responsive_nav_link.forEach((link, index) => {
    link.onclick = function() {
        if (pages[index] == 'not_available') {
            alert("Access to the PulseTrack page is restricted. This page only works locally with NeuroDrive.");
            return;
        }

        if (window.location.href.includes('PulseTrack.html')) {
            window.location.href = pages_from_nl[index];
        }

        else {
            window.location.href = pages[index];
        }
    }
})

window.onscroll = () => {    
    if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
        settings_line.forEach(line => {
            line.classList.add('settings-line-scrolled');
        });
        if (window.location.href.includes('PulseTrack.html')) {
            nav_logo.src = 'PulseTrack.Media/logo-no-bg.png';
        }
        else {
            nav_logo.src = '../../PulseTrack.Media/logo-no-bg.png';
        }

    } 
    else {
        nav.classList.remove('nav-scrolled'); 
        settings_line.forEach(line => {
            line.classList.remove('settings-line-scrolled');
        });
        if (window.location.href.includes('PulseTrack.html')) {
            nav_logo.src = 'PulseTrack.Media/logo-no-bg.png';
        }
        else {
            nav_logo.src = '../../PulseTrack.Media/logo-no-bg.png';
        }
    }
};

native_pages.forEach((page, index) => {
    if (window.location.href.includes(page)) {
        nav_link[index].style.color = 'rgb(80, 180, 216)';
    }
});

settings.onclick = function() {
    responsive_nav.style.display = 'flex';
}

responsive_icon.onclick = function() {
    responsive_nav.style.display = 'none';
}
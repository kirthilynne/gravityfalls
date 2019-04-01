// select all dom content

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuPicture = document.querySelector('.menu-left');
const menuNav = document.querySelector('.menu-right');
const navItems = document.querySelectorAll('.nav-item');

// set state of menu
let menuOpen = false;

// toggleMenu function
toggleMenu = () => {
    if(!menuOpen) {
        hamburger.classList.add('open');
        menu.classList.add('show');
        menuPicture.classList.add('show');
        menuNav.classList.add('show');

        // loop through nav items
        navItems.forEach(item => item.classList.add('show'));

        menuOpen = true;
    } else {
        hamburger.classList.remove('open');
        menu.classList.remove('show');
        menuPicture.classList.remove('show');
        menuNav.classList.remove('show');

        // loop through nav items
        navItems.forEach(item => item.classList.remove('show'));

        menuOpen = false;
    }
}

// event listener on the hamburger and nav items
hamburger.addEventListener('click', toggleMenu);


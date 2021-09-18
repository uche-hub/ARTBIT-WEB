/* ============= SHOW MENU ============= */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/* ============= MENU SHOW ============= */
/* VALIDATE IF CONSTANT EXISTS */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ============= MENU HIDDEN ============= */
/* VALIDATE IF CONSTANT EXISTS */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ============= REMOVE MENU MOBILE ============= */
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //WHEN WE CLICK ON EACH NAV_LINK, WE REMOVE THE SHOW MENU
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
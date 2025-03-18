const navBar = document.querySelector('.nav-bar');
const menuOn = document.querySelector('.menu-on');
const nav = document.querySelector('.nav-bar');
if (navBar) {
    navBar.addEventListener('click', () => {
        navBar.classList.toggle('open');
        menuOn.classList.toggle('menu-mobile');
    });
};

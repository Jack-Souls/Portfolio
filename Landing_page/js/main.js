const navButton = document.querySelector('.navigation-button');
const mobileNav = document.querySelector('.mobile-navigation');
const body = document.body;

navButton.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobileNavigation();
});

window.addEventListener('click', function () {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNavigation();
    }
});

mobileNav.addEventListener('click', function (event) {
    event.stopPropagation();
});

function toggleMobileNavigation() {
    mobileNav.classList.toggle('mobile-navigation-active');
    navButton.classList.toggle('navigation-button-close');
    body.classList.toggle('no-scroll');
}
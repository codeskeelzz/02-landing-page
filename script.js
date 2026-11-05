const hamBurger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamBurger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle("nav-links--open")

    hamBurger.setAttribute("aria-expanded", isOpen)
})
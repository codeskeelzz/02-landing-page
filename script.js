const hamBurger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamBurger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle("nav-links--open")

    hamBurger.setAttribute("aria-expanded", isOpen)
})

const allNavLinks = document.querySelectorAll('.nav-links a')

allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove("nav-links--open")
        hamBurger.setAttribute("aria-expanded", "false")
    })
})

// Reduce Nav sticky size
const siteNav = document.querySelector('.site-nav')

window.addEventListener('scroll', () => {
    siteNav.classList.toggle("site-nav--small", window.scrollY > 50)
})
const hamBurger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamBurger.addEventListener('click', () => {
    if(!menuOpen) {
        navLinks.style.display = "block"
        menuOpen = true
        hamBurger.setAttribute("aria-expanded", "true")

    } else if(menuOpen) {
        navLinks.style.display = "none"
        menuOpen = false
        hamBurger.setAttribute("aria-expanded", "false")
    }
}
    
)
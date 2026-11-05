const hamBurger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamBurger.addEventListener('click', () => {
    if(!menuOpen) {
        navLinks.style.display = "block"
        menuOpen = true

    } else if(menuOpen) {
        navLinks.style.display = "none"
        menuOpen = false
    }
}
    
)
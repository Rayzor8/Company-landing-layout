const navbarMenu = document.querySelector('#mobile-navbar')
const hamburgerMenu = document.querySelector('#mobile-menu-icon')


hamburgerMenu.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('hidden')
})
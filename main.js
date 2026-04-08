const btnHamburguesa = document.querySelector('.hamburguer-menu button')
const navContainer = document.querySelector('.nav-container')

btnHamburguesa.addEventListener('click', () => {
    navContainer.classList.toggle('menu-abierto')
})
const btnHamburguesa = document.querySelector('.hamburguer-menu')
const navContainer = document.querySelector('.nav-container')

btnHamburguesa.addEventListener('click', () => {
    navContainer.classList.toggle('menu-abierto')
})
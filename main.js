const btnMenu = document.querySelector('.hamburguer-menu')
const nav = document.querySelector('.nav-container')

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('active')
})
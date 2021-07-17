// ABRIR E FECHAR MENU AO CLICAR NO ÍCONE
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

// ESCONDER MENU AO CLICAR EM UM ITEM DA LISTA
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

// ADICIONAR SHADOWS NO HEADER AO ROLAR PAGINA AO DAR SCROLL
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})
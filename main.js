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
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

// BUTTOM BACK TO TOP
function backToTop() {
    const toTop = document.querySelector('.back-to-top')

    if (window.scrollY >= 560) {
        toTop.classList.add('show')
    } else {
        toTop.classList.remove('show')
    }
}

// WHEN SCROLL
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
})

// TESTIMUNIALS CAROUSEL SLIDER SWIPER
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewhell: true,
    keyboard: true
        // effect: 'cube',
        // grabCursor: true,
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94
        // },
        // pagination: {
        //     el: '.swiper-pagination'
        // }
})

// SCROLLREVEAL -> MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PAGINA
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
`, { interval: 90 }
)
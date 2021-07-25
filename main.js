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

function changeHeaderWhenScroll() {

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

// BUTTOM BACK TO TOP
const toTop = document.querySelector('.back-to-top')

function backToTop() {
    if (window.scrollY >= 560) {
        toTop.classList.add('show')
    } else {
        toTop.classList.remove('show')
    }
}

// TESTIMUNIALS CAROUSEL SLIDER SWIPER
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewhell: true,
    keyboard: true,
    breakpoints: {
        // menor ou igual a
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
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

// ATIVAR SEÇÃO NAVEGADA NO MENU
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
    // pegando o deslocamento da pagina + o tamnho da pagina dividido por 8 e dos 8 pegando apenas 4 pedaços
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const chepointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && chepointEnd) {
            document
                .querySelector(`nav ul li a[href*=${sectionId}]`)
                .classList.add('active')
        } else {
            document
                .querySelector(`nav ul li a[href*=${sectionId}]`)
                .classList.remove('active')
        }

    }



}
// WHEN SCROLL
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})
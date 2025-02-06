// Animação ao rolar a página
window.addEventListener('scroll', () => {
    const servicos = document.querySelector('.servicos');
    const servicosPosition = servicos.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (servicosPosition < screenPosition) {
        servicos.style.opacity = '1';
        servicos.style.transform = 'translateY(0)';
    }
});


const navList = document.getElementById('nav-list');
const menuIcon = document.getElementById('menu-icon');

// Adicionar evento de clique a todos os itens do menu
navList.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.remove('active'); // Fechar o menu
    });
});

// Alternar o menu ao clicar no ícone do menu
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});


const swiper = new Swiper('.swiper-container', {
    loop: true, // Permite que o carrossel seja infinito
    autoplay: {
        delay: 3000, // Tempo entre os slides (3 segundos)
        disableOnInteraction: false, // Continua rodando após interação
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {  // Celulares pequenos
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {  // Tablets e telas médias
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: { // Desktop
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    
    // Duplicar imagens para criar efeito de looping contínuo
    const images = track.innerHTML;
    track.innerHTML += images;
});

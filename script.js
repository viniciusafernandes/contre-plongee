const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }

  box.style.transform = `translateX(${-contador * 640}px)`;
}

setInterval(slider, 3500);


// Função para alternar a visibilidade da informação nos itens do processo com transição suave
function toggleInfo(item) {
    const info = item.querySelector('.info');
    const allInfos = document.querySelectorAll('.info');
    const section = document.querySelector('#processo'); // Seleciona a seção de processo

    // Fecha todas as informações abertas com transição suave
    allInfos.forEach(i => {
        if (i !== info && i.style.maxHeight) {
            i.style.maxHeight = null;
            i.style.opacity = '0';
            setTimeout(() => i.style.display = 'none', 500); // Aguarda a transição antes de ocultar
        }
    });

    // Alterna a visibilidade da informação clicada com transição suave
    if (info.style.maxHeight) {
        info.style.maxHeight = null;
        info.style.opacity = '0';
        setTimeout(() => info.style.display = 'none', 200); // Aguarda a transição antes de ocultar
    } else {
        info.style.display = 'block';
        setTimeout(() => {
            info.style.maxHeight = info.scrollHeight + 'px';
            info.style.opacity = '1';
        }, 0); // Define um pequeno atraso para iniciar a transição
        // Rolagem suave para a seção de processo
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para alternar a visibilidade das perguntas frequentes com transição suave
function toggleFaq(item) {
    const faqInfo = item.querySelector('.faq-info');
    const allFaqInfos = document.querySelectorAll('.faq-info');
    const section = document.querySelector('#faq'); // Seleciona a seção de FAQ

    // Fecha todas as FAQs abertas com transição suave
    allFaqInfos.forEach(i => {
        if (i !== faqInfo && i.style.maxHeight) {
            i.style.maxHeight = null;
            i.style.opacity = '0';
            setTimeout(() => i.style.display = 'none', 500); // Aguarda a transição antes de ocultar
        }
    });

    // Alterna a visibilidade da FAQ clicada com transição suave
    if (faqInfo.style.maxHeight) {
        faqInfo.style.maxHeight = null;
        faqInfo.style.opacity = '0';
        setTimeout(() => faqInfo.style.display = 'none', 200); // Aguarda a transição antes de ocultar
    } else {
        faqInfo.style.display = 'block';
        setTimeout(() => {
            faqInfo.style.maxHeight = faqInfo.scrollHeight + 'px';
            faqInfo.style.opacity = '1';
        }, 0); // Define um pequeno atraso para iniciar a transição
        // Rolagem suave para a seção de FAQ
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Inicializa o mapa
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.5505, lng: -46.6333 }, // São Paulo, Brasil
        zoom: 12,
    });

    // Adiciona um marcador
    const marker = new google.maps.Marker({
        position: { lat: -23.5505, lng: -46.6333 },
        map: map,
        title: "Estamos aqui!",
    });
}

// Efeito de transparência do cabeçalho ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    // Defina o limite para alterar a opacidade (exemplo: 100px)
    const opacityLimit = 100;

    // Calcule a nova opacidade com base na posição de rolagem, de 0 até 1 (sólido)
    const newOpacity = Math.min(1, scrollPosition / opacityLimit); // Máx 1 (opacidade sólida)

    // Atualiza a cor de fundo com nova opacidade
    header.style.backgroundColor = `rgba(36, 34, 33, ${newOpacity})`; // Ajusta a opacidade do cabeçalho
});

'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
console.log(carouselItems)
let currentItem = document.querySelector('.carousel__item--main');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');


rightBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--right');
    const leftItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    leftItem.classList.add('carousel__item--left');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const rightItem = currentId === carouselItems.length -1 ? carouselItems[0] : carouselItems[currentId +1];
    rightItem.classList.add('carousel__item--right');
});

leftBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--left');
    const rightItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    rightItem.classList.add('carousel__item--right');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const leftItem = currentId === 0 ? carouselItems[carouselItems.length-1] : carouselItems[currentId-1];
    leftItem.classList.add('carousel__item--left');
});


class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
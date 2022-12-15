import './particules';
import '../css/main.scss';

// ajout supp classe open sur les boutons hamburger
let toggle = document.querySelector('.header__nav__btn');

toggle.addEventListener('click', () => {
  // permet de savoir si le menu est ouvert
  document.body.classList.toggle('open');
});

// ferme le menu au click d'un lien mobile
let links = document.querySelectorAll('.nav__link--mobile');

links.forEach((link) => {
  link.addEventListener('click', () => {
    // permet de savoir si le menu est ouvert
    document.body.classList.toggle('open');
  });
});

// apparition icone scroll décalé
let scrollMouseIcon = document.querySelector('.scroll-icon');
let textUseScroll = document.querySelector('.text-use-mouse');
let textNbPages = document.querySelectorAll('.text-nb-pages');

setTimeout(() => {
  scrollMouseIcon.style.opacity = 1;
  textUseScroll.style.opacity = 1;
}, 7000);




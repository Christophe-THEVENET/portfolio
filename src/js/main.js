import './particules';
import '../css/main.scss';
let modal = document.querySelector('.menu-modal');

// ajout supp classe open sur les boutons hamburger
let toggle = document.querySelector('.header__nav__btn');

let container = document.querySelector('.container');

toggle.addEventListener('click', () => {
  // permet de savoir si le menu est ouvert
  document.body.classList.toggle('open');
});

let links = document.querySelectorAll('.nav__link--mobile');

links.forEach((link) => {
  link.addEventListener('click', () => {
    // permet de savoir si le menu est ouvert
    document.body.classList.toggle('open');
  });
});

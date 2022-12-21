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

setTimeout(() => {
  scrollMouseIcon.style.opacity = 1;
  textUseScroll.style.opacity = 1;
}, 7000);

// on instancie un observeur (pour check ds le viewport)
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      // si visible  ds le viewport
      if (entry.isIntersecting) {
        entry.target.classList.remove('not-visible');
      } else {
        entry.target.classList.add('not-visible');
      }
    }
  },
  {
    threshold: [0],
    // déclenche qd l'élément est visible a 50% ds le viewport
  }
);

// on liste les éléments que l'on souhaite observer
let itemsLeft = document.querySelectorAll('.reveal-left');

itemsLeft.forEach((itemLeft) => {
  itemLeft.classList.add('not-visible');

  // observe ls éléments qd ils sont dans le viewport
  observer.observe(itemLeft);
});

let itemsRight = document.querySelectorAll('.reveal-right');

itemsRight.forEach((itemRight) => {
  itemRight.classList.add('not-visible');

  // observe ls éléments qd ils sont dans le viewport
  observer.observe(itemRight);
});

// -------------------------- bouton linkedln

let linkedlnButton = document.querySelector('.linkedln-button');
let linkedlnModal = document.querySelector('.modale-linkedln');
let linkedlnButtonFooter = document.querySelector('#linkedln-button-footer');
let linkedlnModalFooter = document.querySelector('#linkedlnFooter');

// -------- boutons a porpos -------------
linkedlnButton.addEventListener('click', (e) => {
  e.preventDefault();
  linkedlnModal.style.display = 'block';
  setTimeout(() => {
    linkedlnModal.style.display = 'none';
  }, 1500);
});

// -------- boutons footer -------------
linkedlnButtonFooter.addEventListener('click', (e) => {
  e.preventDefault();
  linkedlnModalFooter.style.display = 'block';
  setTimeout(() => {
    linkedlnModalFooter.style.display = 'none';
  }, 1500);
});

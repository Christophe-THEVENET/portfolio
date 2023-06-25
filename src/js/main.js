import './particules';
import './reveal';
import './formulaire';
import '../css/main.scss';

// ***************** menu mobile *************************
//
// ajout supp classe open sur les boutons hamburger
let toggle = document.querySelector('.header__nav__btn');

toggle.addEventListener('click', () => {
  // ajoute et supprime la classe open au body (permet de savoir si la menu est ouvert)
  document.body.classList.toggle('open');
});

// ferme le menu au click d'un lien mobile
let links = document.querySelectorAll('.nav__link--mobile');

links.forEach((link) => {
  link.addEventListener('click', () => {
   // ajoute et supprime la classe open au body (permet de savoir si la menu est ouvert)
    document.body.classList.toggle('open');
  });
});
//

// ***************** boutons linkedln *************************
//

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

// ***************** boutons mentions légales *************************
//

let mentionsBtn = document.querySelector('#mentions-link');
let closeMentionsBtn = document.querySelector('#btn-close-mentions');
let modaleMentions = document.querySelector('#mentions');

// -------- boutons lien mentions-------------
mentionsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('toto');
  modaleMentions.classList.add('show');
});

// -------- boutons fermer modale mentions -------------
closeMentionsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modaleMentions.classList.remove('show');
});



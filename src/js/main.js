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

// -------- boutons a propos -------------
linkedlnButton.addEventListener('click', (e) => {
    e.preventDefault();
    linkedlnModal.classList.add('show-right');
    setTimeout(() => {
        linkedlnModal.classList.remove('show-right');
    }, 1500);
});

// -------- boutons footer -------------
linkedlnButtonFooter.addEventListener('click', (e) => {
    e.preventDefault();
    linkedlnModalFooter.classList.add('show-left');
    setTimeout(() => {
       linkedlnModalFooter.classList.remove('show-left');
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
    modaleMentions.classList.add('show');
});

// -------- boutons fermer modale mentions -------------
closeMentionsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modaleMentions.classList.remove('show');
});

// ***************** modale info realisations *************************

//   -------- freelance ----------
let infoButtonFreelance = document.querySelector('#info-icon-freelance');
let infoModalFreelance = document.querySelector('#info-modal-freelance');

infoButtonFreelance.addEventListener('mouseover', (e) => {
    e.preventDefault();
    infoModalFreelance.classList.add('info-modal-show');
});

infoModalFreelance.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    infoModalFreelance.classList.remove('info-modal-show');
});

//   -------- vitrine ----------
let infoButtonVitrine = document.querySelector('#info-icon-vitrine');
let infoModalVitrine = document.querySelector('#info-modal-vitrine');

infoButtonVitrine.addEventListener('mouseover', (e) => {
    e.preventDefault();
    infoModalVitrine.classList.add('info-modal-show');
});

infoModalVitrine.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    infoModalVitrine.classList.remove('info-modal-show');
});

//   -------- commerce ----------
let infoButtonCommerce = document.querySelector('#info-icon-commerce');
let infoModalCommerce = document.querySelector('#info-modal-commerce');

infoButtonCommerce.addEventListener('mouseover', (e) => {
    e.preventDefault();
    infoModalCommerce.classList.add('info-modal-show');
});

infoModalCommerce.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    infoModalCommerce.classList.remove('info-modal-show');
});

//   -------- application ----------
let infoButtonApplication = document.querySelector('#info-icon-application');
let infoModalApplication = document.querySelector('#info-modal-application');

infoButtonApplication.addEventListener('mouseover', (e) => {
    e.preventDefault();
    infoModalApplication.classList.add('info-modal-show');
});

infoModalApplication.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    infoModalApplication.classList.remove('info-modal-show');
});



// ***************** modale info diplome *************************

//   -------- freelance ----------
let infoButtonDiplome = document.querySelector('#info-icon-diplome');
let infoModalDiplome = document.querySelector('#info-modal-diplome');

infoButtonDiplome.addEventListener('mouseover', (e) => {
    e.preventDefault();
    infoModalDiplome.classList.add('info-modal-show');
});

infoModalDiplome.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    infoModalDiplome.classList.remove('info-modal-show');
});


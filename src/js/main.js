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

// ***************** modale info realisations *************************

//   -------- freelance ----------
let infoButtonFreelance = document.querySelector('#info-icon-freelance');
let infoModalFreelance = document.querySelector('#info-modal-freelance');
let closeButtonFreelance = document.querySelector('.close-modal-icon-freelance');

infoButtonFreelance.addEventListener('click', (e) => {
    e.preventDefault();
    infoModalFreelance.classList.add('info-modal-show');
});

closeButtonFreelance.addEventListener('click', (e) => {
    e.preventDefault();
    infoModalFreelance.classList.remove('info-modal-show');

});

//   -------- vitrine ----------
let infoButtonVitrine = document.querySelector('#info-icon-vitrine');
let infoModalVitrine = document.querySelector('#info-modal-vitrine');
let closeButtonVitrine = document.querySelector('.close-modal-icon-vitrine');

infoButtonVitrine.addEventListener('click', (e) => {
    e.preventDefault();
    infoModalVitrine.style.display = 'flex';
});

closeButtonVitrine.addEventListener('click', (e) => {
    e.preventDefault();
    infoModalVitrine.style.display = 'none';
});

//   -------- commerce ----------
let infoButtonCommerce = document.querySelector('#info-icon-commerce');
let infoModalCommerce = document.querySelector('#info-modal-commerce');
let closeButtonCommerce = document.querySelector('.close-modal-icon-commerce');

infoButtonCommerce.addEventListener('click', (e) => {
    e.preventDefault();
    infoModalCommerce.style.display = 'flex';
});

closeButtonCommerce.addEventListener('click', (e) => {
    e.preventDefault();
    infoModalCommerce.style.display = 'none';
});

//   -------- application ----------
let infoButtonApplication = document.querySelector('#info-icon-application');
let infoModalApplication = document.querySelector('#info-modal-application');
let closeButtonApplication = document.querySelector('.close-modal-icon-application');

infoButtonApplication.addEventListener('click', (e) => {
    e.preventDefault();
    infoModalApplication.style.display = 'flex';
});

closeButtonApplication.addEventListener('click', (e) => {
    e.preventDefault();
    infoModalApplication.style.display = 'none';
});


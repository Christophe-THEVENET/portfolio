import './particules';
import '../css/main.scss';


// ajout supp classe open sur les boutons hamburger
let toggle = document.querySelector('.header__nav__btn');

toggle.addEventListener('click', () => {
  // permet de savoir si le menu est ouvert
  document.body.classList.toggle('open');
})



let homeBlock = document.querySelector('.content-home')




/* homeBlock.style.display = 'none'; */
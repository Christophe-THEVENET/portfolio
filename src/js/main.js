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

// ----------------------------reveal left ------------------------
// on liste les éléments que l'on souhaite observer
let itemsLeft = document.querySelectorAll('.reveal-left');

itemsLeft.forEach((itemLeft) => {
  itemLeft.classList.add('not-visible');

  // observe ls éléments qd ils sont dans le viewport
  observer.observe(itemLeft);
});

// ---------------------------reveal right ----------------------
let itemsRight = document.querySelectorAll('.reveal-right');

itemsRight.forEach((itemRight) => {
  itemRight.classList.add('not-visible');

  // observe ls éléments qd ils sont dans le viewport
  observer.observe(itemRight);
});

// ---------------------------reveal right ----------------------
let itemsBottom = document.querySelectorAll('.reveal-bottom');

itemsBottom.forEach((itemBottom) => {
  itemBottom.classList.add('not-visible');

  // observe ls éléments qd ils sont dans le viewport
  observer.observe(itemBottom);
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

// ------------------------ validation formulaire

let form = document.querySelector('#contact');
let inputName = document.querySelector('#name');
let inputMail = document.querySelector('#email');
let inputmessage = document.querySelector('#message');
let nameError = document.querySelector('#name-error');
let emailError = document.querySelector('#email-error');
let messageError = document.querySelector('#message-error');

// accepte minus maj tiret espace
let nameRegex = /^[a-zA-Z-\s]+$/;
let emailRegex = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/;

form.addEventListener('submit', (e) => {
  // !!!!!!!!!!! si un input est vide !!!!!!!!!!!!!!!!!!!!!
  // nom
  if (inputName.value.trim() == '') {
    e.preventDefault();
    nameError.textContent = 'Veuillez entrer votre nom';
    setTimeout(() => {
      nameError.textContent = '';
    }, 2000);
    // mail
  } else if (inputMail.value.trim() == '') {
    e.preventDefault();
    emailError.textContent = 'Veuillez entrer votre email';
    setTimeout(() => {
      emailError.textContent = '';
    }, 2000);
    // message
  } else if (inputmessage.value.trim() == '') {
    e.preventDefault();
    messageError.textContent = 'Veuillez entrer votre message';
    setTimeout(() => {
      messageError.textContent = '';
    }, 2000);
    // !!!!!!!!!!! si un input est invalide !!!!!!!!!!!!!!!!!!!!!
    // nom
  } else if (nameRegex.test(inputName.value) == false) {
    e.preventDefault();
    nameError.textContent = 'Le nom doit comporter des lettres ou tirets ou espace uniquements.';
    setTimeout(() => {
      nameError.textContent = '';
    }, 2000);
    // mail
  } else if (emailRegex.test(inputMail.value) == false) {
    e.preventDefault();
    emailError.textContent = "Le format de l'email est invalide";
    setTimeout(() => {
      emailError.textContent = '';
    }, 2000);
    // !!!!!!!!!!! si un input est trop long !!!!!!!!!!!!!!!!!!!!!
    // nom
  } else if (inputName.value.length > 50) {
    console.log(inputName.value.lenght);
    e.preventDefault();
    nameError.textContent = 'Le nom ne doit pas dépasser 50 charctères';
    setTimeout(() => {
      nameError.textContent = '';
    }, 2000);
    // mail
  } else if (inputMail.value.length > 50) {
    e.preventDefault();
    emailError.textContent = "L'email ne doit pas dépasser 50 charactères";
    setTimeout(() => {
      emailError.textContent = '';
    }, 2000);
    // message
  } else if (inputmessage.value.length > 5000) {
    e.preventDefault();
    messageError.textContent = 'Le message doit avoir moins de 5000 charactères';
    setTimeout(() => {
      messageError.textContent = '';
    }, 2000);
    // ------------------------ envoi du message asynchrone fetch
  } else {
    // ---------- méthode de Netlify ------------
    e.preventDefault();

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() =>
        M.toast({
          html: 'Merci pour votre message!',
          classes: 'pulse',
        })
      )
      .catch((error) => alert(error));

    // ----------- méthode trouvé sur le net --------
    /*    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      fetch(form.getAttribute('action'), {
        method: 'POST',
        headers: {
          Accept: 'application/x-www-form-urlencoded;charset=UTF-8',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: new URLSearchParams(formData).toString(),
      }).then((res) => {
        if (res) {
          M.toast({
            html: 'Merci pour votre message!',
            classes: 'pulse',
          });
        }
      });
    }); */
  }
});

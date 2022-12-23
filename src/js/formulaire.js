
// ------------------------ validation formulaire

const form = document.querySelector('#contact');
const inputName = document.querySelector('#name');
const inputMail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

const notification = document.querySelector('#notification');
// alert sucess submit message



const showMessageSuccess = () => {
  notification.classList.add('show');
  inputName.value = '';
  inputMail.value = '';
  inputMessage.value = '';
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
};








// accepte minus maj tiret espace
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
  } else if (inputMessage.value.trim() == '') {
    e.preventDefault();
    messageError.textContent = 'Veuillez entrer votre message';
    setTimeout(() => {
      messageError.textContent = '';
    }, 2000);
    // !!!!!!!!!!! si un input est invalide !!!!!!!!!!!!!!!!!!!!!
    // nom
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
  } else if (inputMessage.value.length > 5000) {
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
      .then(() => showMessageSuccess)
      .catch((error) => alert(error));
  }
}); 
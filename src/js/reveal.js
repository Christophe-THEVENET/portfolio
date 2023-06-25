//  ------------  apparition icone scroll delay
let scrollMouseIcon = document.querySelector('.scroll-icon');
let textUseScroll = document.querySelector('.text-use-mouse');

setTimeout(() => {
  scrollMouseIcon.style.opacity = 1;
  textUseScroll.style.opacity = 1;
}, 7000);

// *********************** reveal global ****************************

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

"use strict"

const tabSize = document.querySelectorAll('input[name="size"]');
const tabAdditives = document.querySelectorAll('input[name="additives"]');
const price = document.querySelector('.price');
const menuCards = document.querySelectorAll('.menu-item');
const popUp = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.close-popup');

let total = 0;
let isPopup = false;

// menuCards.forEach((card, index) => {
//   card.addEventListener('click', (e) => {
//     bodyLock();
//     openPopup(); 
//   })
// })
popUp.addEventListener('click', (e) => {
  if(!e.target.closest('.popup__container')) {
    bodyUnLock();
    openPopup();
  }
})
closePopupBtn.addEventListener('click', () => {
  bodyUnLock();
  openPopup();
})
// document.addEventListener('keydown', (e) => {
//   if(e.which = 27) {
//     bodyUnLock();
//     openPopup();
//   }
// })

export function bodyLock() {
  const lockValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  document.body.style.paddingRight = lockValue;
}
function bodyUnLock() {
  document.body.style.paddingRight = '0px';
}

export function openPopup() {
  if(isPopup == false) {
    popUp.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    isPopup = true;
  } else {
    popUp.classList.add('hidden');
    document.body.style.overflow = 'visible';
    isPopup = false;
  }
}


tabSize.forEach((tab, index) => {
  tabSize[index].addEventListener('click', () => {
    if(tab.checked = 'true') {
      priceSize(index);
    }
  })
})

function priceSize(index) {
  let count = tabSize[index].value;
  count = +count;
  totalPrice(count)
}

// tabAdditives.forEach( (tab, index) => {
//   tabAdditives[index].addEventListener('click', () => {
//     if(tab.checked != 'true') {
//       count++;
//     }
//   })
// })

// function totalPriceAdditives() {

// }

function totalPrice(count) {
  total = count.toFixed(2)
  price.textContent = `$${total}`;
}



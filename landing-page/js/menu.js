"use strict";

const wrapper = document.querySelector('.wrapper');
const cards = document.querySelector('.menu__container');
const btnRefresh = document.querySelector('.btn-refresh');
const tabSize = document.querySelectorAll('input[name="size"]');
const tabAdditives = document.querySelectorAll('input[name="additives"]');
const price = document.querySelector('.price');
const menuCards = document.querySelectorAll('.menu-item');
const popUp = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.close-popup');

let total = 0;
let isPopup = false;

// // menuCards.forEach((card, index) => {
// //   card.addEventListener('click', (e) => {
// //     bodyLock();
// //     openPopup(); 
// //   })
// // })

let products = [];
let countsCards = 0;
let clickBtnRefresh = 1;

let screenWidth = wrapper.offsetWidth;

if (screenWidth > 1200) {
  countsCards = 8;
} else if (screenWidth < 1200 && screenWidth > 1000) {
  countsCards = 6;
} else if (screenWidth < 1000) {
  countsCards = 4;
}

async function getMenuProducts() {
  try {
    if (!products.length) {
      const res = await fetch('../data/products.json');
      products = await res.json();
    }
    renderStartCards(products);
  } catch (err) {
    console.log(err);
  }
}

getMenuProducts();

function renderStartCards(data) {
  const arrCards = data.slice(0, countsCards);
  createCard(arrCards);
}

function createCard(data) {
  data.forEach((card, index) => {
    const { name, description, price, category } = card;
    let newPrice = +price;
    let linkImages = `../assets/images/${category}-${index + 1}.jpg`;
    const cardItem = `
      <div class="menu-item">
        <div class="image-container">
        <img src=${linkImages} alt="" class="image-card">
        </div>
        <div class="menu-item__text-container">
          <h3 class="menu-item__title title-section">${name}</h3>
          <p class="menu-item__card-text text-section">${description}</p>
          <p class="menu-item__price">$${newPrice.toFixed(2)}</p>
        </div>             
      </div>
    `;
    cards.insertAdjacentHTML('beforeend', cardItem);
  });
}

function clickCard(event) {
  const card = event.target.closest('.menu-item');
  if (!card) return;
  // bodyLock();
  openPopup();
}

cards.addEventListener('click', clickCard);

// function createPopupContainer() {
//   console.log('hi');
//   const popupContainer = document.createElement('div');
//   popupContainer.classList.add('popup__container');
//   popUp.insertAdjacentHTML('afterbegin', popupContainer);
//   popupContainer.textContent = 'hi';
// }

// createPopupContainer();

popUp.addEventListener('click', (e) => {
  if (!e.target.closest('.popup__container')) {
    // bodyUnLock();
    openPopup();
  }
});

// closePopupBtn.addEventListener('click', () => {
//   // bodyUnLock();
//   openPopup();
// });

// // document.addEventListener('keydown', (e) => {
// //   if(e.which = 27) {
// //     bodyUnLock();
// //     openPopup();
// //   }
// // })

// function bodyLock() {
//   const lockValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
//   document.body.style.paddingRight = lockValue;
// }
// function bodyUnLock() {
//   document.body.style.paddingRight = '0px';
// }

function openPopup() {
  if (isPopup == false) {
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
    console.log(tab);
    if (!tab.checked) {
      tab.getAttribute(checked);
      priceSize(index);
    }
  });
});

function priceSize(index) {
  let count = tabSize[index].value;
  console.log(count);
  count = +count;
  totalPrice(count);
}

// // tabAdditives.forEach( (tab, index) => {
// //   tabAdditives[index].addEventListener('click', () => {
// //     if(tab.checked != 'true') {
// //       count++;
// //     }
// //   })
// // })

// // function totalPriceAdditives() {

// // }

function totalPrice(count) {
  total = count.toFixed(2);
  console.log(total);
  price.textContent = `$${total}`;
}



btnMoon.addEventListener('click', themeSwitch);
btnSun.addEventListener('click', themeSwitch);
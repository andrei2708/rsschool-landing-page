"use strict";

// btnRefresh.addEventListener('click', sliceArrCards);






// function sliceArrCards() {
//   let countShowCardsClick = countsCards;
//   if (countsCards >= products.length) return;
//   clickBtnRefresh++;
//   const countShowCards = countShowCardsClick * clickBtnRefresh;
//   const arrCards = products.slice(countsCards, countShowCards);
//   createCard(arrCards);
//   countsCards = cards.children.length;
//   if (countsCards >= products.length) {
//     btnRefresh.style.display = 'none';
//   }
// }




const btnSun = document.querySelector('.sun_theme');
const btnMoon = document.querySelector('.moon_theme');
const bgBody = document.querySelector('body');

let styleTheme = localStorage.getItem('theme');
console.log(styleTheme);

btnSun.addEventListener('click', enableDarkStyle());

btnMoon.addEventListener('click', disableDarkStyle());

function enableDarkStyle() {
  bgBody.classList.add('darkstyle');
  btnMoon.classList.add('active');
  btnSun.classList.remove('active');
  localStorage.setItem('theme', 'dark');
}

function disableDarkStyle() {
  bgBody.classList.remove('darkstyle');
  btnMoon.classList.remove('active');
  btnSun.classList.add('active');
  localStorage.setItem('theme', null);
}

// if (styleTheme === 'dark') {
//   bgBody.classList.add('darkstyle');
//   btnMoon.classList.add('active');
//   btnSun.classList.remove('active');
//   localStorage.setItem('theme', 'dark');
// }
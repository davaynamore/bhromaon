let btn = document.querySelector('.navigation__btn-outter');
let btnInner = document.querySelector('.navigation__btn-inner');
let menu = document.querySelector('.navigation__wrapper');

btn.addEventListener('click', ()=> {
	btn.classList.toggle('mobile-navigation__icon');
	btnInner.classList.toggle('mobile-navigation__icon-inner');
	menu.classList.toggle('mobile-navigation__menu');
})
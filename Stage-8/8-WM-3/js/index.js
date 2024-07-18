const infoEl = document.querySelector('.info');
const btnListEl = document.querySelector('.tag__menu-btn--list')
const btnGridEl = document.querySelector('.tag__menu-btn--grid')


btnListEl.addEventListener('click', function (e) {
	infoEl.classList.add('info--list')
	infoEl.classList.remove('info--grid')
});

btnGridEl.addEventListener('click', function (e) {
	infoEl.classList.add('info--grid')
	infoEl.classList.remove('info--list')
})

const menuBtnEl = document.querySelector('.header__menu');
const headerEl = document.querySelector('.header');

menuBtnEl.addEventListener('click', function (e) {
	headerEl.classList.toggle('header--open')
});
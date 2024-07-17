const infoEl = document.querySelector('.info');
const btnListEl = document.querySelector('.main-nav__menu-btn--list')
const btnGridEl = document.querySelector('.main-nav__menu-btn--grid')


btnListEl.addEventListener('click', function (e) {
	infoEl.classList.add('info--list')
	infoEl.classList.remove('info--grid')
});

btnGridEl.addEventListener('click', function (e) {
	infoEl.classList.add('info--grid')
	infoEl.classList.remove('info--list')
})
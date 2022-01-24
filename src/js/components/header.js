const menuBtn = document.querySelector('.menu-btn')
const menuList = document.querySelector('.nav__list')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('menu-btn--active')
  menuList.classList.toggle('nav__list--active')
})

const catBtn = document.querySelector('.categories__btn')
const catList = document.querySelector('.categories__list')


catBtn.addEventListener('click', () => {
  catBtn.classList.toggle('categories__btn--active')
  catList.classList.toggle('categories__list--active')
})

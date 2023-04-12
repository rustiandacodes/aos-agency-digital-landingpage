const menu = document.querySelector('.menu')
const subMenu1 = document.querySelector('.sub-menu-1')
const subMenu2 = document.querySelector('.sub-menu-2')
const subMenu3 = document.querySelector('.sub-menu-3')
const subMenu4 = document.querySelector('.sub-menu-4')
const ul = document.querySelector('ul')

const toogleMenu = () => {
  ul.classList.toggle('show')
}

menu.addEventListener('click', () => toogleMenu())
subMenu1.addEventListener('click', () => toogleMenu())
subMenu2.addEventListener('click', () => toogleMenu())
subMenu3.addEventListener('click', () => toogleMenu())
subMenu4.addEventListener('click', () => toogleMenu())

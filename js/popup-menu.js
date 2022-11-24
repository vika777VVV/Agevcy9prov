'use strict';
const menuWrapper = document.querySelector('.popup-menu');
const menuButton = document.querySelector('.popup-menu__button');
const menuList = document.querySelector('.popup-menu__list');

function showMenu() {
    menuList.classList.toggle('hide');
}

menuButton.addEventListener('click',showMenu);

menuButton.addEventListener('click',closeMenu);

const mobileMenuIcon = document.querySelector('.mobile-menu__icon');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close');
const mobileMenuList = document.querySelector('.mobile-menu__list');

function mobileMenuOpen() {
  mobileMenuIcon.style.display = 'none';
  mobileMenuList.style.display = 'block';
  mobileMenuCloseBtn.style.display = 'block';
  mobileMenuList.classList.add('mobile-menu_open');
}

function mobileMenuClose() {
  mobileMenuCloseBtn.style.display = 'none';
  mobileMenuList.style.display = 'none';
  mobileMenuIcon.style.display = 'block';
}

mobileMenuCloseBtn.addEventListener('click', mobileMenuClose);
mobileMenuIcon.addEventListener('click', mobileMenuOpen);

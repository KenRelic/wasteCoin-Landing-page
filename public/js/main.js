/*GLOBAL VARIABLES*/
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.nav');
let menuItemWrapper = document.querySelector('.menu-items-section');
let menuLinks = document.querySelectorAll('.menu-items-section a');
menuItemWrapper = Array.from(menuItemWrapper.children);

menuIcon.addEventListener('click', displayMenu);
menuLinks.forEach(link=> link.addEventListener('click', closeMenuBar))

window.onscroll = function (e) {
  let offset = window.pageYOffset;
  if (offset > 80) {
    return navBar.classList.replace('nav-style-dark', 'nav-style-light');
  };
  return navBar.classList.replace('nav-style-light', 'nav-style-dark');
};

function displayMenu() {
  navBar.style.height = '100vh';
  document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  menuIcon.children[0].classList.replace('fa-bars', 'fa-times');
  menuIcon.removeEventListener('click', displayMenu);
  menuIcon.addEventListener('click', closeMenuBar);
};

function closeMenuBar() {
  navBar.style.height = '60px';
  document.getElementsByTagName('html')[0].style.overflowY = 'auto';
  menuIcon.children[0].classList.replace('fa-times', 'fa-bars');
  menuIcon.removeEventListener('click', closeMenuBar);
  menuIcon.addEventListener('click', displayMenu);
};



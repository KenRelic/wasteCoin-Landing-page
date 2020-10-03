//GLOBAL VARIABLES
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.nav');
const navBarSwirl = document.querySelector('.nav .navbar-swirl');
let menuItemWrapper = document.querySelector('.menu-items-section');
menuItemWrapper = Array.from(menuItemWrapper.children);

window.onscroll = function (e) {
  let offset = window.pageYOffset;
  if(offset > 80){
    return navBar.classList.replace('nav-style-dark','nav-style-light')
  }
  return navBar.classList.replace('nav-style-light','nav-style-dark')
}

function displayMenu() {
  navBar.style.height = '300px';
  menuIcon.children[0].classList.replace('fa-bars','fa-times');
  menuIcon.removeEventListener('click', displayMenu)
  menuIcon.addEventListener('click', closeMenuBar)
}

function closeMenuBar() {
  navBar.style.height = '60px';
  menuIcon.children[0].classList.replace('fa-times','fa-bars');
  menuIcon.removeEventListener('click', closeMenuBar)
  menuIcon.addEventListener('click', displayMenu)
}

menuIcon.addEventListener('click', displayMenu)
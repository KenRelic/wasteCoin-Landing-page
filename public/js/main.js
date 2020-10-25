/*GLOBAL VARIABLES*/
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.nav');
const navBarSwirl = document.querySelector('.nav .navbar-swirl');
let menuItemWrapper = document.querySelector('.menu-items-section');
menuItemWrapper = Array.from(menuItemWrapper.children);
let getAppBtns = document.querySelectorAll('.get-app-btn');

getAppBtns = Array.from(getAppBtns);
menuIcon.addEventListener('click', displayMenu);

getAppBtns.forEach(btn => btn.addEventListener('click', openGetAppPage));

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

function openGetAppPage() {
  window.open('./get-app.html', '_self')
}
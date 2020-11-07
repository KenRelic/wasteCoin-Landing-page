/*GLOBAL VARIABLES*/
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.nav');
let menuItemWrapper = document.querySelector('.menu-items-section');
let menuLinks = document.querySelectorAll('.menu-items-section a');
menuItemWrapper = Array.from(menuItemWrapper.children);

menuIcon.addEventListener('click', displayMenu);
menuIcon.addEventListener('keyup', (e) => {
  if (e.keyCode == 13 || e.which == 13) displayMenu();
});
menuLinks.forEach(link => link.addEventListener('click', () => {
  preventTabndexing();
  closeMenuBar();
  return;
}));
menuLinks.forEach(link => link.addEventListener('keyup', (e) => {
  if (e.keyCode == 13 || e.which == 13) {
    preventTabndexing();
    closeMenuBar();
    return;
  };
}));

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
  allowTabIndexing();
  menuIcon.removeEventListener('click', displayMenu);
  menuIcon.addEventListener('click', closeMenuBar);
  menuIcon.removeEventListener('keyup', (e) => {
    if (e.keyCode == 13 || e.which == 13) displayMenu();
  })
  menuIcon.addEventListener('keyup', (e) => {
    if (e.keyCode == 13 || e.which == 13) closeMenuBar();
  })
};

function closeMenuBar() {
  navBar.style.height = '60px';
  document.getElementsByTagName('html')[0].style.overflowY = 'auto';
  menuIcon.children[0].classList.replace('fa-times', 'fa-bars');
  preventTabndexing();
  menuIcon.removeEventListener('click', closeMenuBar);
  menuIcon.addEventListener('click', displayMenu);
  menuIcon.removeEventListener('keyup', (e) => {
    if (e.keyCode == 13 || e.which == 13) closeMenuBar();
  })
  menuIcon.addEventListener('keyup', (e) => {
    if (e.keyCode == 13 || e.which == 13) displayMenu();
  })
  return;
};


window.onresize = function () {
  preventTabndexing();
}
function preventTabndexing() {
  let mediaQuery = window.matchMedia('(max-width: 960px)');
  if (mediaQuery.matches) {
    return menuLinks.forEach(link => link.setAttribute('tabindex', -1))
  }
  // closeMenuBar();
  return menuLinks.forEach(link => link.setAttribute('tabindex', 1))
}

function allowTabIndexing() {
  return menuLinks.forEach(link => link.setAttribute('tabindex', 1))
}

window.onload = function () {
 return preventTabndexing();
}


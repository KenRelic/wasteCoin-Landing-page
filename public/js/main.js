/*GLOBAL VARIABLES*/
const menuIcon = document.querySelector('.menu-icon');
let menuItemWrapper = document.querySelector('.menu-items-section');
let menuLinks = document.querySelectorAll('.menu-items-section-mobile a');
menuItemWrapper = Array.from(menuItemWrapper.children);
let navBars = document.querySelectorAll('.nav');
let mobileMenuItemWrapper = document.querySelector('.menu-items-section-mobile');
navBars = Array.from(navBars);

menuIcon.addEventListener('click', displayMenu);
menuIcon.addEventListener('keyup', (e) => {
  if (e.keyCode == 13 || e.which == 13) displayMenu();
});
menuLinks.forEach(link => link.addEventListener('click', () => {
  // preventTabndexing();
  closeMenuBar();
  return;
}));
menuLinks.forEach(link => link.addEventListener('keyup', (e) => {
  if (e.keyCode == 13 || e.which == 13) {
    // preventTabndexing();
    closeMenuBar();
    return;
  };
}));

window.onscroll = function (e) {
  let offset = window.pageYOffset;
  if (offset > 80) {
    return navBars.forEach(nav => nav.classList.replace('nav-style-dark', 'nav-style-light'));
  };
  return navBars.forEach(nav => nav.classList.replace('nav-style-light', 'nav-style-dark'));
};

function displayMenu() {
  mobileMenuItemWrapper.style.top = '0';
  document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  menuIcon.children[0].classList.replace('fa-bars', 'fa-times');
  // allowTabIndexing();
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
  mobileMenuItemWrapper.style.top = '-102vh';
  document.getElementsByTagName('html')[0].style.overflowY = 'auto';
  menuIcon.children[0].classList.replace('fa-times', 'fa-bars');
  // preventTabndexing();
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
  resetMobileNavbar();
}

function resetMobileNavbar() {
  let mediaQuery = window.matchMedia('(max-width: 868px)');
  if (mediaQuery.matches) {
    return closeMenuBar();
  }
}

// function allowTabIndexing() {
//   return menuLinks.forEach(link => link.setAttribute('tabindex', 1))
// }

// window.onload = function () {
//   return preventTabndexing();
// }


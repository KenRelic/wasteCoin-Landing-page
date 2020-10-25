// const menuIcon=document.querySelector(".menu-icon"),navBar=document.querySelector(".nav"),navBarSwirl=document.querySelector(".nav .navbar-swirl");let menuItemWrapper=document.querySelector(".menu-items-section");function displayMenu(){navBar.style.height="100vh",menuIcon.children[0].classList.replace("fa-bars","fa-times"),menuIcon.removeEventListener("click",displayMenu),menuIcon.addEventListener("click",closeMenuBar)}function closeMenuBar(){navBar.style.height="60px",menuIcon.children[0].classList.replace("fa-times","fa-bars"),menuIcon.removeEventListener("click",closeMenuBar),menuIcon.addEventListener("click",displayMenu)}menuItemWrapper=Array.from(menuItemWrapper.children),window.onscroll=function(e){return window.pageYOffset>80?navBar.classList.replace("nav-style-dark","nav-style-light"):navBar.classList.replace("nav-style-light","nav-style-dark")},menuIcon.addEventListener("click",displayMenu);

const getAppBtn = document.querySelector('.get-app-btn');
getAppBtn.addEventListener('click', openGetAppPage)
function openGetAppPage(){
console.log('here')
}
hamburger = document.querySelector('.hamburger');
navMenu = document.querySelector('.nav-menu');
navLogo = document.querySelector('.nav-logo');
navListMenu = document.querySelector('.navlist-menu');

hamburger.addEventListener('click',()=>{
    navListMenu.classList.toggle('v-resp-navmenu');
    navLogo.classList.toggle('v-resp-navmenu');
    navMenu.classList.toggle('h-resp-navbar');
})



'use strict'
// creating constant varibles for different class names
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-logo');
const navListMenu = document.querySelector('.navlist-menu');

// adding addEventListener to toggle between different classes
hamburger.addEventListener('click',()=>{
    navListMenu.classList.toggle('v-resp-navmenu');
    navLogo.classList.toggle('v-resp-navmenu');
    navMenu.classList.toggle('h-resp-navbar');
})



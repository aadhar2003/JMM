const but = document.querySelector('.button');
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".nav")
const toggleNavBar=()=>{
    nav_header.classList.toggle('activ');
    but.classList.toggle('activu');
}
mobile_nav.addEventListener('click',()=>toggleNavBar())

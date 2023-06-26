

$(window).on("load", function () {
  $("#preloader").fadeOut();
});
const but = document.querySelector(".button");
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".nav");
const section = document.querySelector(".section-one");
const toggleNavBar = () => {
  nav_header.classList.toggle("activ");
  but.classList.toggle("activu");
  // section.classList.toggle('overflow');
};

mobile_nav.addEventListener("click", () => toggleNavBar());

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
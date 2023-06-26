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
  
  
  $('.mobile-navbar-btn').click(function(){
    if ( $('.section-one').css('overflow') == 'hidden' )
      $('.section-one').css('overflow','visible');
    else
      $('.section-one').css('overflow','hidden');
  });

  $('.mobile-navbar-btn').click(function(){
    if ( $('.contact').css('display') == 'flex' )
      $('.contact').css('display','none');
    else
      $('.contact').css('display','flex');
  });
// let path=document.querySelector('.l_1');
// let pathLength=path.getTotalLength();

// path.style.strokeDasharray=pathLength+' '+pathLength;
// path.style.strokeDashoffset=pathLength;
// window.addEventListener('scroll',()=>{
//     var scrollp=(document.documentElement.scrollTop+document.body.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);
//     var drawLen=pathLength*scrollp;

//     path.style.strokeDashoffset=pathLength-drawLen;

// })

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

$(".mobile-navbar-btn").click(function () {
  if ($(".section-one").css("overflow") == "hidden")
    $(".section-one").css("overflow", "visible");
  else $(".section-one").css("overflow", "hidden");
});
$(".mobile-navbar-btn").click(function () {
  if ($(".mobile-container").css("display") == "block"){
    var screen_width = window.innerWidth;
    $(".mobile-container").css("display", "none");
  }
  
 
  else $(".mobile-container").css("display", "block");
});





const svg = document.getElementById("l_1");
// if(screen_width<=440){
//   const svg = document.getElementById("mobile_line");
//   const length = svg.getTotalLength();

// // start positioning of svg drawing
// svg.style.strokeDasharray = length;

// // hide svg before scrolling starts
// svg.style.strokeDashoffset = length;

// window.addEventListener("scroll", function () {
//   // const sub=0.22635135135135134;
//   // const add=1.0003490188358966;
//   // const ok =0.5973818164035338;
//   // const l=2257.683932255513-1346.7955549397268;
//   const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//   const draw = ((length) * scrollpercent);

//   // Reverse the drawing when scroll upwards
//   svg.style.strokeDashoffset = length - draw;

// });

// }

const length = svg.getTotalLength();

// start positioning of svg drawing
svg.style.strokeDasharray = length;

// hide svg before scrolling starts
svg.style.strokeDashoffset = length;

window.addEventListener("scroll", function () {
  const sub = 0.22635135135135134;
  const add = 1.0003490188358966;
  const ok = 0.5973818164035338;
  const l = 2257.683932255513 - 1346.7955549397268;
  const scrollpercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight) -
    sub;
  const draw = (length + l + 370) * scrollpercent;

  // Reverse the drawing when scroll upwards
  svg.style.strokeDashoffset = length - draw;
});

// let path2=document.querySelector('#l_2');
// let pathLength2=path2.getTotalLength();

// path2.style.strokeDasharray=pathLength2;
// path2.style.strokeDashoffset=pathLength2;
// window.addEventListener('scroll',()=>{
//     var scrollp=(document.documentElement.scrollTop+document.body.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);
//     var drawLen=pathLength2*scrollp;

//     path2.style.strokeDashoffset=pathLength2-drawLen;

// })

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entery) => {
    if (entery.isIntersecting) {
      entery.target.classList.add("show");
    } else {
      entery.target.classList.remove("show");
    }
  });
});

const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => {
  observer.observe(el);
});

const observer2 = new IntersectionObserver((enteries) => {
  enteries.forEach((entery) => {
    if (entery.isIntersecting) {
      entery.target.style.opacity = 0.8;
      entery.target.style.transform = "translateY(0)";
      // entery.target.style.color='#8C2F39';
    } else {
    }
  });
});

const para = document.querySelectorAll(".con-para1");
para.forEach((el) => {
  observer2.observe(el);
});

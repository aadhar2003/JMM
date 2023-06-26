$(window).on("load", function () {
  $("#preloader").fadeOut();
});
const but = document.querySelector(".button");
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".nav");
const toggleNavBar = () => {
  nav_header.classList.toggle("activ");
  but.classList.toggle("activu");
};
mobile_nav.addEventListener("click", () => toggleNavBar());
const exp = document.querySelector('.exp #exppp');
const mediaQuery = window.matchMedia("(max-width: 62em)");

const handleClick = () => {
  if (mediaQuery.matches) {
    toggleNavBar();
  }
};

exp.addEventListener("click", handleClick);


const logo = document.querySelectorAll("#logo path");
// console.log(logo);

function mirchi() {
  let jssF = document.getElementById("jssFoucs");
  jssF.classList.remove("focus");
  document.getElementById("tb-img").src = "./images/nayiMirchiDK.png";
  document.getElementById("role").innerHTML = "Marketing Consultant";
  document.getElementById("bold").innerHTML = " @Mirchimarketing";
  document.getElementById("time").innerHTML = "October 2020 - December 2022";
  document.getElementById("AT").innerHTML =
    "Developed product launch plans, communication strategies, and presentations for wellness industry clients. Collaborated with internal and external stakeholders to drive success. Achieved an average 20% increase in revenue, demonstrating strong marketing and negotiation skills.";
  document.getElementById("AT2").innerHTML =
    "Achieved exceptional business growth by monitoring campaign performance for five brands over 3 years. Resulted in significant improvements in qualified traffic and leads.";
  document.getElementById("AT3").innerHTML =
    "Identified opportunities through data-driven insights and analysis of campaign performances, utilizing advanced problem-solving frameworks to engage various teams and execute action items within deadlines. This led to significant improvements in business performance and profitability, demonstrating exceptional leadership and project management skills.";
}
function JSS() {
  document.getElementById("tb-img").src = "./images/jjsfinal.png";
  document.getElementById("role").innerHTML = "Assisting Marketing Manager";
  document.getElementById("bold").innerHTML = " @JJS Inc.";
  document.getElementById("time").innerHTML = "June 2021- Present";
  document.getElementById("AT").innerHTML =
    "Managed product launch events, coordinating with vendors and stakeholders for successful execution. Generated $100,000+ in sales and achieved a reported ROI of +67% through CRM.";
  document.getElementById("AT2").innerHTML =
    "Conducted market research, analyzed customer insights, and executed marketing plans. Achieved $45,000+ in sales through social media inbound leads in six months. Increased conversion rates by 15% through improved product positioning and messaging.";
  document.getElementById("AT3").innerHTML =
    "Managed website updates, collaborating with stakeholders and IT teams. Tracked metrics and monitored customer behavior to identify opportunities, improving audience analysis, SEO rankings, and organic traffic.";
}
function NMA() {
  let jssF = document.getElementById("jssFoucs");
  jssF.classList.remove("focus");
  document.getElementById("tb-img").src = "./images/mosaic final.png";
  document.getElementById("role").innerHTML = "Marketing Coordinator";
  document.getElementById("bold").innerHTML = " @Mosiac North America";
  document.getElementById("time").innerHTML = "March 2021 - June 2021";
  document.getElementById("AT").innerHTML =
    "Analyzed 25+ SEM campaign reports, utilized Meta Suite dashboards to enhance product positioning. Achieved 70% website visit growth and notable revenue improvements. ";
  document.getElementById("AT2").innerHTML =
    "Pilot tested and delivered 15 websites for Small and Medium Businesses in partnership with Shopify. Increased customer satisfaction ratings by 50%.";
  document.getElementById("AT3").innerHTML =
    "Produced comprehensive digital marketing strategies, driving growth and profitability through an omni-channel approach. Recognized as Coordinator of the Month.";
}
function EY() {
  let jssF = document.getElementById("jssFoucs");
  jssF.classList.remove("focus");

  document.getElementById("tb-img").src = "./images/ey.png";
  document.getElementById("role").innerHTML = "Financial Audit Assistant ";
  document.getElementById("bold").innerHTML = " @ERNST & YOUNG ";
  document.getElementById("time").innerHTML = "August 2019 - December 2019";
  document.getElementById("AT").innerHTML =
    "Demonstrated expertise in audit procedures, conducting precise and accurate financial audit controls.";
  document.getElementById("AT2").innerHTML =
    "Utilized advanced analytical skills to identify and address accounting issues";
  document.getElementById("AT3").innerHTML =
    "ensuring compliance with regulations and guidelines";
}

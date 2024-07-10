const headerr = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".nav-menu");
const closee = document.querySelector(".nav-close");
const overlay = document.querySelector(".overlay");


menu.addEventListener("click", function(){
  navbar.classList.add("active");
  overlay.classList.add("active");
});


closee.addEventListener("click", function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });

window.addEventListener("scroll", function(){
   if(this.scrollY >=30 ) headerr.classList.add("active"); else headerr.classList.remove("active");
});
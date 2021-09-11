let mobileMenuBtn = document.querySelector("#mobile-menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener('click', () =>{
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "flex";
        mobileMenuBtn.innerHTML = "Close";
      }
      else {
        mobileMenu.style.display = "none";
        mobileMenuBtn.innerHTML = "Menu";
      }
})



var x = document.getElementById("mobileMenu");
var y = document.getElementById("menu");
 x.addEventListener('click', ()=>{
   if(y.style.display==='none'){
     y.style.display= 'block';
     x.innerHTML= 'close'
   }
   else{
     y.style.display = 'none'
     x.innerHTML= 'menu';
   }
 })


function myFunction() {
  var x = document.getElementById("mobileMenu");
  var y = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} 
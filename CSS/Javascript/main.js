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


console.log("helloooo");
console.log("helloooo");




function myFunction() {
  console.log("helloooo");
  var x = document.getElementById("mobileMenu");
  var y = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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


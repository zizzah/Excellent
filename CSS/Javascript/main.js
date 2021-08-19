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
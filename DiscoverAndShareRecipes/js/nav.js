
// setup nav with different selectors
const navBtn = document.getElementById("nav-btn"); //  using getElementById
const navbar = document.querySelector("#navbar"); // using CSS selector by #
const navClose = document.querySelector(".nav-close");  //using querySelector with class selectors
// Show nav
navBtn.addEventListener("click", function() {
  navbar.classList.add("showNav");
});

// Close nav
navClose.addEventListener("click", function() {
  navbar.classList.remove("showNav");
});
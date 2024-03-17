var mybutton = document.getElementById("scrollTopButton");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// const navigationHeight = document.querySelector(".navbar").offsetHeight;
// document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + "px");


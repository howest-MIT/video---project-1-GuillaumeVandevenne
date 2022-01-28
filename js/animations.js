var vinyl = document.querySelector("#vinyl-rotate");

window.onscroll = function() {
var degree = document.documentElement.scrollTop / 50 % Math.PI;

vinyl.style.transform = "rotate(" + degree + "rad)";
 }
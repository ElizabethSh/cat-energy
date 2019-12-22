/*var slideBefore = document.getElementById("slide-before");
var slideAfter = document.getElementById("slide-after");

slideAfter.addEventListener("click", moveLeft);
function moveLeft() {
  slideBefore.style.display = "block";
}*/

var slider = document.querySelector(".slider");
var sliderToggle = document.querySelector(".slider__button");

slider.classList.remove("slider__no-js");

sliderToggle.addEventListener("click", function() {
  if (slider.classList.contains("slider__left")) {
    slider.classList.remove("slider__left");
    slider.classList.add("slider__right");
  } else {
    slider.classList.add("slider__left");
    slider.classList.remove("slider__right");
  }
});

import "./styles.css";
var value = document.getElementById("value");
var block = document.getElementById("block");
document.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  value.innerHTML = scrollPercentRounded;
  console.log(block.getBoundingClientRect().bottom);
});

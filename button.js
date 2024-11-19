console.log("file is working");

let backgroundButton = document.getElementById("button");
let cloudLink = document.getElementById("cloud");
let gridLink = document.getElementById("links");

backgroundButton.addEventListener("click", function (event) {
  console.log("clicked");
  document.body.classList.toggle("button-active");
  cloudLink.classList.toggle("cloud-active");
  gridLink.classList.toggle("links-active");
});

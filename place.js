console.log("file is working");

let backgroundButton = document.getElementById("button");
let websiteLink = document.getElementById("link");

backgroundButton.addEventListener("click", function (event) {
  console.log("clicked");
  document.body.classList.toggle("button-active");
  websiteLink.classList.toggle("link-active");
});

console.log("file is working");

let backgroundButton = document.getElementById("button");

backgroundButton.addEventListener("click", function (event) {
  console.log("clicked");
  document.body.classList.toggle("button-active");
});

// body.onclick = function () {
//     this.classList.toggle("summary-active");
//   };

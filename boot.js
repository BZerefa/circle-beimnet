console.log("file is working");

let button = document.getElementById("button");

button.adEventListener("click", function (event) {
  console.log("clicked");
});

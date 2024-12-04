function clickInstructions(el) {
  let title = document.getElementById("title");
  let subtitle = document.getElementById("subtitle");

  if (el == title) {
    console.log("title");
  } else if (el == subtitle) {
    console.log("subtitle clicked");
  }
}

document.addEventListener("click", function (event) {
  clickInstructions(event.target);
});

let p = document.createElement("p");
let firstText = document.createTextNode(
  "The internet is made up of simple principles. The internet is abstracted to the point of being indiscernible from "
);
let secondText = document.createTextNode(" to the average person.");

let span = document.createElement("span");
span.appendChild(document.createTextNode("magic"));
span.id = "magic";

p.appendChild(firstText);
p.appendChild(span);
p.appendChild(secondText);
document.body.appendChild(p);

let magicSpan = document.getElementById("magic");
document.addEventListener("click", function (event) {
  clickInstructions(event.target);
  span.classList.toggle("magic-active");
});

// let places = ["ocean", "subway", "field"];

// let listOfPlaces = "";
// for (let i = 0; i < places.length; i++) {
//     listOfPlaces += places[i] + " ";
// }
// let list = document.createElement("p");
// list.innerHTML = listOfPlaces;
// document.body.appendChild(list);

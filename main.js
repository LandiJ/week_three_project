var buttons = document.querySelectorAll(".button");
// var calculator = document.querySelector("#calc_body");
var box = document.querySelector(".calc_box");
var div = document.querySelector("div");
var clear = document.querySelector("#large_c");

console.log(buttons);

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var value = event.target.innerHTML;
    box.textContent += value;
  });
}

clear.addEventListener("click", function() {
  box.textContent = "";
});

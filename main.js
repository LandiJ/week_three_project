var buttons = document.querySelectorAll(".button");
// var calculator = document.querySelector("#calc_body");
var box = document.querySelector(".calc_box");
var div = document.querySelector("div");
var clear = document.querySelector("#large_c");
var equals = document.querySelector("#equals");

console.log(buttons);

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    box.textContent += event.target.innerHTML;
  });
}

clear.addEventListener("click", function() {
  box.textContent = "";
});

equals.addEventListener("click", function() {
  var value = box.innerHTML;
  var total = eval(value);
  console.log("total: ", total);
});

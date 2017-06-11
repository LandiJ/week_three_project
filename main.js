var buttons = document.querySelectorAll(".button");
// var calculator = document.querySelector("#calc_body");
var box = document.querySelector(".calc_box");
var div = document.querySelector("div");
var clear = document.querySelector("#large_c");
var equals = document.querySelector("#equals");
var multiply = document.querySelector("#multiply");
var operator = document.querySelectorAll(".operator");

box.innerHTML = "";

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    box.innerHTML += event.target.innerHTML;
  });
}

multiply.addEventListener("click", function() {
  box.innerHTML += "*";
});

var nums = [];
var total = [];
var operatorsUsed = [];

console.log(nums);

clear.addEventListener("click", function() {});

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    nums.push(event.target.innerHTML);
    console.log(nums);
  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function() {
    box.innerHTML += event.target.innerHTML;
    var numNum = parseInt(nums.join(""));
    total.push(numNum);
    total.push(event.target.innerHTML);
    operatorsUsed.push(event.target.innerHTML);
    nums = [];
    console.log(nums);
    console.log(total);
    console.log(operatorsUsed);
  });
}

equals.addEventListener("click", function() {
  total.push(nums);
  var newNum = null;
  if ((operatorsUsed.length = total.length - 1)) {
    if (total.indexOf("X") > -1) {
      newNum = total[total.indexOf("X") - 1] * total[total.indexOf("X") + 1];
      console.log(newNum);
      total.splice(total.indexOf("X") - 1, 1);
      total.splice(total.indexOf("X") + 1, 1);
      total[total.indexOf("X")] = newNum;
      console.log(total);
      newNum = null;
    }
  }
});

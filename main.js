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
    if (box.innerHTML.length < 16) {
      box.innerHTML += event.target.innerHTML;
    }
  });
}

var nums = [];
var total = [];
var operatorsUsed = [];

clear.addEventListener("click", function() {
  nums = [];
  total = [];
  operatorsUsed = [];
  box.innerHTML = "";
});

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    nums.push(event.target.innerHTML);
    console.log(nums);
  });
}

if (nums.length > 0) {
  multiply.addEventListener("click", function() {
    if (box.innerHTML.length < 16) {
      box.innerHTML += "*";
    }
  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function() {
    {
      if (event.target.id != "multiply" && box.innerHTML.length < 16) {
        box.innerHTML += event.target.innerHTML;
      }
      var numNum = nums.join("");
      total.push(numNum);
      total.push(event.target.innerHTML);
      operatorsUsed.push(event.target.innerHTML);
      nums = [];
      console.log(nums);
      console.log(total);
      console.log(operatorsUsed);
    }
  });
}

equals.addEventListener("click", function() {
  total.push(nums);
  var newNum = null;
  if ((operatorsUsed.length = total.length - 1)) {
    for (var i = 0; i < total.length; i++) {
      if (total.indexOf("X") > -1 && total.indexOf("X") < total.indexOf("/")) {
        newNum = total[total.indexOf("X") - 1] * total[total.indexOf("X") + 1];
        console.log(newNum);
        total.splice(total.indexOf("X") - 1, 1);
        total.splice(total.indexOf("X") + 1, 1);
        total[total.indexOf("X")] = newNum;
        console.log(total);
        newNum = null;
      }
      if (total.indexOf("/") > -1) {
        newNum = total[total.indexOf("/") - 1] / total[total.indexOf("/") + 1];
        console.log(newNum);
        total.splice(total.indexOf("/") - 1, 1);
        total.splice(total.indexOf("/") + 1, 1);
        total[total.indexOf("/")] = newNum;
        console.log(total);
        newNum = null;
      }

      if (total.indexOf("/") > -1 && total.indexOf("/") < total.indexOf("X")) {
        newNum = total[total.indexOf("/") - 1] / total[total.indexOf("/") + 1];
        console.log(newNum);
        total.splice(total.indexOf("/") - 1, 1);
        total.splice(total.indexOf("/") + 1, 1);
        total[total.indexOf("/")] = newNum;
        console.log(total);
        newNum = null;
      }
      if (total.indexOf("X") > -1) {
        newNum = total[total.indexOf("X") - 1] * total[total.indexOf("X") + 1];
        console.log(newNum);
        total.splice(total.indexOf("X") - 1, 1);
        total.splice(total.indexOf("X") + 1, 1);
        total[total.indexOf("X")] = newNum;
        console.log(total);
        newNum = null;
      }
      if (total.indexOf("+") > -1 && total.indexOf("+") < total.indexOf("-")) {
        newNum =
          parseFloat(total[total.indexOf("+") - 1]) +
          parseFloat(total[total.indexOf("+") + 1]);
        console.log(newNum);
        total.splice(total.indexOf("+") - 1, 1);
        total.splice(total.indexOf("+") + 1, 1);
        total[total.indexOf("+")] = newNum;
        console.log(total);
        newNum = null;
      }

      if (total.indexOf("-") > -1) {
        newNum =
          parseFloat(total[total.indexOf("-") - 1]) -
          parseFloat(total[total.indexOf("-") + 1]);
        console.log(newNum);
        total.splice(total.indexOf("-") - 1, 1);
        total.splice(total.indexOf("-") + 1, 1);
        total[total.indexOf("-")] = newNum;
        console.log(total);
        newNum = null;
      }
      if (total.indexOf("-") > -1 && total.indexOf("-") < total.indexOf("+")) {
        newNum =
          parseFloat(total[total.indexOf("-") - 1]) -
          parseFloat(total[total.indexOf("-") + 1]);
        console.log(newNum);
        total.splice(total.indexOf("-") - 1, 1);
        total.splice(total.indexOf("-") + 1, 1);
        total[total.indexOf("-")] = newNum;
        console.log(total);
        newNum = null;
      }
      if (total.indexOf("+") > -1) {
        newNum =
          parseFloat(total[total.indexOf("+") - 1]) +
          parseFloat(total[total.indexOf("+") + 1]);
        console.log(newNum);
        total.splice(total.indexOf("+") - 1, 1);
        total.splice(total.indexOf("+") + 1, 1);
        total[total.indexOf("+")] = newNum;
        console.log(total);
        newNum = null;
      }
      if (total.indexOf("%") > -1 && total.length === 3) {
        newNum =
          parseInt(total[total.indexOf("%") - 1]) %
          parseInt(total[total.indexOf("%") + 1]);
        total.splice(total.indexOf("%") - 1, 1);
        total.splice(total.indexOf("%") + 1, 1);
        total[total.indexOf("%")] = newNum;
        console.log(total);
        newNum = null;
      }
      if (total.indexOf("√") > -1) {
        newNum = Math.sqrt(total[total.indexOf("√") + 1]);
        total.splice(total.indexOf("√") + 1, 1);
        total.splice(total.indexOf("√") - 1, 1);
        total[total.indexOf("√")] = newNum;
        console.log(total);
        console.log(total.length);
        newNum = null;
      }
    }
  }
  box.innerHTML = parseFloat(total).toFixed(5).toString();
});

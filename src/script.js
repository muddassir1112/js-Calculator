var queue = [];
var input = 0;
// function to calculate the values in the queue array
function calculateQueue(value) {
  if (input !== 0) {
    input = parseFloat(input);
    addToQueue(input);
  }
  var answer = value[0];
  var dividedByZero = 0;
  for (var i = 2; i < value.length; i = i + 2) {
    switch (queue[i - 1]) {
      case "+":
        answer += value[i];
        break;
      case "-":
        answer -= value[i];
        break;
      case "/":
        if (value[i] === 0) dividedByZero = 1;
        else answer = answer / value[i];
        break;
      case "*":
        answer = answer * value[i];
        break;
    }
  }
// The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals.
  answer = answer.toFixed(10);
  answer = parseFloat(answer);
  if (dividedByZero === 1) {
    clearAll();
    document.getElementById("answer").innerHTML = "ERROR";
  } else {
    document.getElementById("answer").innerHTML = answer;
    input = answer;
    queue = [];
  }
}
// function to add input value to array queue
function addToQueue(input) {
  queue.push(input);
}
// function to clear the results
function clearAll() {
  queue = [];
  input = 0;
  document.getElementById("answer").innerHTML = "0";
}
//function to handle the nmumeric keys
function numericButton(arg) {
  if (
    document.getElementById("answer").innerHTML === "ERROR" ||
    (document.getElementById("answer").innerHTML == "0" && arg != ".")
  ) {
    document.getElementById("answer").innerHTML = "";
  }
  if (!(arg === ".") || !input.match(/[.]/)) {
    input += arg;
    document.getElementById("answer").innerHTML += arg;
  }
}
//function ot handle the keys of operators
function operatorButton(arg) {
  if (input !== 0 && input !== "-") {
    input = parseFloat(input);
    addToQueue(input);
    addToQueue(arg);
    document.getElementById("answer").innerHTML += arg;
    input = 0;
  }
  if (arg == "-" && isNaN(queue[0]) && input !== "-") {
    input = "-";
    document.getElementById("answer").innerHTML = "-";
  }
}

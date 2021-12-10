let a = 10;
let b = 20;
let operator = "+";

function math(a, b, operator) {
  let res;
  if (operator == "+") res = a + b;
  else if (operator == "-") res = a - b;
  else if (operator == "*") res = a * b;
  else if (operator == "==") res = a;

  return res;
}

console.log(math(a, b, operator));
operator = "-";
console.log(math(a, b, operator));
operator = "*";
console.log(math(a, b, operator));
operator = "==";
console.log(math(a, b, operator));

const sumAll = function (num1, num2) {
  let result = 0;
  let high;
  let low;
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
    return "ERROR";
  }

  if (num1 > num2) {
    high = num1;
    low = num2;
  } else {
    high = num2;
    low = num1;
  }

  for (let i = low; i <= high; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;

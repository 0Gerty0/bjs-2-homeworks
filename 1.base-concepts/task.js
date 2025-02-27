"use strict"
function solveEquation(a, b, c) {

  let d = b ** 2 - 4 * a * c;
  if (d<0) {
      return [];
  }
  else if (d === 0) {
      return [-b / (2 * a)]
  }

  else {
      return [
          (-b + Math.sqrt(d)) / (2 * a),
          (-b - Math.sqrt(d)) / (2 * a)
      ];
  }
}


function calculateTotalMortgage (percent, contribution, amount, countMonth)  {

  let monthlyRate = (percent / 100) / 12;

  let loanBody = amount - contribution;

  if (loanBody <= 0) {
      return 0;
  }
  let monthlyPayment = loanBody * (monthlyRate + (monthlyRate/((1 + monthlyRate)**countMonth - 1)));
  let totalAmount = monthlyPayment * countMonth;
  return Number(totalAmount.toFixed(2));
}

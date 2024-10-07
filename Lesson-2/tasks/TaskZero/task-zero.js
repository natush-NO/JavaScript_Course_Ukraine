"use strict";

let number1 = 12;
let number2 = 3;
let number3 = 8;

function calculateExpressions() {
  const totalSumWithOffset = number1 + 12 + number2;
  const averageSqrt = Math.sqrt((number1 + number2) / (2 * number1));
  const cubicRootOfWeightedSum = Math.cbrt((number1 + number2) * number3);
  const sineOfNegativeRatio = Math.sin(number1 / -number2);

  alert(
    `S1 = ${totalSumWithOffset}\nS2 = ${averageSqrt}\nS3 = ${cubicRootOfWeightedSum}\nS4 = ${sineOfNegativeRatio}`
  );
}

calculateExpressions();

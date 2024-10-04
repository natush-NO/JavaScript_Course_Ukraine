"use strict";

let number1 = 12;
let number2 = 3;
let number3 = 8;

function calculateExpressions() {
  const S1 = number1 + 12 + number2;
  const S2 = Math.sqrt((number1 + number2) / (2 * number1));
  const S3 = Math.cbrt((number1 + number2) * number3);
  const S4 = Math.sin(number1 / -number2);

  alert(`S1 = ${S1}\nS2 = ${S2}\nS3 = ${S3}\nS4 = ${S4}`);
}

calculateExpressions();

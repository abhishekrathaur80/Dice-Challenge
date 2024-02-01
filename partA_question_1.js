/*
The total possible combination will be 6*6 = 36;

1+1 = 2;
1+2 = 3
1+4=5;
1+6=7;
------
------
------
6+6 = 12

*/

function calculateTotalCombinations(numFaces) {
  return numFaces * numFaces;
}

const totalCombinations = calculateTotalCombinations(6); // Two six side faces Dice
console.log("Total Combinations: " + totalCombinations);

//Output
/*

PS C:\Users\HP\Desktop\securin> node partA_question_1.js
Total Combinations: 36

*/

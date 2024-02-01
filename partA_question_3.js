// Define the faces of Die A and Die B
const dieA = [1, 2, 3, 4, 5, 6];
const dieB = [1, 2, 3, 4, 5, 6];

// Create a 6x6 matrix to represent the distribution of sums
const distribution = Array.from({ length: 6 }, () => Array(6).fill(0));

// Populate the distribution matrix with sums of Die A and Die B
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    distribution[i][j] = dieA[i] + dieB[j];
  }
}

// Calculate  the probability of sums

function probabilitySum(sum, distribution) {
  for (let k = 2; k <= 12; k++) {
    let count = 0;

    // Count the number of combinations that result in the current sum
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if (distribution[i][j] === sum) {
          count++;
        }
      }
    }
    return count;
  }
}

const probability = probabilitySum(8, distribution);

console.log(`Probility Sum : ${probability}/36`);

/*
P(Sum = 2) = 1/36
P(Sum = 3) = 2/36
P(Sum = 4) = 3/36
P(Sum = 5) = 4/36
P(Sum = 6) = 5/36
P(Sum = 7) = 6/36
P(Sum = 8) = 5/36
PS C:\Users\HP\Desktop\securin> node partA_question_3.js
Probility Sum : 5/36
P(Sum = 9) = 4/36
P(Sum = 10) = 3/36
P(Sum = 11) = 2/36
P(Sum = 12) = 1/36
*/

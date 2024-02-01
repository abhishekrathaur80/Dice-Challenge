// Function to generate all possible combinations
function generateCombinations() {
  const dieA = [1, 2, 3, 4, 5, 6];
  const dieB = [1, 2, 3, 4, 5, 6];

  const combinations = [];

  for (let i = 0; i < dieA.length; i++) {
    for (let j = 0; j < dieB.length; j++) {
      combinations.push({ DieA: dieA[i], DieB: dieB[j] });
    }
  }

  return combinations;
}

// Function to display all combinations in a 6x6 matrix
function displayCombinationsMatrix(combinations) {
  const matrix = Array.from({ length: 6 }, () => Array(6).fill(""));

  combinations.forEach((combination) => {
    const rowIndex = combination.DieA - 1; // Adjust for 0-based index
    const colIndex = combination.DieB - 1; // Adjust for 0-based index
    matrix[rowIndex][colIndex] = ` (${combination.DieA},  ${combination.DieB})`;
  });

  // Display the matrix
  console.log("Combinations Matrix:");
  matrix.forEach((row) => console.log(row.join("\t")));
}

// Generate all combinations
const allCombinations = generateCombinations();

// Display all combinations in a 6x6 matrix
displayCombinationsMatrix(allCombinations);

//Output
/*

PS C:\Users\HP\Desktop\securin> node partA_question_2.js
Combinations Matrix:
 (1,  1)         (1,  2)         (1,  3)         (1,  4)         (1,  5)         (1,  6)
 (2,  1)         (2,  2)         (2,  3)         (2,  4)         (2,  5)         (2,  6)
 (3,  1)         (3,  2)         (3,  3)         (3,  4)         (3,  5)         (3,  6)
 (4,  1)         (4,  2)         (4,  3)         (4,  4)         (4,  5)         (4,  6)
 (5,  1)         (5,  2)         (5,  3)         (5,  4)         (5,  5)         (5,  6)
 (6,  1)         (6,  2)         (6,  3)         (6,  4)         (6,  5)         (6,  6)


*/

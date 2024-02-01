function undoomDice(dieA, dieB) {
  const idle = probabilitySet(dieA, dieB);

  // Die A cannot have more than 4 Spots on a face.
  // Die A may have multiple faces with the same number of spots.
  // No New_Die A[x] > 4
  // Therefore considering all the faces of dice A having 4 Spots.
  const newDieA = [4, 4, 4, 4, 4, 4];

  // Die B can have as many spots on a face as necessary i.e. even more than 6.
  // Die B satisfies the condition, therefore dieB is used as it is.

  let result = probabilitySet(newDieA, dieB);
  let status = areSetsEqual(idle, result);
  let i = 0;

  while (!status) {
    newDieA[i] = i + 1;
    result = probabilitySet(newDieA, dieB);
    status = areSetsEqual(idle, result);
    i++;
  }

  console.log("New Die A = " + JSON.stringify(newDieA));
  console.log("New Die B = " + JSON.stringify(dieB));

  return result;
}

function probabilitySet(dieA, dieB) {
  const probabilityPossibleSumsMap = new Map();

  for (let i = 0; i < dieA.length; i++) {
    for (let j = 0; j < dieB.length; j++) {
      const sum1 = dieA[i] + dieB[j];
      probabilityPossibleSumsMap.set(
        sum1,
        (probabilityPossibleSumsMap.get(sum1) || 0) + 1
      );
    }
  }

  return new Set(probabilityPossibleSumsMap.values());
}

function areSetsEqual(setA, setB) {
  if (setA.size !== setB.size) {
    return false;
  }

  for (let item of setA) {
    if (!setB.has(item)) {
      return false;
    }
  }

  return true;
}

const dieA = [1, 2, 3, 4, 5, 6];
const dieB = [1, 2, 3, 4, 5, 6];

undoomDice(dieA, dieB);

/*
PS C:\Users\HP\Desktop\securin> node partB.js
New Die A = [1,2,3,4,4,4]
New Die B = [1,2,3,4,5,6]
*/

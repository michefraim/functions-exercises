//Question 1
function myReverse(str) {
  let str2 = str.split("");
  str2.reverse();
  let strNew = str2.join("");
  return strNew;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
}

//Question 3
function allCaps(str) {
  const arr = str.split(" ");
  for (let i = 0; i < arr.leng; i++) {
    toUpperCase(arr[i][0]); 
  }
  strNew = arr.join("");
  return strNew;
}
//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// Don't touch me :)

exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;

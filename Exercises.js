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
  for (let i = 0; i < arr.length; i++) {
    const newStr = arr[i][0].toUpperCase() + arr[i].substring(1);
    arr[i] = newStr;
  }
  newStr = arr.join(" ");
  return newStr;
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

const str = "the quick brown fox";
// const arr = str.split(" ");
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   let newStr = arr[i][0].toUpperCase() + arr[i].substring(1);
//   arr[i] = newStr;
//   console.log(newStr);
// }
// newStr = arr.join(" ");
// console.log(newStr);


// Don't touch me :)

exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;

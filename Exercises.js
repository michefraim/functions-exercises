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
  return Math.pow(x, n); // Am i missing something? lol
}

//Question 5
function getFirstNotRepeating(str) {
  let pos = 0;
  for (let i = 0; i < str.length; i++) {
    const newStr = str.slice(0, i) + str.slice(i + 1); // removes 1 letter from the string.
    pos = newStr.indexOf(str[i]);
    if (pos === -1) {
      return str[i];
    }
  }
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++)  {
    if (num % i === 0) {
      sum += i; 
    }
  }

  if (num === sum) 
  {
    return true;
  }
  else {
   return false;
  }
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

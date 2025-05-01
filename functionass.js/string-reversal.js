function reverseString(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return str.split("").reverse().join("");
  }
}

let result1 = reverseString("Banana");
console.log(`Reversed: ${result1}`);

let result2 = reverseString("I am BB!");
console.log(`Reversed: ${result2}`);

let result3 = reverseString("A--11");
console.log(`Reversed: ${result3}`);

let result4 = reverseString("");
console.log(`Reversed: ${result4}`);

//string to array => str.split("").reverse().join("");
//"Banana".split("")
// → ["B", "a", "n", "a", "n", "a"]

//["B", "a", "n", "a", "n", "a"].reverse()
// → ["a", "n", "a", "n", "a", "B"]

//["a", "n", "a", "n", "a", "B"].join("")
// → "ananaB"

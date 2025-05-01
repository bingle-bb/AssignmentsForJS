function validatePassword(password) {
  if (password.length < 8) {
    return false;
  } else if (!/[A-Z]/.test(password)) {
    return false;
  } else if (!/[a-z]/.test(password)) {
    return false;
  } else if (!/\d/.test(password)) {
    return false;
  }

  return true;
}
console.log(`User1 password is: ${validatePassword("Password123")}`);
console.log(`User2 password is: ${validatePassword("P123")}`);
console.log(`User3 password is: ${validatePassword("Pa12Ab34")}`);

// !/[A-Z]/.test(str) is used to check if there are no uppercase letters in a string.
// /[A-Z]/ => regular expression looks for any uppercase letter (from A to Z).
// .test() => checks whether the regular expression matches any part of the string str.Returns true if there is a match and false if there is no match.
// ! => if .test() method returns true (meaning an uppercase letter was found), the ! makes it false.If .test() method returns false (meaning no uppercase letter was found), the ! makes it true.

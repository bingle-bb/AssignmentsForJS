function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    return "Your grade is A";
  } else if (score >= 80 && score <= 89) {
    return "Your grade is B";
  } else if (score >= 70 && score <= 79) {
    return "Your grade is C";
  } else if (score >= 60 && score <= 69) {
    return "Your grade is D";
  } else {
    return "Your grade is F";
  }
}
console.log(calculateGrade(55));
console.log(calculateGrade(65));
console.log(calculateGrade(75));
console.log(calculateGrade(85));
console.log(calculateGrade(95));

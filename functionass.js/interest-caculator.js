function calculateSimpleInterest(principal, rate, time) {
  const interest = (principal * rate * time) / 100;
  return interest;
}

const forBB = calculateSimpleInterest(1000, 5, 2);
console.log("Simple Interest for BB: $" + forBB);

const forCC = calculateSimpleInterest(2000, 4, 3);
console.log("Simple Interest for CC : $" + forCC);

const forAA = calculateSimpleInterest(1500, 6, 1);
console.log("Simple Interest for AA: $" + forAA);

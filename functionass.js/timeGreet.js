function getGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  } else if (hour >= 18 && hour < 22) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

console.log(`This is a best time to say "${getGreeting(9)}" to everyone.`);
console.log(`This is a best time to say "${getGreeting(12)}" to everyone.`);
console.log(`This is a best time to say "${getGreeting(21)}" to everyone.`);
console.log(`This is a best time to say "${getGreeting(4)}" to everyone.`);

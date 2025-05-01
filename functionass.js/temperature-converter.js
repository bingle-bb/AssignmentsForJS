function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

let celsiusValue = 10;
let fahrenheitResult = celsiusToFahrenheit(celsiusValue);
console.log(`${celsiusValue}°C is equal to ${fahrenheitResult.toFixed(2)}°F`);

let fahrenheitValue = 50;
let celsiusResult = fahrenheitToCelsius(fahrenheitValue);
console.log(`${fahrenheitValue}°F is equal to ${celsiusResult.toFixed(2)}°C`);

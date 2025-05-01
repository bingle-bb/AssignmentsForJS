// Restaurant Bill Calculator
let Burger = 8.5,
  Fries = 3.25,
  Soda = 2.0,
  Dessert = 5.75;

let serviceChargeRate = 0.1;
let taxRate = 0.07;
let people = 5;

let totalBill = Burger + Fries + Soda + Dessert;
console.log("Total Bill : $" + totalBill);

let serviceCharge = totalBill * serviceChargeRate;
console.log("Service Charge : $" + serviceCharge);
totalBill = totalBill + serviceCharge;

let taxAmount = totalBill * taxRate;
console.log("Tax Amount : $" + taxAmount);
totalBill = totalBill + taxAmount;

let costPerPerson = totalBill / people;
console.log("Amount per person : $" + costPerPerson);
console.log("");

//Fuel Efficiency and Trip Cost Calculator
let distance = 300;
let fuelEfficiency = 25;
let fuelCostPerGallon = 3.75;

let fuelNeeded = distance / fuelEfficiency;
console.log("Fuel Needed: " + fuelNeeded + " gallons");

let tripCost = fuelNeeded * fuelCostPerGallon;
console.log("Trip Cost: $" + tripCost);
console.log("");

//Home Renovation Cost Estimator
let livingRoomArea = 200;
let livingRoomCostPerSquareFoot = 15;

let kitchenArea = 150;
let kitchenCostPerSquareFoot = 20;

let bathroomArea = 100;

let bathroomCostPerSquareFoot = 25;

let livingRoomCost = livingRoomArea * livingRoomCostPerSquareFoot;
console.log("Living Room Cost: $" + livingRoomCost);

let kitchenCost = kitchenArea * kitchenCostPerSquareFoot;
console.log("Kitchen Cost: $" + kitchenCost);

let bathroomCost = bathroomArea * bathroomCostPerSquareFoot;
console.log("Bathroom Cost: $" + bathroomCost);

let totalRenovationCost = livingRoomCost + kitchenCost + bathroomCost;
console.log("Total Renovation Cost: $" + totalRenovationCost);

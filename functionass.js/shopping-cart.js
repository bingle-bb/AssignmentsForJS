function calculateTotal(cartItems, taxRate) {
  //subtotal (sum of all item prices)
  let subtotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subtotal += cartItems[i];
  }

  //tax
  let taxAmount = subtotal * taxRate;

  // total with tax
  let total = subtotal + taxAmount;

  //final amount
  return total;
}

const items = [100, 2000, 3.5]; // item prices
const tax = 0.1; // 10% tax
const totalCost = calculateTotal(items, tax);
console.log("Total Cost: $" + totalCost.toFixed(2));

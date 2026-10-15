const customerName = "Afsa";
const storeName = "Afsa's Store";
const date = new Date().toLocaleDateString();

const item1 = "Laptop";
const item2 = "Mouse";

const price1 = 800000; 
const price2 = 15000;  

const quantity1 = 1;
const quantity2 = 2;

const item1Total = price1 * quantity1;
const item2Total = price2 * quantity2;
const subTotal = item1Total + item2Total;

const isMember = true;
let discount = 0;

if (isMember === true) {
    discount = subTotal * 0.10;
}

const vatRate = 0.18;
const vat = (subTotal - discount) * vatRate;
const finalAmount = (subTotal - discount) + vat;

const amountPaid = Number("900000"); 
const change = amountPaid - finalAmount;

const hasEnoughMoney = amountPaid >= finalAmount;
const canGetDiscount = isMember && subTotal > 50000;

const receiptNumber = Math.floor(Math.random() * 10000);


console.log("=================================");
console.log("          " + storeName);
console.log("=================================");
console.log("Receipt No: " + receiptNumber);
console.log("Customer: " + customerName);
console.log("Date: " + date);

console.log("---------------------------------");
console.log("Item\t\tPrice\tQty\tTotal");
console.log("---------------------------------");

console.log(item1 + "\t" + price1 + "\t" + quantity1 + "\t" + item1Total + " RWF");
console.log(item2 + "\t" + price2 + "\t" + quantity2 + "\t" + item2Total + " RWF");

console.log("---------------------------------");
console.log("Subtotal: " + subTotal + " RWF");
console.log("Discount: " + discount + " RWF");
console.log("VAT (18%): " + vat + " RWF");
console.log("Final Amount: " + finalAmount + " RWF");
console.log("Paid: " + amountPaid + " RWF");
console.log("Change: " + change + " RWF");

console.log("---------------------------------");

if (hasEnoughMoney) {
    console.log("Payment successful");
} else {
    console.log("Insufficient money");
}

if (canGetDiscount) {
    console.log("Member discount applied");
}

console.log("---------------------------------");
console.log("Thank you for shopping with us!");
console.log("=================================");
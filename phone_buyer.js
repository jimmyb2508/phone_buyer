const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = prompt( “How much money do you have in your bank account?” );
var amount = 0;

function calculateTax( amount ) {
return amount = amount * TAX_RATE;
}

function formatOutput ( amount ) {
return amount = “$” + amount.toFixed ( 2 );
}

while (amount < bank_balance) {
amount = amount + PHONE_PRICE;

if (amount < SPENDING_THRESHOLD) {
amount = amount + ACCESSORY_PRICE;
}
}

amount = amount + calculateTax( amount );
console.log(“The total cost would be ” + formatOutput( amount ));

if ( amount > bank_balance ) {
console.log (“You cannot afford this purchase!”);
}
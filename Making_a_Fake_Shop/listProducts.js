var faker = require('faker');

console.log("===================\n"+"WELCOME TO MY SHOP!\n"+"===================");

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomProduct = faker.commerce.product();
var randomAdjetive = faker.hacker.adjective();
var randomMaterial = faker.commerce.productMaterial();
var randomPrice = faker.commerce.price();

for(var i=0;i<5;i++){
console.log(faker.hacker.adjective() + " " + faker.commerce.productMaterial() + " " + faker.commerce.product() + " - $" + faker.commerce.price());
}

// for(var i=0;i<100;i++){
// console.log(randomAdjetive + " " + randomMaterial + " " + randomProduct + " - $" + randomPrice);
// }
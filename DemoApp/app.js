var cat = require('cat-me');
var joke = require('knock-knock-jokes');
var nan0 = require("number-is-nan");
var camelCase0 = require("camelcase");

//nan0 al poner un valor dentro del parentesis te dice si es un None a Number
console.log(nan0(0/0));
//Al ejecuta cat se imprime una figura de un gato randome hecho con caracteres.  
console.log(cat());
//Salto de linea.
console.log("\n");
//Imprime una broma del tipo Knock-Knock randome
console.log(joke());
//Al poner un texto dentro del parentesis se convierte del tipo camelCase
console.log("\n");
console.log(camelCase0("Pon un texto Aqui y se convertira en Texto tipo CAMEL case"));
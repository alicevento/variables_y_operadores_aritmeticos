//datos de entrada

const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
//const num1 = 5,    num2 = 2;
//Datos proceso
const suma = num1 + num2;
const resta = num1 - num2;
const division = num1 / num2;
const multiplicacion = num1 * num2;
const residuo = num1 % num2;

//Salida de datos
console.log(`La suma de ${num1} más ${num2} es ${suma}.`);
console.log(`La resta de ${num1} menos ${num2} es ${resta}.`);
console.log(`La división de ${num1} entre ${num2} es ${division}.`);
console.log(`La multiplicación de ${num1} por ${num2} es ${multiplicacion}.`);
console.log(`El residuo de ${num1} entre ${num2} es ${residuo}.`);



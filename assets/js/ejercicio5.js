//Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden a continuación: 1.- La suma de todos los números, 2.- El promedio de los 5 números ingresados.

//datos de ingreso
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const num3 = parseFloat(prompt("Ingrese el tercer número:"));
const num4 = parseFloat(prompt("Ingrese el cuarto número:"));
const num5 = parseFloat(prompt("Ingrese el quinto número:"));

//datos proceso
const suma = num1 + num2 + num3 + num4 + num5;
const promedio = suma / 5;

//datos de salida
console.log(`La suma de los 5 números ingresados es ${suma}.`);
console.log(`El promedio de los 5 números ingresados es ${promedio}.`);
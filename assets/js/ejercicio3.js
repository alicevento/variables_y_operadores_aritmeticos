//Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit. 

//Se debe considerar la siguiente información respecto a la equivalencia de las escalas de temperatura: 1.- 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos es 0 °C + 273.15 = 273.15 K 2.- 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F

//datos de ingreso
const temperatura = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
const temperaturaKelvin = temperatura + 273.15;
const temperaturaFahrenheit = (temperatura * (9/5)) + 32;

//datos de salida
console.log(`La temperatura ${temperatura} grados Celsius corresponde a ${temperaturaKelvin} grados Kelvin.`);
console.log(`La temperatura ${temperatura} grados Celsius corresponde a ${temperaturaFahrenheit} grados Fahrenheit.`);
//Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día. Se debe considerar lo siguiente: 1.- 1 año tiene 365 días, 2.- 1 semana tiene 7 días. Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.

//Datos de entrada

const dias = parseFloat(prompt("Ingrese la cantidad de días:"));

//Datos proceso
const años = Math.floor(dias / 365);
const semanas = Math.floor((dias - (años * 365)) / 7);
const diasRestantes = dias - (años * 365) - (semanas * 7);

//datos de salida
console.log(`La cantidad de años es ${años}.`);
console.log(`La cantidad de semanas es ${semanas}.`);
console.log(`La cantidad de días restantes es ${diasRestantes}.`);
console.log("OPERADORES")
console.log("OPERADORES ARITMETICOS")
const numero1 = 45;
const numero2 = 15;
const suma = numero1 + numero2;
console.log(`${numero1} + ${numero2} = ${suma}`);
const resta = numero1 - numero2;
console.log(`${numero1} - ${numero2} = ${resta}`);
const multiplicacion = numero1 * numero2;
console.log(`${numero1} * ${numero2} = ${multiplicacion}`);
const division = numero1 / numero2;
console.log(`${numero1} / ${numero2} = ${division}`);
const modulo = numero1 % numero2;
console.log(`${numero1} % ${numero2} = ${modulo}`);
const resultado = numero1**numero2;
console.log(`${numero1} ** ${numero2} = ${resultado}`);

console.log("OPERADORES DE COMPARACION");
const numero3 = "5";
const numero4 = 5;
console.log(`Igualdad Débil: ${numero3} == ${numero4} = ${numero3 == numero4}`);
console.log(`Igualdad Estricta: ${numero3} === ${numero4} = ${numero3 === numero4}`);
console.log(`Desigualdad Débil: ${numero3} != ${numero4} = ${numero3 != numero4}`);
console.log(`Desigualdad Estricta: ${numero3} !== ${numero4} = ${numero3 !== numero4}`);
console.log(`Mayor Que: ${numero3} > ${numero4} = ${numero3 > numero4}`);
console.log(`Menor Que: ${numero3} < ${numero4} = ${numero3 < numero4}`);
console.log(`Mayor o Igual Que: ${numero3} >= ${numero4} = ${numero3 >= numero4}`);
console.log(`Menor o Igual Que: ${numero3} <= ${numero4} = ${numero3 <= numero4}`);


console.log("OPERADORES LOGICOS");
console.log(`AND "Y": (${numero3} >= ${numero4} && ${numero3} <= ${numero4}) = ${numero3 >= numero4 && numero3 <= numero4}`);
console.log(`OR "O": (${numero3} == ${numero4} && ${numero3} != ${numero4}) = ${numero3 == numero4 && numero3 != numero4}`);
console.log(`! "Negacion": !(${numero3} == ${numero4}) = ${!(numero3 == numero4)}`);
console.log(`${numero3!=numero4&&numero3>=numero4}`);
console.log(`${numero3>numero4&&numero3===numero4}`);
console.log(`${numero3!=numero4||numero3>=numero4}`);
console.log(`${numero3>numero4||numero3!==numero4}`);
console.log(`${!(numero3!=numero4||numero3>=numero4)}`);

//const numero3 = "5";
//const numero4 = 5;
console.log(`${numero3!=numero4&&numero3>=numero4&&numero3>numero4}`);
console.log(`${numero3>numero4&&numero3===numero4&&numero3!==numero4}`);
console.log(`${(numero3!=numero4||numero3>=numero4) && numero3>=numero4}`);
console.log(`${numero3>numero4||(numero3===numero4&&numero3!==numero4)}`);
console.log(`${!(numero3!=numero4||(numero3>=numero4&&numero3!==numero4))}`);
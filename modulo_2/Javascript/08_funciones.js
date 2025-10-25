console.log("FUNCIONES");
console.log("FUNCION SIMPLE");

function saludar() {
    console.log("Hola de parte del poderoso tercer semestre ");
}
saludar();

console.log("FUNCION CON PARAMETROS");
function sumar(a, b) {
    return a + b;
}
console.log("resultado de la suma: ", sumar(5, 8));

console.log("FUNCION FLECHA");
const FuncionFlecha = () => {
    console.log("Hola desde la funcion flecha");
}
FuncionFlecha();

const multiplicar = (n, m) =>  {
    return n * m;
}
console.log(multiplicar(7, 7));

console.log("FUNCION RETORNO DIRECTO");
const cuadrado = x => x * x;
console.log(cuadrado(5));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function division(z, k = 3) {
    return z / k;
}
console.log("Resultado de la division: ", division(40, 8));
console.log("Resultado de la division: ", division(40));
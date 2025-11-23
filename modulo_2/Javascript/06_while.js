console.log("CICLOS O BUCLES");
console.log("WHILE");
let i=1;
while(i<=3){
    console.log("Contador " + i);
    i++;
}

let valores=[3,4,-2,4,5]
let indice=0;
while(valores[indice]>0){
    console.log("Valor valido: " + valores[indice]);
    indice++;
}

let n=1;
while(n<10){
    if (n%2!==0){
        console.log("Numero impar: " + n);
    }
    n++;
}

let x=5;
do {
    console.log(" iteracion:", x);
    x++;
} while (x<5);

let Contador=1;
suma=0;
do {
    suma+=Contador;
    Contador++;
} while(Contador<=5);
console.log("La suma es: " + suma);

let reduccion=10;
do {
    console.log("Reduccion:", reduccion);
    reduccion--;
} while(reduccion>=0);

let multiplico=1;
do {
    console.log(`6 x ${multiplico} = ${6*multiplico}`);
    multiplico++;
} while(multiplico<=10);

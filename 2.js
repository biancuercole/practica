let a = 5;
let b = 100;
let c = 30;

//si un numero es mayor a otro y mayor al otro entonces es el mayor de todos, si el segundo numero con el que se compara es mayor entonces ese es el mayor de todos//

if (a>b && a>c) {
        console.log("El numero mayor es: " + a);
}   

if (b>a && b>c ) {
    console.log("El numero mayor es: " + b);
}

if (c>a && c>b) {
    console.log("El numero mayor es: " + c);
}

if (a<b && a<c) {
    console.log("El numero menor es: " + a);
}

if (b<a && b<c) {
    console.log("El numero menor es: " + b);
}

if (c<a && c<b) {
    console.log("El numero menor es: " + c);
}

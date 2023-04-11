// Sumar solo los elementos pares de un array.//

const a = [2, 3, 4, 5, 6]

const pares = a.filter((item) => (item%2===0));

let sumapares = 0

for (let i = 0; i < pares.length; i++) {
    sumapares += pares[i];
}

console.log("La suma de los valores pares del array es " + sumapares );

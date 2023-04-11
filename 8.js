const a = [2, 5, 6, 7, 1];
//map recorre cada uno de los elementos y hace algo con cada uno de ellos//
//filter solo hace algo con los que cumplen con la condicion//

a.map((item) => console.log(item * 2));

let acumulador = 0;
a.map((i) => {
    acumulador+=i;
});
console.log("La suma de los items es " + acumulador);

let mayor = 0

a.map((item) => {
    if (item > mayor) {
        mayor = item;
    }
});
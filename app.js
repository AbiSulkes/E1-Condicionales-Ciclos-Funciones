//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function resolverParidad(n) {
  if (n % 2 === 0) {
    return n + " es un número par";
  } else {
    return n + " es un número impar";
  }
}

console.log(resolverParidad(2));
console.log(resolverParidad(5));


//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function numeroMayor(a, b) {
  if (a > b) {
    return a + " es el mayor";
  } else if (b > a) {
    return b + " es el mayor";
  } else {
    return "son iguales";
  }
}

console.log(numeroMayor(2, 8));
console.log(numeroMayor(205, 48));
console.log(numeroMayor(2, 2));


//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function esMultiploDeCinco(n) {
  if (n % 5 === 0) {
    return n + " es multiplo de 5";
  } else {
    return n + " no es multiplo de 5";
  }
}

console.log(esMultiploDeCinco(8));


//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function imprimirNumeros(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

imprimirNumeros(10);


//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function imprimirPalabraTresVeces(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}

imprimirPalabraTresVeces("Hola Mundo", 3);


//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function datosBasicosDeAbigail(sobreMi) {
  for (let i = 0; i < sobreMi.length; i++) {
    console.log(sobreMi[i]);
  }
}

datosBasicosDeAbigail(["Abigail Sulkes", 28, "CABA", "Diseñadora Gráfica"]);


//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function saltearNumeroQuinto(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if ((i === 5)) {
      continue;
    }
    console.log(numeros[i]);
  }
}

saltearNumeroQuinto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
let arrayNumeros = [5, 3, 2, 4];

function multiplicarArray(arrayNumeros, multiplicador) {
  for (let i = 0; i < arrayNumeros.length; i++) {
    console.log(arrayNumeros[i] * multiplicador); 
  }
}

multiplicarArray(arrayNumeros, 3);
multiplicarArray(arrayNumeros, 45);


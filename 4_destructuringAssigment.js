console.log("---------Asignación de desestructuración----------")
/* La asignación de desestructuración es una sintaxis en JavaScript que le permite desempaquetar valores de matrices o
propiedades de objetos y guardarlos en variables.*/
// -----desestructuración de arreglos------------
let names = ['Rick', 'Seb'];
let [name1, name2, name3] = names;
console.log(name1); // Expected output: 'Rick'
console.log(name3); // Expected output: undefined

/* La desestructuración de la matriz ES6 permite omitir elementos de la matriz. Si tenemos una matriz de valores y
solo nos importan el primer y el tercer valor, aún podemos desestructurar la matriz. Para ignorar un valor,
simplemente omita el identificador de variable para ese índice de matriz en el lado izquierdo de la expresión. */
let names2 = ['John', 'Michael', 'Jessica', 'Susan'];
let [name01, , name03] = names2;
let [, , ,] = names2; // Ignores all items in the array
console.log(name01); // Expected output: 'John'
console.log(name03); // Expected output: 'Jessica'

/* Otra característica muy útil de la desestructuración de matrices es la capacidad de establecer valores
predeterminados para las variables que se crean con la desestructuración. */
let [ a = 1, b = 2, c = 3 ] = [ 'cat', null ];
console.log( a ); // Expected output: 'cat'
console.log( b ); // Expected output: null
console.log( c ); // Expected output: 3
/* Finalmente, la desestructuración de matrices se puede usar para intercambiar fácilmente valores de variables */
let ab = 10;
let ba = 5;
[ ab, ba ] = [ ba, ab ];
console.log( ab ); // Expected output: 5
console.log( ba ); // Expected output: 10

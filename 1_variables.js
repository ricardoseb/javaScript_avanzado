/* JavaScript básico utiliza la palabra clave var para la declaración de variables. ECMAScript 6 introdujo dos nuevas
palabras clave para declarar variables; son let y const. */

/* Las diferencias clave entre las tres palabras de declaración de variables son la forma en que manejan la
reasignación de variables, el alcance de variables y el levantamiento de variables. */
var thing;
let func = (str = 'no arg') => {
    console.log(str);
}
func(thing); // Expected output: 'no arg'
func(null); // Expected output: null
/* Todas las variables creadas con var se pueden reasignar, tienen alcance de función y tienen elevación de variable(se
puede utilizar antes de que se declare)  */
console.log(example2); // Expect output: undefined
var example2 = 'example';
// Declared and assigned
var example_var = {prop1: 'test'};
console.log('example:', example_var); // Expect output: example: {prop1: "test"}
// Value reassigned
example_var = 5;
console.log(example_var); // Expect output: 5

/* La palabra reservada let funciona de manera similar a la palabra reservada var
// Declared and initialized */
let example_let = { prop1: 'test' };
console.log( 'example:', example_let );// Expect output: example: {prop1: 'test"}
// Value reassigned
example_let = 5;
console.log( example_let ); // Expect output: 5
/* Hay dos diferencias significativas entre let y var. Donde let y var difieren es su alcance y propiedades de
elevación variables.*/
// Referenced before declaration
// console.log( example );
// // Expect ReferenceError because example is not defined
// let example = 'example';

/* La palabra clave const tiene las mismas reglas de alcance y elevación de variables que la let palabra clave.
La diferencia clave entre const y let es que const significa que el identificador no se reasignará.
Si se cambia el valor de una variable inicializada con const, se lanzará un TypeError.*/
// Declared and initialized
const example = { prop1: 'test' };
// Variable reassigned
// example = 5;
// Expect TypeError error because variable was declared with const
// Object property updated
example.prop1 = 5;
// Expect no error because "sub-property" was modified



//
// console.log("----------Template Literals--------------")
// // Están delimitados por el símbolo de acento grave `` en lugar de las comillas simples o dobles habituales permiten
// // incrustar expresiones en la cadena que se evalúan en tiempo de ejecución. Por lo tanto, podemos crear fácilmente
// // cadenas dinámicas a partir de variables y expresiones variables. Estas expresiones se denotan con el signo de dólar
// // y llaves ${ expression }
// const example = "pretty";
// console.log(`Template literals are ${example} useful!!!`);
// // Using normal strings
// console.log('This is line 1\nThis is line 2');
//
// // Using template literals
// console.log(`This is line 1
// This is line 2`);
// let a = 5, b = 10;
// console.log( `${a} + ${b} is equal to ${a + b}` );
// function javascriptOrCPlusPlus() { return 'JavaScript'; }
// const outputLiteral = `We are learning about ${ `Professional ${ javascriptOrCPlusPlus() }` }`
// console.log(outputLiteral)






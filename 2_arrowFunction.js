console.log("----------arrow function--------------")
/* Son una nueva forma de crear funciones en ECMAScript 6. Las funciones de flecha simplifican la sintaxis de las
funciones. Las funciones de flecha en JavaScript se usan con frecuencia en cadenas de devolución de llamada, cadenas
de promesa, métodos de matriz, en cualquier situación en la que las funciones no registradas serían útiles.
 */

/*Al crear una función de flecha, todo lo que tenemos que hacer es eliminar la palabra clave de la función
y colocar una flecha entre los argumentos de la función y el cuerpo de la función. Las funciones de flecha se indican
 con la siguiente sintaxis:  */
// ( arg1, arg2, ..., argn ) => { /* Do function stuff here */ }

/* Si solo tenemos un único argumento para pasar a la función, no necesitamos incluir los paréntesis alrededor del
argumento
 */
// Single argument arrow function
const singleArg = arg1 => {
    return arg1
}
console.log(singleArg('un argumento'))

/* Hay una excepción a esta regla, si creamos una función de flecha con un argumento por defecto,
entonces debemos incluir los paréntesis. */
// Non simple identifier function argument
const defaultArgument = (arg1 = 10) => {
    return arg1 + 1
}
console.log(defaultArgument())

//Si creamos una función de flecha sin argumentos, entonces debemos incluir los paréntesis, aunque estarán vacíos
const withNoArguments = () => {
    return 'sin argumentos'
}
console.log(withNoArguments())

// si el cuerpo de la función es multilínea, entonces debemos rodearlo con llaves
// Multiple line body arrow function
const multipleLine = (arg1, arg2) => {
    console.log(`This is arg1: ${arg1}`);
    console.log(`This is arg2: ${arg2}`);
    /* Many more lines of code can go here */
}
multipleLine("hola", "mundo")

/* Si el cuerpo de la función es una sola línea, entonces no necesitamos incluir las llaves alrededor del
cuerpo de la función. */
// Single line body arrow function
const singleLine = arg1 => console.log(`This is arg1: ${arg1}`);
singleLine("hello!")

/*Cuando usamos funciones de flecha, también podemos excluir la palabra clave de retorno si la función es una sola
línea. La función de flecha devuelve automáticamente el valor resuelto de la expresión en esa línea
 */
// Without return keyword or braces
const suma = (num1, num2) => num1 + num2;
console.log(suma(1, 2))

/*Dado que las funciones de flecha con cuerpos de expresión única se pueden definir sin las llaves, necesitamos
una sintaxis especial que nos permita dividir la expresión única en varias líneas. Para hacer esto, podemos envolver
la expresión de varias líneas entre paréntesis
 */
// Arrow function with a single line body
// Assume numArray is an array of numbers
const singleLineBody = (numArray) => numArray.filter(n => n > 5).map(n => n - 1).every(n => n < 10)
console.log(singleLineBody([10, 11]))



/*Si tenemos una función de flecha de una sola línea que devuelve un objeto literal, necesitaremos una sintaxis especial
Dado que las funciones de flecha de una sola línea no necesitan llaves, debemos usar la sintaxis especial para evitar
que las llaves del objeto literal se interpreten como llaves del cuerpo de la función o llaves del bloque de alcance.
Para hacer esto, rodeamos el objeto literal devuelto entre paréntesis.
 */
// Arrow function with an object literal in the body
const objectLiteral = (num1, num2) => ({prop1: num1, prop2: num2}) // Returns an object
console.log(objectLiteral(8, 8))


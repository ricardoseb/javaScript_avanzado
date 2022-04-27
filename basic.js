const sum = function (num1, num2) {
    return num1 + num2;
}
var thing;
let func = (str = 'no arg') => {
    console.log(str);
}
func(thing);
func(null);

// var suma = 0;
// let suma = 0;
// Las variables declaradas con las palabras clave let y const tienen alcance de bloque
const sumArray = function (number) {
    let suma = 0;
    number.forEach(element => {
        suma += element
    });
    return suma;
}
console.log(sumArray([1, 2, 3, 4]));
console.log(sum(1, 2));

//alcance
function scopeExample() {
    // Scope block 1
    for (let i = 0; i < 10; i++) { /* Scope block 2 */
    }
    if (true) { /* Scope block 3 */
    } else {  /* Scope block 4 */
    }
    // Braces without keywords create scope blocks
    { /* Scope block 5 */
    }
    // Scope block 1
}

function fn1() {
    console.log('Scope 1');
    let scope = 5;
    console.log(scope);
    {
        console.log('Scope 2');
        let scope = 'different scope';
        console.log(scope);
    }
    {
        console.log('Scope 3');
        let scope = 'a third scope';
        console.log(scope);
    }
}

fn1();
console.log("----------arrow function--------------")
// Funcion de flecha
// ( arg1, arg2, ..., argn ) => { /* Do function stuff here */ }

// Without return keyword or braces
const suma = (num1, num2) => num1 + num2;
console.log(suma(1, 2))
// Single argument arrow function
// arg1 => { /* Do function stuff here */ }

// Non simple identifier function argument
const argumentWithValue = (arg1 = 10) => {
    /* Do function stuff here */
    return arg1 + 1
}
console.log(argumentWithValue())

// No arguments passed into the function
// ( ) => { /* Do function stuff here */ }


// Multiple line body arrow function
const multipleLine = (arg1, arg2) => {
    console.log(`This is arg1: ${arg1}`);
    console.log(`This is arg2: ${arg2}`);
    /* Many more lines of code can go here */
}
multipleLine("hola", "mundo")

// Single line body arrow function
const singleLine = arg1 => console.log(`This is arg1: ${arg1}`);
singleLine("hello!")


// / Arrow function with a single line body
// Assume numArray is an array of numbers
const singleLineBody = (numArray) => numArray.filter(n => n > 5).map(n => n - 1).every(n => n < 10)
console.log(singleLineBody([10, 11]))

// Arrow function with an object literal in the body
const objectLiteral = (num1, num2) => ({prop1: num1, prop2: num2}) // Returns an object
console.log(objectLiteral(1, 2))

console.log("----------Template Literals--------------")
// Están delimitados por el símbolo de acento grave `` en lugar de las comillas simples o dobles habituales permiten
// incrustar expresiones en la cadena que se evalúan en tiempo de ejecución. Por lo tanto, podemos crear fácilmente
// cadenas dinámicas a partir de variables y expresiones variables. Estas expresiones se denotan con el signo de dólar
// y llaves ${ expression }
const example = "pretty";
console.log(`Template literals are ${example} useful!!!`);
// Using normal strings
console.log('This is line 1\nThis is line 2');

// Using template literals
console.log(`This is line 1
This is line 2`);
let a = 5, b = 10;
console.log( `${a} + ${b} is equal to ${a + b}` );
function javascriptOrCPlusPlus() { return 'JavaScript'; }
const outputLiteral = `We are learning about ${ `Professional ${ javascriptOrCPlusPlus() }` }`
console.log(outputLiteral)






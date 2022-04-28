console.log("----------Template Literals--------------")
/* Son una nueva forma de cadena que se introdujo en ECMAScript 6. Están delimitados por el símbolo de acento grave ``
en lugar de las comillas simples o dobles habituales permiten incrustar expresiones en la cadena que se evalúan en
tiempo de ejecución. Por lo tanto, podemos crear fácilmente cadenas dinámicas a partir de variables y expresiones
variables. Estas expresiones se denotan con el signo de dólar y llaves ${ expression }
 */
const example = "pretty";
console.log(`Template literals are ${example} useful!!!`);

/* Dentro de un literal de plantilla, podemos presionar la tecla Intro en el teclado y dividirlo en dos líneas */
// Using normal strings
console.log('This is line 1\nThis is line 2');
//
// Using template literals
console.log(`This is line 1
This is line 2`);

//convertiremos objetos de cadena estándar en literales de plantilla
let a = 5, b = 10;
console.log(a + ' + ' + b + ' is equal to ' + (a + b));
console.log(`${a} + ${b} is equal to ${a + b}`);

/*Los literales de plantilla permiten el anidamiento de expresiones, es decir, los nuevos literales de plantilla
se pueden colocar dentro de la expresión de un literal de plantilla
 */
function javascriptOrCPlusPlus() {
    return 'JavaScript';
}

const outputLiteral = `We are learning about ${`Professional ${javascriptOrCPlusPlus()}`}`
console.log(outputLiteral)

/* Los literales de plantilla etiquetados se pueden analizar con una función especial llamada funciones de
etiqueta y pueden devolver una cadena manipulada o cualquier otro valor. El primer argumento de entrada de una
función de etiqueta es una matriz que contiene valores de cadena. Los valores de cadena representan las partes de
la cadena de entrada, divididas en cada expresión de plantilla. Los argumentos restantes son los valores de las
expresiones de plantilla en la cadena
 */
// Define the tag function
function tagFunction(strings, numExp, fruitExp) {
    const str0 = strings[0]; // "We have"
    const str1 = strings[1]; // " of "
    const str2 = strings[2]; // " Exciting!"
    const quantity = numExp < 10 ? 'very few' : 'a lot';
    return str0 + quantity + str1 + fruitExp + str2;
}

const fruit = 'apple', num = 8;
const output = tagFunction`We have ${num} of ${fruit}. Exciting!`
console.log(output) // Expected output: We have very few of apples. Exciting!!

/* Una propiedad especial llamada raw está disponible para el primer argumento de una plantilla etiquetada.
Esta propiedad devuelve una matriz que contiene las versiones sin formato, sin escape, de cada parte del literal de
plantilla dividida.
 */
function tagFunction2( strings ){ console.log( strings.raw[0] ); }
tagFunction2`This is line 1. \n This is line 2.`
// Expected output: "This is line 1. \n This is line 2."

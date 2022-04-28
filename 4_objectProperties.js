/* ECMAScript 6 agregó tres formas de simplificar la creación de objetos literales. Estas simplificaciones incluyen
una sintaxis más concisa para inicializar propiedades de objetos a partir de variables, una sintaxis más concisa para
definir métodos de funciones y nombres de propiedades de objetos computados.
 */

/* En ES6, podemos abreviar cada propiedad y eliminar la repetición, En ES6, podemos simplemente indicar la variable
en la declaración literal del objeto y creará una propiedad con una clave que coincida con el nombre de la variable y
un valor que coincida con el valor de la variable.
 */
const personES6 = (name, age, height) => ({name, edad: age, height})
console.log(personES6('Zachary', 23, 195))

// ES6 también agregó una abreviatura para declarar métodos de funciones dentro de objetos
function getPersonES6(name, age, height) {
    return {
        name,
        height,
        getAge() {
            return age;
        }
    };
}
getPersonES6('Zachary', 23, 195).getAge() // Expected output: 23

console.log("-----------Propiedades computadas-----------")
// ES6 también agregó una forma nueva y eficiente de crear nombres de propiedades a partir de variables.
const varName = 'firstName';
const person = {
    [varName]: 'John',
    lastName: 'Smith'
};
console.log(person.firstName); // Expected output: John

/* Al crear propiedades calculadas en objetos literales, el valor que se calcula entre corchetes no necesita ser una
variable; puede ser casi cualquier expresión, incluso una función.
 */
const varName2 = 'first';
function computeNameType(type) {
    return type + 'Name';
}

const person2 = {
    [varName2 + 'Name']: 'John',
    [computeNameType('last')]: 'Smith'
};
console.log(person2.lastName); // Expected output: Smith


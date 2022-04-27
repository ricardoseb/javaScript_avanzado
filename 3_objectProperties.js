// En ES6, podemos abreviar cada propiedad y eliminar la repetición
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
const varName = 'firstName';
const person = {
    [varName]: 'John',
    lastName: 'Smith'
};
console.log(person.firstName); // Expected output: John

const varName2 = 'first';

function computeNameType(type) {
    return type + 'Name';
}

const person2 = {
    [varName2 + 'Name']: 'John',
    [computeNameType('last')]: 'Smith'
};
console.log(person2.lastName); // Expected output: Smith


# JavaScript Practice
_I recommend that you learn and run each file in numerical order_
## Software Requirements
- WebStorm IDE (https://www.jetbrains.com/es-es/webstorm/)
- Node.js and Node Package Manager (npm) (https://nodejs.org/es/)
## Helpers
### 1_variables
To understand the different keywords in more detail, refer to the following table:
![](img/let_var_const.png)

Figure 1.1: Differences between var, let, and const

### 2_arrowFunction
Arrow function syntax can also vary, depending on several factors. Syntax can vary slightly depending on the number of arguments passed in to the function, and the number of lines of code in the function body. The special syntax conditions are outlined briefly in the following list:
* Single input argument: arg1 => { /* function body */ }
* No input arguments: ( ) => { /* function body */ }
* Single line function body: ( arg1, arg2, argn ) => /* single line */
* Single expression broken over multiple lines: ( arg1, arg2, argn ) => ( /* multi line single expression */ )
* Object literal return value: ( arg1, arg2, argn ) => ( { /* object literal */ } )

### 3_templateLiterals
Template literals are escaped like other strings in JavaScript. To escape a template literal, simply use a backslash (\) character. For example, the following equalities evaluate to true:
```
`\`` === "`",`\t` === "\t", and `\n\r` === "\n\r".
```

### 4_objectProperties
ECMAScript 6 added several enhancements to object literals as part of the ES6 syntactic sugar. Syntactic sugar is a syntax that is designed to make expressions easier to read and express. It makes the syntax "sweeter" because code can be expressed concisely.

### 5_destructuringAssigment
Destructuring assignment is syntax in JavaScript that allows you to unpack values from arrays or properties from objects, and save them into variables

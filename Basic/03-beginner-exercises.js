/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Mi nombre es Luis Enrique Soto Alvarado

// 2. Escribe un comentario en varias líneas

/*Tengo 26 años, actualmente me encuentro estudiando
para desempeñarme como programadoe front-end*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// Cadenas de texto (string)
let myName = "Brais Moure"

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedValue

// Null
let nullValue = null

// Symbol
let mySymbol = Symbol("mysymbol")

// BigInt
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)


// 4. Imprime por consola el valor de todas las variables

console.log(myName)
console.log(age)
console.log(height)
console.log(isTeacher)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(myBigInt)


// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myName)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isTeacher)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myName = "Luis Soto"

// Números (number)
age = 36 // Entero

// Booleanos (boolean)
isTeacher = false

// Undefined
undefinedValue

// Null
nullValue = null

// Symbol
mySymbol = Symbol("mysymbol2")

// BigInt
myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myName = 25

// Números (number)
age = "Luis Soto" // Entero

// Booleanos (boolean)
isTeacher = null

// Undefined
undefinedValue

// Null
nullValue = 12132136545645651321321n

// Symbol
mySymbol = 17.3

// BigInt
myBigInt = Symbol("mysymbol2")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nombre = "Luis soto"
console.log(nombre)
console.log(typeof nombre)

const numberPhone= 311
console.log(numberPhone)
console.log(typeof numberPhone)

const value= null
console.log(value)
console.log(typeof value)

// 9. A continuación, modifica los valores de las constantes

//nombre = "Enrique Alvarado"
//numberPhone = 258


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

//console.log(nombre)
//console.log(numberPhone)



/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

/* Declaración, crear una estructura de datos
Que nos permite almacenar datos*/

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3] // Mas recomedada para utilizar
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop (Introducir elementos en la lista)

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina el primer elemento de la array y lo devulve
console.log(myArray)

myArray.unshift("Brais", "mouredev") //Agregar 1  o mas elemento a principio de la array
console.log(myArray)

// length

console.log(myArray.length) //Longitud de la array

// Limpiar el array

myArray = [] //volver a inicilizar el array
myArray.length = 0 // inicilizar con longitud de 0
console.log(myArray)

// slice

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3) // dividir el array con un cierto numero de elementos

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3) // iniciar el array desde la posicion de la izquierda y elimina el numero de elementos de la derecha
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)
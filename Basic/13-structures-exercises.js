/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
console.log()
console.log("Primer punto")

//Declaracion de array
let Animals = []
//Inicializacion de array
Animals = ["Tigre","Elefante","Leon","Pantera","Puma"]
console.log(Animals)

for (let value of Animals) {
    console.log(value)
}


// 2. Añade dos más. Uno al principio y otro al final

console.log()
console.log("Segundo punto")

Animals.unshift("Lobo") // Añade un elemento al principio de la array
Animals.push("Zorro") //Añade elemento al final del array

console.log(Animals)

// 3. Elimina el que se encuentra en tercera posición
console.log()
console.log("Tercer punto")


let pos = Animals.indexOf("Zorro"); // (pos) es la posición para abreviar

Animals.splice(pos, 4) //Eliminar un único elemento mediante su posición
console.log(Animals)

// 4. Crea un set que almacene cinco libros

console.log()
console.log("Cuarto punto")

//Declaracion de set
let team  = new Set()
//Inicializacion de set
team = new Set(["Deportivo Pasto","Deportivo Cali", "DIM","Equidad","Deportes pereira"])
console.log(team)

// 5. Añade dos más. Uno de ellos repetido

console.log()
console.log("Quinto punto")

team.add("America")
team.add("DIM")

console.log(team)


// 6. Elimina uno concreto a tu elección

console.log()
console.log("Sexto punto")

team.delete("America")

console.log(team)


// 7. Crea un mapa que asocie el número del mes a su nombre

console.log()
console.log("Septimo punto")

// Declaración
let monthYear = new Map()

// Inicialiación
monthYear = new Map([
    [1, "Enero"],[2, "Febrero"],[3, "Marzo"],
    [4, "Abril"],[5, "Mayo"],[6, "Junio"],
    [7, "Julio"],[8, "Agosto"],[9, "Septiembre"],
    [10, "Octubre"],[11, "Noviembre"],[12, "Diciembre"]
])

console.log(monthYear)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log()
console.log("Octavo punto")

//Compruebo si existe el mes
console.log(monthYear.has(5))

//Muestro el mes 
console.log(monthYear.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

console.log()
console.log("Noveno punto")

let  verano = []
let  primavera = []
let  otoño = []
let  invierno = []

invierno = ["Diciembre","Enero","Febrero","Marzo"]
primavera = ["Marzo","Abril","Mayo","Junio"]
verano = ["Junio","Julio","Agosto","Septiembre"]
otoño = ["Septiembre","Octubre","Noviembre","Diciembre"]

//Declaracion
let stations = new Map()

// Inicialiación
stations = new Map([
    ["Verano", verano],["Primavera", primavera],["Invierno", invierno],
    ["Otoño", otoño]
])

console.log(stations)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log()
console.log("Decimo punto")

//Declaracion de array
let citiesColombia = []
let citiesSpain = []
let citiesEngland = []
//Inicializacion de array
citiesColombia = ["Armenia","popayan","Cali","Pasto","Bogota"]
citiesSpain = ["Sevilla","Barcelona","Madrid"]
citiesEngland = ["Inglaterra","Liverpool","Bristol"]


//Declaracion de un mapa
let citiesOftheWorld = new Map()
//Inicializacion de mapa
citiesOftheWorld = new Map([
    ["Colombia", citiesColombia],["España", citiesSpain],["Inglaterra", citiesEngland]
])

console.log(citiesOftheWorld)

//Transformacion de array a set
let citiesSet = new Set()

citiesSet = new Set(citiesColombia)
console.log(citiesSet)


//cambiar o actulizar el registro de un array por un set
citiesOftheWorld.set("Colombia", citiesSet)

console.log(citiesOftheWorld)
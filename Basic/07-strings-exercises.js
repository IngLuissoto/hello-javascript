/*Solucion */

// 1. Concatena dos cadenas de texto
console.log("primer punto")

let team = "Deportivo Pasto"
let matchSoccer = "Proximo partdio de " + team + "vs Deportivo cali"
console.log(matchSoccer)
console.log(typeof matchSoccer)

let firstName = "Luis Enrique"
let fullName = "Bienvenido " + firstName + " Soto Alvarado"
console.log(fullName)
console.log(typeof fullName)

// 2. Muestra la longitud de una cadena de texto
console.log("Segundo punto")

console.log(`El string ${fullName} tiene ${fullName.length} caracteres`)

// 3. Muestra el primer y último carácter de un string
console.log("Tercer punto")

console.log(`El primer caracter de ${team} es ${team[0]} y el ultimo caracter es ${team[14]}`)

// 4. Convierte a mayúsculas y minúsculas un string
console.log("Cuarto punto")

let programmingLanguage = "javaSCRIPT"

console.log(`String basico ${programmingLanguage}`)

console.log(`String todo en minusculas ${programmingLanguage.toLowerCase()}`)

console.log(`String todo en mayusculas ${programmingLanguage.toLocaleUpperCase()}`)

// 5. Crea una cadena de texto en varias líneas
console.log("Quinto punto")

let message = `Hola, mi nombre es: Luis Enrique Soto Alvarado
soy hincha de Deportivo Pasto y mañana le 
ganamos al Deportivo Cali`

console.log(message)

// 6. Interpola el valor de una variable en un string
console.log("Sexto punto")

let city = "Pasto"
let cali = "Caleño"
console.log(`Yo vengo a cantar algo de corazon, el ${city} le va a ganar a es ${cali}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("Septimo punto")

let string = "Somos de la ciudad de Pasto pueblo de aguante y carnaval"
console.log(string.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("Octavo punto")

console.log(`¿El string: ${string} incluye la palabra pasto ? ${string.includes("Pasto")}`)
console.log(`¿El string: ${string} incluye la palabra cali? ${string.includes("Cali")}`) 

// 9. Comprueba si dos strings son iguales
console.log("Noveno punto")

let string1 = "Real madrid"
let string2 = "Real madrid"

console.log( string1 == string2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log("Decimo punto")

console.log( string1.length == string2.length)
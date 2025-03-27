// 1. Crea una variable para cada operación aritmética
console.log("Primer punto")

let number1 = 5
let number2 = 6

let suma = number1 + number2
console.log(suma)

let resta = number1 - number2
console.log(resta)

let multiplicacion = number1 * number2
console.log(multiplicacion)

let division = number1 / number2
console.log(division)

let modulo = number1%number2
console.log(modulo)

let exponente = number1**number2
console.log(exponente)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

console.log("Segundo punto")

suma += 2 // Suma con asignación
console.log(suma)

resta -= 2 // resta con asignación
console.log(resta)

multiplicacion *= 2 // multiplicacion con asignación
console.log(multiplicacion)

division /= 2 // division con asignación
console.log(division)

modulo %= 2 // Modulo con asignación
console.log(modulo)

exponente **= 2 // exponente con asignación
console.log(exponente)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log("tercer punto")

console.log("luis"=="luis")
console.log(5<6)
console.log((6*7)==(7*6))
console.log(5>=5)
console.log("luis"!="soto")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Cuarto punto")

console.log("luis"!="luis")
console.log(5>6)
console.log((6*7)!=(7*6))
console.log(4<=3)
console.log("luis"=="soto")

// 5. Utiliza el operador lógico and

console.log("Quinto punto")

console.log(5>4 && 5>3)
console.log(15 > 10 && "luis"=="luis" && (6*5)!=(7*6))
console.log(15 > 10 && "luis"=="soto" && (6*5)!=(7*6))

// 6. Utiliza el operador lógico or

console.log("Sexto punto")

console.log(3>4 || 5<3)
console.log(15 > 10 || "luis"=="luis" || (6*5)!=(7*6))
console.log(15 > 10 || "luis"!="luis" && (6*5)!=(7*6))

// 7. Combina ambos operadores lógicos
console.log("septimo punto")

console.log(10 >= 10 && 15 > 20 || 30 < 40)
console.log(10 >= 10 || "luis"!="luis" && 40 <= 40)


// 8. Añade alguna negación
console.log("Octavo punto")

console.log(!("luis"=="luis"))
console.log(!(5>6))

// 9. Utiliza el operador ternario
console.log("Noveno punto")

const isSunny = true
isSunny ? console.log("Es un dia soleado") : console.log("No es un dia soleado")


// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("Decimo punto")
console.log((3*5)>=(60/4) || 5<3)
console.log(15 > 10 || "luis"=="luis" || (6*5)!=(7*6))
console.log(15 > 10 || (3*5) != (60/4)  && (6*5)!=(7*6))
/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log()
console.log("Primer punto")
let name = "Luis Soto"

if (name == "Luis Sot"){
    console.log(name)
} else {
    console.log(`El nombre no coincide con ${name}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

console.log()
console.log("Segundo punto")

let user = "Luis Soto"
let Password = "1949"

if ((user == "Luis Sot") && (Password == "1949")){
    console.log("Bienvenido ingresaste usuario y clave correctamente")
} else {
    console.log("Intenta nuevamente el usuario y/o clave son incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

console.log()
console.log("Tercer punto")

let number = 0

if (number > 0) {
    console.log("Tu numero es positvo")
} else if (number < 0) {
    console.log("Tu numero es negativo")
} else {
    console.log("Tu numero es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

console.log()
console.log("Cuarto punto")

let allowedAge = 18
let age = 15

if (age >= allowedAge) {
    console.log("Tienes la edad permitida para votar")
} else {
    console.log(`No tienes la edad permitida para votar te faltan ${allowedAge - age} años`)
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log()
console.log("Quinto punto")

let Age = 19

const message = Age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
console.log(message)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log()
console.log("sexto punto")

let month = "Diciembre"

if(month == ("enero") || month ==("febrero") || month ==("marzo")){
    console.log(`En el mes de: ${month} estamos en la estacion de Invierno`)
}else if(month == ("abril") || month ==("mayo") || month ==("junio")){
    console.log(`En el mes de: ${month} estamos en la estacion de Primavera`)
}else if (month == ("Julio") || month ==("Agosto") || month ==("Septiembre")){
    console.log(`En el mes de: ${month} estamos en la estacion de verano`)
}else{
    console.log(`En el mes de: ${month} estamos en la estacion de otoño`)
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log()
console.log("Septimo punto")


if(month == "Febrero"){
    console.log(`El mes de: ${month} Tiene 28 dias`)
}else if (month == ("Abril") || month ==("Junio") || month ==("Septiembre") || month ==("Noviembre")){
    console.log(`El mes de: ${month} Tiene 30 dias`)
}else{
    console.log(`El mes de: ${month} Tiene 31 dias`)
}


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

console.log()
console.log("Octavo punto")

let Idioma = "Chino"
let saludo

switch (Idioma) {
    case "Español":
        saludo = "Hola mundo"
        break
    case "Frances":
        saludo = "Bonjour le monde"
        break
    case "Ingles":
        saludo = "Hello world"
        break
    case "Aleman":
        saludo = "Hallo Welt"
        break
    case "Chino":
        saludo = "你好世界"
        break
    default:
        saludo = "No tenemos saludo en ese idioma"
}

console.log(`Saludo en ${Idioma} : ${saludo}`)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

console.log()
console.log("Noveno punto")

let mes = "Mayo"
let estacion

switch (mes) {
    case "Enero":
        estacion = "invierno"
        break
    case "febrero":
        estacion = "invierno"
        break
    case "Marzo":
        estacion = "invierno"
        break
    case "Abril":
        estacion = "primavera"
        break
    case "Mayo":
        estacion = "primavera"
        break
    case "junio":
        estacion = "primavera"
        break
    case "Julio":
        estacion = "verano"
        break
    case "Agosto":
        estacion = "verano"
        break
    case "Septiembre":
        estacion = "verano"
        break
    case "octubre":
        estacion = "otoño"
        break
    case "Septiembre":
        estacion = "otoño"
        break  
        
    case "Septiembre":
        estacion = "otoño"
        break
    default:
        estacion = "Nombre de mes incorrecto"
}

console.log(`En el mes de ${mes} estamos en estacion de: ${estacion}`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

console.log()
console.log("Decimo punto")

let Mes = "febrero"
let Numdias

switch (Mes) {
    case "Enero":
        Numdias = "31"
        break
    case "febrero":
        Numdias = "28"
        break
    case "Marzo":
        Numdias = "31"
        break
    case "Abril":
        Numdias = "30"
        break
    case "Mayo":
        Numdias = "31"
        break
    case "junio":
        Numdias = "30"
        break
    case "Julio":
        Numdias = "31"
        break
    case "Agosto":
        Numdias = "31"
        break
    case "Septiembre":
        Numdias = "30"
        break
    case "octubre":
        Numdias = "31"
        break
    case "Septiembre":
        Numdias = "30"
        break  
        
    case "Septiembre":
        Numdias = "30"
        break
    default:
        Numdias = "Nombre de mes incorrecto"
}

console.log(`El mes de ${Mes} Tiene ${Numdias} dias`)
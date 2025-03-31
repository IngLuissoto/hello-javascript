/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log()
console.log("Primer punto")
/*
let i = 0
while (i <=20){
    console.log(i)
    i++
}
*/
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

console.log()
console.log("Segundo punto")
/*
let resultado = 0

for(let i = 0; i <= 100; i++){
    resultado = resultado + i
    console.log(resultado)
}
*/
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log()
console.log("Tercer punto")

/*
for(let i = 0; i <= 50; i++){  
    if ((i % 2) == 0) {
        console.log(`El numero ${i} es par`)
    } else{
        console.log(`El numero ${i} es impar`)
    }
}
*/

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
/*
console.log()
console.log("Cuarto punto")

let Animals = []
Animals = ["Tigre","Elefante","Leon","Pantera","Puma"]

for (let value of Animals) {
    console.log(value)
}
*/

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
/*
console.log()
console.log("Quinto punto")

let frase = "Somos de la ciudad de Pasto"
let contador = 0

for (let i of frase){
    if ((i == "a")|| (i == "e") ||(i == "i")||(i == "o")||(i == "u")){
        contador = contador + 1
    }
}
console.log(`En la frase "${frase}" hay ${contador} vocales`)

*/
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
/*

console.log()
console.log("sexto punto")

let numeros = [1,2,3,4,5]
let producto = 1

for(let i = 0; i< numeros.length; i++ ){
    producto = producto * numeros[i]
}

console.log(producto)
 
*/

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
/*
console.log()
console.log("Septimo punto")

let i = 0
console.log("Tabla de multupliclar del 5")
while (i <=10){
    console.log(`5  x ${i} = ${5*i}`)
    i++
}
*/

// 8. Usa un bucle para invertir una cadena de texto

console.log()
console.log("Octavo punto")

let stirng = "De pequeño y hasta el cielo"
let gnrits = ""

for(let i = stirng.length - 1; i >=0; i--){
    gnrits = gnrits + stirng[i]
}

console.log(gnrits)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

/*

console.log()
console.log("Noveno punto")


function fibo(n){
    let seq = [0,1]
    for(let i=2; i<n; i++){
        seq[i] = seq[i -1] + seq[i-2]
    }
    return seq
}

let result = fibo(10)
console.log(result)

*/

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

/*
console.log()
console.log("Decimo punto")

let numeros = [0,20,15,3,8,12,11,2,6,10,123]
let numerosMayoresque10 = []

for(let i = 0; i<= numeros.length; i++ ){  
    if (numeros[i] >= 10) {
        numerosMayoresque10.push(numeros[i])
    } 
}
 
console.log(numerosMayoresque10)
*/
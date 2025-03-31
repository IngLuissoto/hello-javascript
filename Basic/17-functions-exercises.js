// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log()
console.log("Primer punto")

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

console.log()
console.log("Segundo punto")

function numeromayor(array){
    let numeroMayor = 0
    for(let i = 0; i < array.length; i++){
        if(numeroMayor <= array[i] ){
            numeroMayor = array[i]
        }
    }
    
    return numeroMayor
}

console.log(numeromayor([1,2,4,6,33,3,17,18,20,25]))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

console.log()
console.log("Tercer punto")

function contarVocales(frase){
    if(typeof frase !== 'string'){
        throw TypeError('El argumento debe ser de tipo texto')
    }

    let vocales = 'aeiouAEIOU'
    let contadorVocales = 0
    for(let i = 0; i < frase.length; i++){
        if (vocales.indexOf(frase[i]) !== -1){
            ++contadorVocales
        }
    }

    return contadorVocales
}

console.log(contarVocales("Somos de la ciudad de Pasto"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

console.log()
console.log("Cuarto punto")

function mayus(lista){

    let palabrasMayusculas = []
    for(let i = 0; i < lista.length; i++){
        palabrasMayusculas.push(lista[i].toUpperCase())
    }
    return palabrasMayusculas
}

console.log(mayus(["luis","enrique","soto","alvarado"]))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

console.log()
console.log("Quinto punto")

function numeroPrimo(num){
    let contador = 0
    for(let i = 0; i <=num ; i++){
        if (num % i ==0){
            contador++
        }
    }
    return contador ==2 ? true : false
}

console.log(`el numero 1 es ${numeroPrimo(1)}`)
console.log(`el numero 2 es ${numeroPrimo(2)}`)


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

console.log()
console.log("sexto punto")


function numeroEnComun(array1, array2) {
  const comunes = []
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        comunes.push(array1[i])
      }
    }
  }
  return comunes;
}
console.log(numeroEnComun([1,2,3,4,5,8], [8,9,1,5,3,4]))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

console.log()
console.log("Septimo punto")

function numerosPares(list){
    let sumaNumerosPares = 0
    for(let i = 0; i < list.length; i++){
        if ((list[i] % 2) == 0){
            sumaNumerosPares = sumaNumerosPares + list[i]
        }
    }
    return sumaNumerosPares
}

console.log(numerosPares([1,2,4,6,8,3,17,18,20,25]))


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log()
console.log("Octavo punto")

function cuadrado(list){
    let exponentes = []
    for(let i = 0; i < list.length; i++){
        exponentes.push(list[i]**2)
    }
    return exponentes
}

console.log(cuadrado([1,2,4,6,8,3,17,18,20,25]))


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

console.log()
console.log("Noveno punto")

function palabrasInvertidas(string){
    let gnrits = ""
    for(let i = string.length - 1; i >=0; i--){
        gnrits = gnrits + string[i]
    }
    
    return gnrits
}

console.log(palabrasInvertidas("Somos de la ciudad de pasto"))

// 10. Crea una función que calcule el factorial de un número dado

console.log()
console.log("Decimo punto")

function factorialize(num){
    let resultado = 1
    for (let i = num; i >= 1; i--) {
      resultado = resultado * i
    }
    return resultado
  }
  console.log(factorialize(8))


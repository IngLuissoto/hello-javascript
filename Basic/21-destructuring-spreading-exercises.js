// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

console.log()
console.log("primer punto")
console.log()

let Animals = []
Animals = ["Tigre","Elefante","Leon","Pantera","Puma"]
console.log(Animals)

let [animal1, animal2] = Animals
console.log(animal1)
console.log(animal2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

console.log()
console.log("Segundo punto")
console.log()

let [animal3 = animal1, animal4 = animal2, , , ,animal5 = 0] = Animals
console.log(animal3)
console.log(animal4)
console.log(animal5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

console.log()
console.log("Tercer punto")
console.log()

let equipo = {
    nombre: "Deportivo pasto",
    estadio: "Departamental libertad",
    fundacion: 1949,
    campeon: 2006
}


let {nombre, estadio, fundacion } = equipo
console.log(nombre)
console.log(estadio)
console.log(fundacion

)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

console.log()
console.log("Cuarto punto")
console.log()


let {nombre: Nombre, estadio: stadium, fundacion:fundation } = equipo
console.log(Nombre)
console.log(stadium)
console.log(fundation)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log()
console.log("Quinto punto")
console.log()

let equipo3 = {
    nombre: "Independiente medellin",
    fundacion: 1913,
    campeon: 2016,
    estadio: {
        nombreEstadio: "Atanasio girardot",
        capacidad: 45000,
        informacion: function () {
            console.log(`El estadio donde juega el DIM es: ${this.nombreEstadio} y tiene una capacidad de: ${this.capacidad}`)
        }
    },
}

let { nombre: nombre3, estadio: { nombreEstadio: nombreestadio }, estadio: { capacidad: capacidad } } = equipo3

console.log(nombre3)
console.log(nombreestadio)
console.log(capacidad)

// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log()
console.log("Sexto punto")
console.log()


let coloresPrimarios = []
coloresPrimarios = ["Amarillo","Azul","Rojo"]

let coloresSecundarios = []
coloresSecundarios = ["Verde","Naranja","Violeta"]

let primariosSecundarios = [...coloresPrimarios, ...coloresSecundarios]

console.log(primariosSecundarios)


// 7. Usa propagación para crear una copia de un array
console.log()
console.log("Septimo punto")
console.log()

let coloresTerciarios = []
coloresTerciarios = ["Rojo violeta","Rojo naranja","Azul violeta","Azul verdoso","Amarillo naranja","Amarillo verdoso"]

let circulocromatico = [...primariosSecundarios]

let circuloCromatico = [...circulocromatico, ...coloresTerciarios]

console.log(circuloCromatico)

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log()
console.log("Octavo punto")
console.log()

let deportivoPasto = {
    fundacion: 1949,
    campeon: 2006
}

let fortin = {
    nombre: "Estadio libertad",
    capacidad: 28000
}

let pastoEstadio = { ...deportivoPasto, ...fortin}

console.log(pastoEstadio)
// 9. Usa propagación para crear una copia de un objeto

console.log()
console.log("Noveno punto")
console.log()

let pastico = { ...deportivoPasto}

console.log(pastico)


// 10. Combina desestructuración y propagación

console.log()
console.log("Decimo punto")
console.log()


let consolas = []
consolas = ["Xbox","Play","Nintendo"]

let [consola1,consola2,consola3] = consolas

let [console1 = consola1, console2 = consola2, console3 = consola3] = consolas

console1 = {
    empresa: "Microsoft",
    primeraConsola: 2001
}

console2 = {
    empresa: "Sony Interactive Entertainment",
    primeraConsola: 1994
}

console3 = {
    empresa: "Nintendo co",
    primeraConsola: 1983
}

let procesasor1 = {
    procesasor: "Intel Pentium III 32-bit @ 733 MHz"
}

let procesasor2 = {
    procesasor: "R3000A a 33.8688 MHz de 32 bits"
}
let procesasor3 = {
    procesasor: "Dual Core ARM 11 a 268MHz. "
}


console.log()
console.log(consola1)
console.log()
let informacionCompleta1 = { ...console1, ...procesasor1}

console.log(informacionCompleta1)

console.log()
console.log(consola2)
console.log()
let informacionCompleta2 = { ...console2, ...procesasor2}

console.log(informacionCompleta2)

console.log()
console.log(consola3)
console.log()
let informacionCompleta3 = { ...console3, ...procesasor3}

console.log(informacionCompleta3)
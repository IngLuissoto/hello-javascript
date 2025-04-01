// 1. Crea un objeto con 3 propiedades

console.log()
console.log("Primer punto")
console.log()

let equipo = {
    nombre: "Deportivo pasto",
    estadio: "Departamental libertad",
    fundacion: 1949,
    campeon: 2006
}

console.log(typeof equipo)
console.log(equipo)

// 2. Accede y muestra su valor

console.log()
console.log("Segundo punto")
console.log()

console.log(equipo.nombre)
console.log(equipo.estadio)
console.log(equipo.fundacion)
console.log(equipo.campeon)

// 3. Agrega una nueva propiedad
console.log()
console.log("tercer punto")
console.log()

equipo.ciudad = "pasto"


console.log(equipo)


// 4. Elimina una de las 3 primeras propiedades
console.log()
console.log("cuarto punto")
console.log()

delete equipo.nombre
delete equipo.equipo
delete equipo.fundacion

console.log(typeof equipo)
console.log(equipo)


// 5. Agrega una función e invócala
console.log()
console.log("Quinto punto")
console.log()

let equipo2 = {
    nombre: "Deportivo Cali",
    estadio: "Estadio Deportivo Cali",
    fundacion: 1912,
    campeon: 2021,
    barra: function () {
        console.log("Su barra se llama frente radical.")
    }
}
equipo2.barra()

// 6. Itera las propiedades del objeto
console.log()
console.log("Sexto punto")
console.log()

for (let key in equipo2) {
    console.log(key + ": " + equipo2[key])
}

// 7. Crea un objeto anidado
console.log()
console.log("Septimo punto")
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


// 8. Accede y muestra el valor de las propiedades anidadas

console.log()
console.log("octavo punto")
console.log()

console.log(equipo3)

console.log(equipo3.nombre)
console.log(equipo3.estadio)
console.log(equipo3.estadio.nombreEstadio)
equipo3.estadio.informacion()


// 9. Comprueba si los dos objetos creados son iguales

console.log(equipo)
console.log(equipo2)

console.log(equipo == equipo2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(equipo.nombre == equipo2.nombre)
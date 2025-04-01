// 1. Crea una clase que reciba dos propiedades
console.log()
console.log("primer punto")
console.log()
/*
class ingenieria{

    constructor(ramEstudio, universidad) {
        this.ramEstudio = ramEstudio
        this.universidad = universidad
    }
}

let ingenieriaElectronica = new ingenieria("la electricidad, los circuitos y sistemas eléctricos", "Universida cesmag")

console.log(ingenieriaElectronica)

*/

// 2. Añade un método a la clase que utilice las propiedades
console.log()
console.log("Segundo punto")
console.log()

class deporte{

    constructor(tipo, lugarDeEntreno, edad) {
        this.tipo = tipo
        this.lugarDeEntreno = lugarDeEntreno
        this.edad = edad
    }

    informacion() {
        console.log(`El deporte ${this.tipo} se practica por lo general en ${this.lugarDeEntreno} y es recomendable empezar desde los ${this.edad} años`)
    }

}

let baloncesto = new deporte("Baloncesto", "Cancha de baloncesto - polideportivo", 8)
baloncesto.informacion()

// 3. Muestra los valores de las propiedades e invoca a la función
console.log()
console.log("Tercer punto")
console.log()

console.log(baloncesto.tipo)
console.log(baloncesto.lugarDeEntreno)
console.log(baloncesto.edad)
baloncesto.informacion()


// 4. Añade un método estático a la primera clase
console.log()
console.log("Cuarto punto")
console.log()

class ingenieria{

    constructor(ramEstudio, universidad) {
        this.ramEstudio = ramEstudio
        this.universidad = universidad
    }

    static duravilidadDeEstudio(){
        return "5 años"
    }
}

// 5. Haz uso del método estático
console.log()
console.log("Quinto punto")
console.log()

console.log(ingenieria.duravilidadDeEstudio())

// 6. Crea una clase que haga uso de herencia
console.log()
console.log("Sexto punto")
console.log()


class persona {

    constructor(nombre,estatura,profecion) {
        this.nombre = nombre
        this.estatura = estatura
        this.profecion = profecion
    }

    caminar() {
        console.log("La persona puede caminar")
    }
}

class luis extends persona {

    programar() {
        console.log("Luis esta aprendiendo a programar")
    }
}

class felipe extends persona {

    constructor(nombre,estatura,profecion,actividadFisica) {
        super(nombre,estatura,profecion)
        this.actividadFisica = actividadFisica
    }

    swim(){
        console.log("felipe puede nadar muy bien")
    }

}

let persona1 = new luis("Luis Soto", "1.68mts","Ingeniero electronico")
persona1.programar()
persona1.caminar()

let persona2 = new felipe("Felipe Soto", "1.85mts","Programador","Futbol")
persona2.swim()
persona2.caminar()

// 7. Crea una clase que haga uso de getters y setters
console.log()
console.log("Septimo punto")
console.log()


class Usuario {

    constructor(nombre,localidad,correo,contraseña) {
        this._nombre = nombre
        this._localidad = localidad
        this.correo = correo
        this.contraseña = contraseña
    }

    get nombre() {
        return this._nombre
    }

    set localidad (newLocalidad){
        this._localidad = newLocalidad
    }
}

let usuario = new Usuario("Luis Soto","Pasto","luisenriquesotoalavaro","Luis1234")
console.log(usuario)
console.log(usuario.nombre)

usuario._localidad = "Cali"

console.log(usuario)

// 8. Modifica la clase con getters y setters para que use propiedades privadas
console.log()
console.log("Octavo punto")
console.log()

class User {

    #password

    constructor(nombre,localidad,correo,password) {
        this._nombre = nombre
        this._localidad = localidad
        this.correo = correo
        this.#password = password
    }

    get nombre() {
        return this._nombre
    }

    set localidad (newLocalidad){
        this._localidad = newLocalidad
    }

    set password (newContraseña){
        this.#password = newContraseña
    }
}

let user = new User("Luis Soto","Cartago","luisenriquesotoalavaro","Luis1234")

user._localidad = "Bogota"

user.password = "1234"
console.log(user)



// 9. Sobrescribe un método de una clase que utilice herencia
console.log()
console.log("Noveno punto")
console.log()

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()
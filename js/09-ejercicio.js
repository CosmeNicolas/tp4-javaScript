/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.  */

class Animal {
  constructor(nombre,edad,sonido){
    this.nombre = nombre,
    this.edad = edad,
    this.sonido = sonido
  }
  emitirSonido(){
    document.write(`El Animal esta ${this.sonido}`)
  }
  
}

class Perro extends Animal {
  constructor(nombre, edad, sonido){
    super(nombre,edad)
    this.sonido = sonido
  }
  emitirSonido(){
    document.write(`<p>El perro ${perro.nombre} de ${perro.edad} años de edada, esta diciendo "${this.sonido}"</p>`)
  }
}

class Gato extends Animal {
  constructor(nombre,edad,sonido){
    super(nombre,edad,sonido)
  }
  emitirSonido(){
    document.write(`<p>El Gato ${gato.nombre} de ${gato.edad} años de edad ,esta diciendo  "${this.sonido}"</p>`)
  }
}

let perro = new Perro("Doki",3,"Guau")

console.log(perro)
perro.emitirSonido();

let gato = new Gato("Felix",5,"Miau")

console.log(gato)
gato.emitirSonido();
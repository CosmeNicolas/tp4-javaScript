/* 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
  constructor(nombre,edad,profesion){
    this.nombre = nombre,
    this.edad = edad,
    this.profesion = profesion
  }
   saludar(){
      document.write(`<p>Hola soy ${this.nombre} , tengo ${this.edad} años y soy ${this.profesion}</p>`)
    }
    despedirse(){
      document.write(`<p>Un gusto en conocerte pero, debo irme, hasta luego, que tengas un lindo dia</p>`)
    }
}
  
let nico = new Persona("Nico",30,"Profesor")

nico.saludar()
nico.despedirse()
Persona.color = "rojo";
console.log(Persona.color)

//nuevos obejto con extension de la clase persona
class Deporte extends Persona{
  constructor(nombre, edad, profesion, deporte){
    super(nombre,edad,profesion)
    this.deporte = deporte
  }
  tipoDeporte(){
    return document.write(`<p>Mi deporte favorito es el ${this.deporte}</p>`)
  }
}

let florencia = new Deporte("Florencia", 29,"Doctora","Natacion")
florencia.saludar();
florencia.despedirse()
florencia.tipoDeporte()


////nuevos obejto con extension de la clase persona
class Idioma extends Persona {
  constructor(nombre,edad,profesion, deporte,idioma){
    super(nombre, edad, profesion,deporte)
    this.idioma = idioma
  }
  tipoIdioma(){
    return  document.write(`<p>Mi lengua nativa es el  ${this.idioma}</p>`)
  }
}

let lucas = new Idioma("Lucas",30, "Arquitecto","Handball","ingles")

lucas.saludar()
lucas.tipoIdioma()
lucas.despedirse()
Idioma.tipodeIdioma = "Español"
console.log(Idioma.tipodeIdioma)
  


/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:


esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.


*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso , altura, anioNacimiento){
    this.nombre = nombre,
    this.edad = edad, 
    this.dni = dni,
    this.sexo = sexo,
    this.peso = peso,
    this.altura = altura,
    this.anioNacimiento = anioNacimiento
  }
  esMayorDeEdad(){
    if(this.edad >=18){
      document.write(`<h2>${this.nombre} tiene ${this.edad} años de edad, esta persona es Mayor de Edad</h2>`)
    } else{
      document.write(`<h2>${this.nombre} tiene ${this.edad} años de edad, esta persona "NO" Mayor de Edad</h2>`)
    }
  }

    mostrarDatos(){
      document.write(`<h1>Taxonomia de Generacios</h1>
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>Dni: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura ${this.altura}</li>
        <li>Año de Naciemiento: ${this.anioNacimiento}</li>
        </ul>
      `)
  }   
}

class GeneracioPersona extends Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento, generacion, rasgo) {
    super(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
    this.generacion = generacion,
      this.rasgo = rasgo
  }
  mostrarGeneracion() {
    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      document.write(`
      <ul>
      <li>Generacion: "Silent Generation" - Los niños de la posguerra</li>
      <li>Rasgo caracteristico: Austeridad </li>
      </ul>`)
    } if((this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968)){
       document.write(`
      <ul>
      <li>Generacion: "Baby Boom"</li>
      <li>Rasgo caracteristico: "Ambición" </li>
      </ul>`)
    } if((this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980)){
       document.write(`
      <ul>
      <li>Generacion: "Generacion X"</li>
      <li>Rasgo caracteristico: "Obseson por el Éxito" </li>
      </ul>`)
    } if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
       document.write(`
      <ul>
      <li>Generacion: "Generacion Y - Millennials"</li>
      <li>Rasgo caracteristico: "Frustración" </li>
      </ul>`)
    } if((this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010)){
       document.write(`
      <ul>
      <li>Generacion: "Generacion Z"</li>
      <li>Rasgo caracteristico: "Irreverencia" </li>
      </ul>`)
    } else {
      document.write(`<p>Esta Persona todavia no esta definida en su generacion</p>`)
    }
  }

}

class NuevoDni extends GeneracioPersona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento, generacion, rasgo, nuevoDNi){
    super(nombre, edad, dni, sexo, peso, altura, anioNacimiento, generacion, rasgo)
    this.nuevoDNi = nuevoDNi
  }
   generarDni(){
   let numero = parseInt((Math.random() * 9999999))
    console.log(numero = this.nuevoDNi)
  } 
}





const florencia = new GeneracioPersona("Lucas",30,21336954,"Masculino",70, 1.70,1993)

florencia.mostrarDatos()
florencia.esMayorDeEdad()
florencia.mostrarGeneracion()
florencia.generarDni()





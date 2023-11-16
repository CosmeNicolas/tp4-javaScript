/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */



class Contacto {
  constructor(nombre,telefono){
    this.nombre = nombre,
    this.telefono = telefono
  }
  aniadirContacto(Contacto){
    this.nombre = prompt('ingrese nombre y numero de telefono');
    this.telefono = parseInt(prompt('Ingrese su numero de telefono'))
    document.write(`<h1>Agenda</h1>
  <ul>
  <li>Nombre de Contacto: ${this.nombre}</li>
  <li>Nro de Contacto: ${this.telefono}</li>
  </ul>`)
  }
}

const contacto = new Contacto()

contacto.aniadirContacto()
console.log(contacto)



/* 
let menu = prompt('Seleccione una opcion: 1-Añadir contacto, 2-Lista de contactos, 3-Buscar Contacto, 4-Eliminar Contacto' );

switch (menu) {
  case '1':
  case 'Añadir contacto':
    console.log('selecciono la opcion uno')
    break;

  default:
    break;
} */
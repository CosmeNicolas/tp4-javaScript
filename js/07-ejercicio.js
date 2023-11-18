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

Metodos()
1-aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
2-existeContacto(Contacto): indica si el contacto pasado existe o no.

3-listarContactos(): Lista toda la agenda.
4-buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
5-eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
6-agendaLlena(): indica si la agenda está llena.
7-huecosLibres(): indica cuántos contactos más podemos ingresar.



 */


class Contacto {
   
    constructor(nombre,telefono){
        this.nombre = nombre,
        this.telefono = telefono
    }
    aniadirContacto(){
        this.nombre = prompt('ingrese el nombre del contacto');
        this.telefono = parseInt(prompt('Ingrese el numero del contacto'));
    }
    listarContacto(){
        document.write(`<p>Nombre de Contacto: ${this.nombre}</p>`)
        document.write(`<p>Numero de Contacto: ${this.telefono}</p>`)
    }
   
 
}


 
const contacto1 = new Contacto('','');
//const contacto2 = new Contacto('','');
/* const contacto3  = new Contacto('','')
const contacto4  = new Contacto('','')
const contacto5  = new Contacto('','')
const contacto6  = new Contacto('','')
const contacto7  = new Contacto('','')
const contacto8  = new Contacto('','')
const contacto9  = new Contacto('','')
const contacto10 = new Contacto('','')  */

contacto1.aniadirContacto()
contacto1.listarContacto()
//contacto2.aniadirContacto()
//contacto2.listarContacto()
console.log(contacto1)
//console.log(contacto2)
contacto1.existeContacto()




//const persona = prompt('Ingrese el nombre de contacto')
/* const telefonoPersona = parseInt(prompt('Ingrese numero de telefono'))
console.log(telefonoPersona) */

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */
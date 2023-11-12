/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
  constructor(codigo, nombre, precio){
    this.codigo = codigo,
    this.nombre = nombre,
    this.precio = precio
  }
  imprimeDatos(){
    let codigo = this.codigo
    document.write(`<p>Codigo de producto id: ${codigo}</p>`)
    let nombreProducto = this.nombre
    document.write(`<p>${nombreProducto}</p>`)
    let precioProducto = this.precio
    document.write(`<p>$ ${precioProducto}</p>`)
  }
}
const fruteria = [];
console.log(fruteria)
document.write(`<h1>Fruteria</h1>`)


let banana = new Producto(1,"Banana",100)
console.log(banana)
banana.imprimeDatos();

let manzana = new Producto(2, "Manzana",250)
console.log(manzana)
manzana.imprimeDatos()

let frutilla = new Producto(3, "Frutilla",500)
console.log(frutilla)

frutilla.imprimeDatos()

fruteria.push(banana,manzana,frutilla)


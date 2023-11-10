/* Crear objetos
Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó

 */

const auto = {
  color: 'negro',
  marca: 'Audi',
  modelo: 'A1',
  //metodo
  encendido: function(){
    document.write(`<p>...Auto encendido</p>`)
  },
  apagado: function(){
    document.write(`<p>Auto apagado...</p>`)
  },
}

console.log(auto.encendido)
document.write(`El Auto  ${auto.marca} , ${auto.color} modelo ${auto.modelo}`)
console.log(auto.apagado)



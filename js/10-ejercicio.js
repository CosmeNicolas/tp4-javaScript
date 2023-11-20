/* 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
 */


class Aeropuerto {
    constructor(nombreAeropuerto)
    {
        this.nombreAeropuerto = nombreAeropuerto,
        this.listaAviones = []
    }
    agregarAvion(avion){
        this.listaAviones.push(avion)
        return alert('Avion se agrego correctamente')
       
    }
    buscaravion(avion){
        for(let i = 0; i < this.listaAviones.length ; i++){
            if(this.listaAviones[i] === nombreAvion){
                document.write(`${this.listaAviones[i].nombre}`)
            } else {
                alert('No se Encontro el avion')
            }
        }
    }
}

class Aviones extends Aeropuerto{
    constructor(nombreAeropuerto,nombreAvion,capacidad,destino)
    {
        super(nombreAeropuerto);
        this.nombreAvion = nombreAvion,
        this.capacidad = capacidad,
        this.destino = destino,
        this.listapasajeros =  []
    }
    listarAviones(){
        document.write(<></>)
    }
}

const airBus = new Aviones("AeropuertoTuc","avion1",300,"Brasil")

airBus.agregarAvion()
console.log(airBus)

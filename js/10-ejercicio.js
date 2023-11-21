/* /* 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
 */



class Avion{
    constructor(nombreAvion,capacidad,destino)
    {
        this.nombreAvion = nombreAvion,
        this.capacidad = capacidad,
        this.destino = destino,
        this.listapasajeros =  []
    }

    AbordarAvion(pasajero){
        if(this.listapasajeros.length < this.capacidad){
            this.listapasajeros.push(pasajero);
            console.log(`El ${pasajero} a subido al avion ${this.nombreAvion}`)
        } else {
            console.log(`El avion ${this.nombreAvion} esta lleno`)
        }
    }

   
}

class Aeropuerto {
    constructor(nombreAeropuerto)
    {
        this.nombreAeropuerto = nombreAeropuerto,
        this.listaAviones = []
    }
    agregarAvion(avion){
        this.listaAviones.push(avion)
        console.log(`EL avion ${avion.nombreAvion} se agrego al aeropuerto`)
    }
    
    buscarAvion(nombreAvion){
        for(let i = 0; i < this.listaAviones.length ; i++){
            if(this.listaAviones[i] === nombreAvion){
                document.write(`El avion ${this.listaAviones[i].nombreAvion}esta en este aeropuerto`)
            } else {
                alert('No se Encontro el avion')
            }
        }
    }

    listarAviones(){
        document.write(`<h1>Aviones</h1>`)
        for(let i = 0; i < this.listaAviones.length; i++){
            
                document.write(`<ul>
                <li>Nombre del Avion: ${this.listaAviones[i].nombreAvion}</li>
                <li>Capacidad: ${this.listaAviones[i].capacidad} personas</li>
                <li>Destino: ${this.listaAviones[i].destino}</li>
                </ul>`)
            
        }       
    }
}

//creamos el aueropuerto
const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

//creamos los aviones
const avion1 = new Avion("Fumigador",3,"Las Termas");
const avion2 = new Avion("AirBus-23",2,"Londres");
const avion3 = new Avion("AirFrance",5,"Francia")

//agregar aviones al aeropuerto
aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3)

//listar aviones
aeropuertoInternacional.listarAviones()

//buscarAvion
aeropuertoInternacional.buscarAvion("AirBus-23")

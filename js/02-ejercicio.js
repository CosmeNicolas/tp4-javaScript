/* Cuenta bancaria 
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

 */


const cuenta = {
  titular: 'Alex',
  saldo: 0,
  ingresarSaldo: ()=>{
    let dineroDepositado = parseInt(prompt('Depositar dinero'))
    document.write(`<p>El dinero Ingresado es $${dineroDepositado}</p>`)
  },
  extraerSaldo: ()=>{
     let dineroExtraido = parseInt(prompt('Extraer dinero'))
     document.write(`<p>EL dinero Extraido es $${dineroExtraido}</p>`)
  },
  informa: ()=>{
    let saldoCuenta = dineroDepositado - dineroExtraido;
   document.write(`<p>EL dinero Extraido es $${saldoCuenta}</p>`)
  }
  
}

document.write(`<h1>EL titular de la cuenta es ${cuenta.titular}</h1>`)
console.log(cuenta.saldo)
cuenta.ingresarSaldo();
//document.write(`<p>El cliente ${cuenta.titular} ingresó  $${cuenta.dineroDepositado}</p>`)
cuenta.extraerSaldo();
cuenta.informarEstadoDeCuenta()


 














//Constructor Objeto // el  new obejct(), nos permite crear objetos vacios genéricos
/* let auto = new Object();
auto.color = "rojo";
auto.marca = "Fiat";
auto["modelo"] = "Bravo";
auto.anio = 2008;

let auto2 = Object.create(auto);
console.log(auto2.marca); */

//crear objeto con Object.create, cuando no qremos crear demasiadas instancias de  un objeto, se crea un ibjeto basado en uno pre-existente
/* auto2.precio = 45000;

console.log(auto2.precio)

console.log(auto.marca)
console.log(auto.anio)
console.log(auto.color)
console.log(auto.modelo) */

//Crear un objeto "Funcion constructora, para diferenciar se crea con Mayuscula"
/* 
function Auto (color,marca, modelo, anio){
  this.color = color;
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

let auto = new Auto ("rojo","fiat","Bravo",2008 );

console.log(auto.marca)
console.log(auto.anio)
console.log(auto.color)
console.log(auto.modelo)
 */

///////////////////

// ejemplo de arreglo  y obejtos 
//"Notacion Literal"
/* let productos = [
  {
    id:1,
    name: "Leche",
    precio:"120",
    categoria: ["Familiar","comida"]
  },
  {
    id:2,
    name: "Arroz",
    precio:"80",
    categoria: ["Familiar","comida"]
  },
  {
    id:3,
    name: "Lavarropas",
    precio:"7800",
    categoria: ["Electrodoméstico"]
  },
];

console.log(productos)
console.log(productos[1].id)
console.log(productos[1].precio)
console.log(productos[2].categoria)

for (let i = 0; i < productos.length; i++){
  let producto = productos[i];
  console.log(producto.name);
  console.log("id:" + producto.id);
  console.log("Precio:" + producto.precio);
  console.log("Categoria:" + producto.categoria.join(", "))
} */
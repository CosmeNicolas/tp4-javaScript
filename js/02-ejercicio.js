/* Cuenta bancaria 
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

 */


class Cuenta {
  constructor(titular,saldo){
    this.titular = titular,
    this.saldo = saldo
  }
  nuevoUsuario(){
    document.write(`<h1>Bienvenido al BankExpensive</h1>`)
    document.write(`<h2>${this.titular} su cuenta fue creada con Éxito <br> Su Saldo es $ ${this.saldo}</h2>`)
  }
  ingresarDinero(){
    let ingresar = parseFloat(prompt('cuanto dinero desea ingresar'));
    document.write(`Ingreso <strong> $${Cuenta.saldo = ingresar}</strong>`)
    document.write(`<p><strong>Su nuevo saldo es $${Cuenta.saldo = ingresar}
    </strong></p>`)
  }
  extraerDinero(){
    let extraer = parseFloat(prompt('cuanto dinero desea extraer'));
    document.write(`Extrajo <strong> $${extraer}</strong>`)
    document.write(`<p><strong>Su nuevo saldo es $${Cuenta.saldo = Cuenta.saldo - extraer}
    </strong></p>`)
  } 
  informarCueta(){
    document.write(`<p><strong>Su estado de cuenta actual es  $${Cuenta.saldo = Cuenta.saldo }
    </strong></p>`)
  }
}

let titular = new Cuenta(prompt('Ingrese su Nombre para Crear su Cuenta'),0)
titular.nuevoUsuario();
titular.ingresarDinero();
titular.extraerDinero();
titular.informarCueta();



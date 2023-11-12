/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
(a + b )*2 = Perimetro, cm
(a * b)  = centimetros cuadrados 


 */
class Rectangulo {
  constructor(altura, ancho){
    this.altura = altura,
    this.ancho = ancho
  }
  perimetro(){
    let ladoLargo = parseFloat(prompt(`Ingrese el Largo`))
    this.altura = ladoLargo
    let ladoAncho = parseFloat(prompt(`Ingrese el ancho`))
    this.ancho = ladoAncho
    let resultadoPerimetro = (ladoLargo + ladoAncho) * 2
    document.write(`<p>El resultado del "Perimetro es ${resultadoPerimetro}"</p>`)
  }
  area(){
    let ladoA = parseFloat(prompt(`Ingrese el primer lado`))
    this.altura = ladoA
    let ladoB = parseFloat(prompt(`Ingrese el primer lado`))
    this.ancho = ladoB
    let resultadoArea = ladoA * ladoB
    document.write(`<p>EL resultado del "Area" del Rectangulo es ${resultadoArea}</p>`)
  }
}

 let rectangulo1 = new Rectangulo()

 rectangulo1.perimetro()
 console.log(rectangulo1.altura)
 console.log(rectangulo1.ancho)
 console.log(rectangulo1)
 



let rectangulo2 = new Rectangulo()

 rectangulo2.area()
console.log(rectangulo2.altura)
console.log(rectangulo2.ancho)
console.log(rectangulo2) 



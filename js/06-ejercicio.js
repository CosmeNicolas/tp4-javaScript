/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

 */

class Libro {
    constructor(isbn,titulo,autor,numPaginas){
        this.isbn = isbn,
        this.titulo = titulo,
        this.autor = autor, 
        this.numPaginas = numPaginas
    }
    get isbn() {
        return this._isbn;
      }
    
    set isbn(nuevoIsbn) {
        this._isbn = nuevoIsbn;
      }

      get titulo() {
        return this._titulo;
      }
    
    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
      }

      get autor() {
        return this._autor;
      }
    
    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
      }

      get numPaginas() {
        return this._numPaginas;
      }
    
    set numPaginas(nuevoNumPag) {
        this._numPaginas = nuevoNumPag;
      }
    
        mostrarLibro(){
            document.write(`<ul>
            <li>ISBN: ${this.isbn}</li>
            <li>Título: ${this.titulo}</li>
            <li>Autor: ${this.autor}</li>
            <li>Numero de Páginas: ${this.numPaginas}</li>
            </ul>`)
            document.write(`<b>EL Libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor}, tiene ${this.numPaginas} paginas</b>`)
        }
        compararPaginas(){
            if(libro1.numPaginas > libro2.numPaginas){
                console.log(`El libro ${libro1.titulo} tiene mas paginas`)
            } if(libro1.numPaginas < libro2.numPaginas){
                console.log(`El libro ${libro2.titulo} tiene mas paginas`)
            } if (libro1.numPaginas === libro2.numPaginas) {
                console.log("Ambos libros tienen la misma cantida de paginas")
            }
        }
         
    }
    
        

    



const libro1 = new Libro('1234567892',"Harry Potter","J. K. Rowling", 161);
const libro2 = new Libro(1234567891,"El Hombre en busca de sentido","Viktor Frankl",162)
console.log(libro1);
libro1.mostrarLibro();

console.log(libro2);
libro2.mostrarLibro();


libro1.compararPaginas()


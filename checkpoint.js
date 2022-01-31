// No cambies los nombres de las funciones.

function sumaTodosImpares() {
  // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares.
  // ej:
  // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15

  // Tu código aca:
  var arreglo= [1, 5, 9];
  var suma = 0;
  for(var i = 0; i > arreglo.length; i++ )
  {
    suma += arreglo[i]
  }
  console.log("La suma es:" + suma);
}


function stringMasLarga(str) {
  // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
  // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
  // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
  // Tip: podes usar el metodo de String 'split'

  // Tu código aca:
  function longest(str){
 
    str = str.split(" ")
   
    return str.sort((a, b) => b.length - a.length)[0]
  }
    
    
  console.log(longest("Hola jesucristo es rey de reyes" + " Todo lo puedo en cristo que me fortalece"))
}

function estaOffline(usuarios, nombre) {
  // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
  // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
  // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
  // ej:
  // var usuarios = [
  //     {
  //       nombre: 'toni',
  //       online: true
  //     },
  //     {
  //       nombre: 'emi',
  //       online: true
  //     },
  //     {
  //       nombre: 'agus',
  //       online: false
  //     }
  // ];
  // estaOffline(usuarios, 'agus') retorna true
  // estaOffline(usuarios, 'emi') retorna false

  // Tu código aca:
  var usuarios = [
    {nombre: 'toni',
     online: true},
    {nombre: 'emi', online: true},
    {nombre: 'agus', online: false}];

    if(this.online){return false;} return true;
}

function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // Tu código aca:

let persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
let persona2 = ['comer', 'dormir', 'futbol'];
let coincidencias = [];

persona1.forEach(comparar);

function comparar(item) {
  if(persona2.includes(item) && (coincidencias.includes(item) === false)){
  coincidencias.push(item);
  };
}

console.log(coincidencias);
       


}

function buscaDestruye(arreglo, num) {
  // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
  // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
  // La función debe retornar el array sin los números sacados.
  // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
  //
  // Tu código aca:
  function buscaDestruye(arr,num){
    return arr.filter(function(el) {
        return el !== num;
    })
  }
  
  let arreglo = [1,2,3,4,5,2,3,4];
  let numero = 2;
  
  let result = buscaDestruye(arreglo,numero);
  
  console.log(result);
}

function sumarElTipo(arreglo) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada tipo.
  // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
  // Ej:
  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  // Tip: podes usar el ciclo for o el metodo de Array 'reduce'

  // Tu código aca:
  function sumarElTipo(vehiculos) {
  var vehiculosPropiedades = [];
  for (var i = 0; i < vehiculos.length; i++) {
   vehiculosPropiedades.push(vehiculos[i]);
  }

 
 var propiedadValor = [];
 for (var j = 0; j < Object.length; j++) {
     if (vehiculosPropiedades === Object[j].nombre ) {
          propiedadValor.push( Object[j].valor) 
                   
     }
   }
 
   return propiedadValor;


}

// =======================================================================

function crearClaseEmprendedor() {
  class Emprendedor {
      constructor(nombre, apellido, libros, mascotas) {
          // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
          // Inicializar las propiedades del emprendedor con los valores recibidos como argumento

          // Tu código aca:
          this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;

      }

      addMascota(mascota) {
        // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
        // no debe retornar nada.

        // Tu código aca:
        class Emprendedor {
          mascotas = [];
      
          constructor(mascotas) {
              this.mascotas = mascotas;
          }
      
          addMascota(mascota) {
              this.mascotas.push(mascota);
          

      }

       getMascotas() {
          // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
          // emprendedor.getMascotas() debería devolver 2

          // Tu código aca:
          var Mascotas = {
            mascota1: 'perro',
            mascota2: "gato",
          
            getMascotas: function() {
              return this.mascota1 +' ' + this.mascota2;
            }
          }
      }

      addBook(book, autor) {
          // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
          // { nombre: book, autor: autor} al arreglo de libros del emprendedor.
          // No debe retornar nada.

          // Tu código aca:
          let book = "Dagon";
          let nombreAutor = "HP Lovecraft"
          const info = {
          nombre: book, 
          autor: nombreAutor
}

         console.log(info.nombre)

      }

      getBooks() {
          // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
          // emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']

          // Tu código aca:
          const Books = [
            {nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}];
          
          const indexed = Books.map((Book) => Book.nombre);
          
          console.log(indexed);

      }

      getFullName() {
          // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
          // ej:
          // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
          // emprendedor.getFullName() deberia devolver 'Elon Musk'

          // Tu código aca:
          var emprendedor = {
            nombre: 'Pedro',
            apellido: "Hurtado",
          
            getFullName: function() {
              return this.nombre +' ' + this.apellido;
            }
          }

      }
  }

  return Emprendedor;
}

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

  mapear() {
  // Escribi una funcion mapear en el prototipo del objeto global 'Array'
  // que recibe una funcion callback , que se ejecuta por cada elemento del array
  // mapear los elementos de ese array segun la funcion callback
  // Esta funcion tiene que devolver un array nuevo con los elementos mapeados.
  // NO USAR LA FUNCION MAP DE ARRAYS.
  // ej:
  // var numeros = [1, 2, 3, 4];
  // numeros.mapear(function(numero) {
  //   return numero + 1;
  // }) devuelve [2, 3, 4, 5]

  // Tu código aca:
  var otra = []
  var final = function(cb){
  for ( var i = 0; i<Array.length; i++){
    otra.push(cb(Array[i]))
  }
}

return otra;
}

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  sumaTodosImpares,
  buscaDestruye,
  actividadesEnComun,
  estaOffline,
  stringMasLarga,
  sumarElTipo,
  crearClaseEmprendedor, 
  mapear}

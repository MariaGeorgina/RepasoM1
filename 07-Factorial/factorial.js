/**
 * Escribe una funcion llamada factorial. Debe retornar el factorial 
 * de un numero.
 * Factoriar es cuando multiplicamos un numeros por todos los que estan 
 * debajo de el.

 * @param {Number} num - esto es number.
 * @returns {Number} - deberia retornar un number.
 */

function factorial(num) {
    if (num < 1) {
        return 0;
      } else {
        if (num === 1) {
          return 1;
        } else {
        return num * nFactorial (n - 1)
      }
     }
     }


/**
 * Escribe una funcion llamada reverse que acepte un string.
 * Debe retornar el string a la inversa.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */

function reverse(str) {
    return str.split('').reverse().join('');
}

//function reverse(str) {
 //   if (str === "") return "";
  
 //   return reverse(str.substr(1)) + str.charAt(0);
 // }

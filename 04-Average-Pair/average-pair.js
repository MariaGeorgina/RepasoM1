/**
 * Escribe una funcion que reciba un array y un numero promedio. 
 * Determina si dentro del array dos numeros dan el promedio pasado.
 * Deberia retornar true si dos numeros sumados dentro del array 
 * es igual al num pasado.

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function averagePair(arr, num) { // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let left = 0; // sería la posición '0' (1)
  let right = arr.length - 1; // la última posición (9)

  while (left < right) { // mientras que la izquierda sea menor a derecha
    let average = (arr[left] + arr[right]) / 2; //se suman la 'izq' y la 'derecha' y se divide por dos y se lo guarda en la variable 'promedio'

    if (average === num) return true; //si el 'promedio' es igual al nro retorna 'true'
    else if (average < num) left++; // caso contrario si el promedio es menor al nro, avanza el índice de la izquierda.
    else right--; // si el promedio es mayor al nro, avanza el índice de la derecha
  }

  return false;

}

//for (var i = 0; i < arr.length; i++) {
 // for (var j = i + 1; j < arr.length; j++) {
 //   if (arr[i] + arr[j] / 2 === num) {
 //  return true;
 //   }
 // }
//}
//return false;
//}

/**
 * Escribe una function llamada BinaryToDecimal que acepte string numerico 
 * y una base.
 * La funcion deberia retornar un numero entero. 
 * La idea es tomar un numero binario y "pasarlo" a un numero entero.
 * La formula para convertir un numero binario en decimal es: N * B ^ I 
 * Donde N es el numero B es la base e I es el indice.
 * Digamos que tenemos el binario "101" la formulara seria asi:
 * 1 * 2 ^ 2  +  0 * 2 ^ 1  +  1 * 2 ^ 0

 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

function BinaryToDecimal(binary, base) {
    var resultado = 0;
    var binary = binary.split('');
    binary = binary.reverse();
    for (let i = 0; i < binary.length; i++) {
        resultado = resultado + Math.pow (base, i) * binary[i];
    }
    return resultado;
}

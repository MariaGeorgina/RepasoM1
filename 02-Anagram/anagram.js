/**
 * Dado dos strings, escribe una function para determinar si el 
 * segundo string es un anagrama de el primero.
 * Deberia retornar true si cada letra en el primer string se encuentra 
 * en el segundo string.
 * Un anagrama consiste en crear una palabra a partir de la 
 * reordenación de las letras de otra palabra. 
 * Como cinema y iceman.

 * @param {string} first - esto es un string.
 * @param {string} second - esto es un string.
 * @returns {boolean} - deberia retornar true o false.
 */

function validAnagram(first, second) {
    let first = first.toLowerCase.split('').sort().join('');
    let second = second.toLowerCase.split('').sort().join('');
    return s === t;
}
// if (first.length !== second.length) {return false}
//else {
    //for (let i = 0; i < first.length; i++)
    //for (let j = 0; j < second.length; j++)
    // if (first.chartAt(i)) === second.charAt(j)) {return true};
    //{return false}
    //}}

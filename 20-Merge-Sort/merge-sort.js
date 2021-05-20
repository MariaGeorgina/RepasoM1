function mergeSort(arr) {
  // construye un algoritmo de busqueda bubble sort
  function our_split(arr){
    ​
      let middle = Math.floor(arr.length/2);
      let left = arr.slice(0, middle); //[0,middle)
      let right = arr.slice(middle);   //[middle, final]
    ​
      return [left, right]; // [ [5, 10], [7, 0, 2] ]
    }
  function merge(left, right){
    ​
      let leftIndex = 0;
      let rightIndex = 0;
      let arr = [];
    ​
      while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
          arr.push(left[leftIndex]);
          leftIndex++;
        }else{
          arr.push(right[rightIndex]);
          rightIndex++;
        }
      }
    ​
      return arr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
    if(arr.length === 1) return arr;
    ​
      let div = our_split(arr); // una funcion que se encargue de dividir nuestro arreglo en 2
      let left = div[0];
      let right = div[1];
    ​
      return merge(mergeSort(left), mergeSort(right));
    }

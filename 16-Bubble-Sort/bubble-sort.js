function bubbleSort(arr) {
  // construye un algoritmo de busqueda bubble sort
  let swap = true;
  while (swap) {
      swap = false;
        for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr [i + 1]) {
        let aux = arr [i]
        arr [i] = arr [i + 1];
        arr [i + 1] = aux;
        swap = true;
      }
    }
  } 
    return arr;
}

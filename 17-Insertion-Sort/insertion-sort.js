function insertionSort(arr) {
  // construye un algoritmo de busqueda bubble sort
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let aux = arr [i];
    while (j >= 0 && arr[j] > aux) {
      arr [j + 1] = arr [j];
      j--;
    }
    arr [j + 1] = aux;
  }
  return arr;
}


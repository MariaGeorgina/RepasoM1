function selectionSort(arr) {
  // construye un algoritmo de busqueda bubble sort
  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      var aux = arr[i];
      arr [i] = arr [min];
      arr[min] = aux;
    }
  }
  return arr;
}


class HashTable {
  constructor() {
    this.numBackets = 35;
    this.buckets = [];
  }

  hash(key) {
    // do something...
    let suma = 0;
for (let i = 0; i < key.length; i++) {
  suma = suma + key.charCodeAt(i);
}
return suma % this.numBackets;
}
  

  set(key, value) {
    // do something...
    if (typeof key !== 'string') {
      throw new TypeError ('Keys must be strings');
    } else {
      let index = this.hash (key);
      if (this.buckets[index] === undefined) {
        this.buckets[index] = {};
      }
      this.buckets[index][key] = value;
    }
  }

  get(key) {
    // Este metodo nos devuelve el value dentro de cada objeto de buckets.
    let index =  this.hash (key);
  return this.buckets[index][key];
}
  

  hasKey(key) {
    // Este metodo devuelve true o false si la key indicada se encuentra en nuestra hash table.
    let index = this.hash (key);
return this.buckets[index].hasOwnProperty (key);
}
  

  key() { //prototype
    // Nos permite obtener todas las key dentro de nuestra hash table
    let keyArray = [];
    for (k in this.buckets) {
      if (k !== undefined) {
        keyArray = [... keyArray, ... Object.keys (this.buckets[k])]
      }
    }
    return keyArray;
  }

  value() { //prototype
    // Nos permite obtener todas los values dentro de nuestra hash table
    let valueArray = [];
    for (k in this.buckets) {
      if (k !== undefined) {
        valueArray = [... valueArray, ... Object.values(this.buckets[k])]
      }
    }
    return valueArray;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // El metodo push nos permite insertar un nuevo valor AL FINAL
    // Creamos el nuevo nodo que recibira el valor que le pasemos.
    let newNode = new Node(val);

    // Validamos que este vacio el nodo padre, si es asi construimos el primer nodo.
    if (this.head === null) {
      // La lista esta vacia.
      // Como tenemos solo un valor, ahora ese valor va a ser el head.
      this.head = newNode;
    }
    // Si head no es null, es decir, tiene un valor dentro, es decir no esta vacio.
    else {
      // Añadimos el nuevo valor AL FINAL de la cola, osea de el ultimo valor.
      this.tail.next = newNode;
    }
    // Sin importar si el head esta vacio o si ya poseemos datos en nuestra lista, TODO elemento que agregamos lo agregamos AL FINAL por lo tanto SIEMPRE sera nuestro ultimo elemento, siempre sera nuestro tail.
    this.tail = newNode;
    // Incrementamos la longitud y retornamos this, que hace referencia al LinkedList.
    this.length++;
    return this;
  }
  //var nuevoNodo = new Node (val);
  //if (this.head === null) {
   // this.head = nuevoNodo;
   // this.length++;
   // return nuevoNodo;
 // }
 // var current = this.head;
 // while(current.next) {
  //  current = current.next;
  //}
  //current.next = nuevoNodo;
  //this.tail = nuevoNodo;
  //this.length++;
  //return nuevoNodo;
//}
//const newNode = new Node(value);
 //   if (this.length > 0) {
  //    this.tail.next = newNode;
   // } else {
  //    this.head = newNode;
  //  }
  //  this.tail = newNode;
    //this.length += 1;
    //return newNode;
  //}

  pop() {
    // El metodo pop nos permite eliminar un nuevo valor AL FINAL

    // Edge cases. Si el head NO tiene valores, es decir esta vacio, es decir la lista esta vacia. Return undefined.
    if (!this.head) return undefined; // La lista esta vacia.

    // ***********************************************************************************************************
    // Esta es una formula magica que nos permite iterar sobre todos los elementos de la lista
    var current = this.head;
    var newTail = current;
    // Iteramos mientras el current next no este en null, si esta en null quiere decir que ese current es el ultimo elemento.
    while (current.next) {
     newTail = current;
     current = current.next;
    }
    // En el principio current y newTail toman el mismo valor. Si se cumple la condicion que queremos estas variables se actualizan.
    //                  newTail
    // Esto se veria asi: 222 --> 125 --> 912 --> 371 --> 883 --> 289 --> 201 --> null
    //                  current   

    // Ahora current toma el siguiente valor pero newTail sigue guardando el valor anterior.
    //                  newTail
    // Esto se veria asi: 222 --> 125 --> 912 --> 371 --> 883 --> 289 --> 201 --> null
    //                          current

    // Seguimos iterando y ahora current toma el siguiente valor y newTail sigue guardando el valor anterior.
    //                                                          newTail
    // Esto se veria asi: 222 --> 125 --> 912 --> 371 --> 883 --> 289 --> 201 --> null
    //                                                                  current

    // De esta manera iteramos sobre la lista para buscar el valor o la condicion que querramos.
    // ***********************************************************************************************************

    // Cuando encontramos el ultimo elemento, que es el tail, decimo que...
    // Nuestro tail ahora sera el anterior a ese elemento, que lo tenemos guardado en newTail.
    this.tail = newTail;
    // Nuestro tail es el penultimo, por lo que apunta aun al ultimo...
    // Ahora le decimos que apunte a null, es decir que ignora el ultimo valor, lo elimina
    this.tail.next = null;
    // Decrecemos
    this.length--;
    // Si lo que acabamos de elimar es el ultimo valor de la lista, osea que ahora la lista esta vacia...
    if (this.length === 0) {
      // Seteamos para que nuestrp head y tail queden en null.
     this.head = null;
     this.tail = null;
    }
    // Devolvemos el valor que eliminamos.
    return current;
  }


  

  shift() {
    // El metodo pop nos permite eliminar un nuevo valor AL PRINCIPIO
    //Si el head NO tiene valores, es decir esta vacio, es decir la lista esta vacia. Return undefined.
    if (!this.head) return undefined; // La lista esta vacia.

    // Creamos una auxiliar que guardara el valor que estamos removiendo y que se devolvera al final.
    let aux = this.head;
    // Ahora decimos que el head se el valor siguiente, por lo que perdemos el head actual, lo removemos.
    this.head = this.head.next;
    // Disminuimos la lista
    this.length--;
    // Si lo que eliminamos fue el unico valor de la lista, osea que ese valor era el head y el tail pero nostros solo lo estamos eliminando del head. Aca decimos que lo elimine tambien de el tail.
    if (this.length === 0) {
      this.tail = null;
    }
    // Retornamos lo que acabamos de eliminar.
    return aux;
  }
  

  unshift(data) {
        // Creamos el nuevo nodo que recibira el valor que le pasemos.
    let newNode = new Node(data);

    // Si nuestra lista no tiene ningun elemento, ergo esta vacia,
    // seteamos nuestro nuevo nodo para que sea el head y el tail.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Si no esta vacio, si contiene elementos...
      // Guardamos en una auxiliar el valor de head, para no perderlo.
      let aux = this.head; // OPCION B: no creamos esta var.
      // Cambiamos el valor de head por el de el nuevo nodo.
      this.head = newNode; // OPCION B: newNode.next = this.head; - seteamos el next de el nuevo nodo, que originalmente esta en null, para que sea el head y no lo perdamos.
      // Ahora decimos que el next de el nuevo nodo que hemos credo sea el nodo que guardamos, lo que era el head.
      this.head.next = aux; // OPCION B: this.head = newNode; - ahora el head sera nuestro nuevo nodo que estara apuntando al head anterior, que ya no es el head sino el nodo siguiente ahora.
      // Es decir, tenemos la siguiente lista: sandia --> melon --> limon
      // Con este metodo agragaremos un nuevo elemento delante: PERA --> sandia --> melon --> limon
    }
    // Al finalizar subiremos la longitud y devolveremos la lista.
    this.length++;
    return this;
  }
      
  get(index) {
    // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno.
    if (index < 0 || index > this.length) return null;

    // Creamos la variable donde se guardara el indice que estamos buscando
    let count = 0;
    // Magic
    var current = this.head;
    // Mientras que el indice que queremos encontrar no sea igual al indice que le pasamos, itera
    while (count !== index) {
      // Hacemos avanzar a current y subimos el valor de count, el indice.
      current = current.next;
      count++;
    }
    // Cuando count y index son iguales, es decir: encontre lo que estaba buscando...
    // Retornamos el valor que hay en ese indice
    return current;
  }
  

  set(index, data) {
    // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
    // Como las listas no tienen indice es necesario llamar al metodo get que consigua el valor que buscamos en el indice que le pasamos.
    let foundNode = this.get(index);
    // Si encontramos el valor que estamos buscando...
    if (foundNode) {
      // Ahora reemplaza por data
      foundNode.value = data;
      return true;
    }
    // Si no encontramos el valor que queriamos reemplazar, porque no estaba o la lista estaba vacia, retornamos false.
    return false;
  }

  insert(index, data) {
    // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista
    //Considero casos donde no va a estar el indice en mi lista.
    if(index < 0 || index >=this.length) return false;
   
    //Considero las opciones de que el indice coincida con el head o con el tail y reutilizo metodos ( para que se actualicen los head y tail tambien)
    if(index===0){      //Si coincide con el head, reutilizo unshift
      var nuevoNodo = this.unshift(data);
      return nuevoNodo;      
    }else if (index===this.length-1){ //Si coincide con el tail, reutilizo push
      var nuevoNodo = this.push(data);
      return nuevoNodo;
    }
    
    //Cuando esta en el medio de la lista
    var posAnterior = get(index-1); //pido el index anterior para poder insertar nuevo nodo en la posicion adecuada 
             
    var nuevoNodo = new Node(data);
    var aux = posAnterior.next;
    posAnterior.next = nuevoNodo;
    nuevoNodo.next = aux;
    this.length++; 
    return true;  // retorno true si encuentro indice y lo agrego      
    }
  

  remove(index) {
    //Esto nos permite eliminar un valor en CUALQUIER parte de la lista
    if (index < 0 || index > this.length) return undefinded;
    // Si queremos eliminar un valor al final de la lista ya tenemos un metodo pre definido: pop. Lo llamamos.
    if (index === this.length) return this.pop(data);
    // Si queremos eliminar un valor al principio de la lista ya tenemos un metodo pre definido: shift. Lo llamamos.
    else if (index === 0) return this.shift(data);

    // De otro modo vamos a buscar y elimanar el dato donde quiera que este.
    // Buscamos el valor anterior al dato que queremos eliminar.
    let prevNode = this.get(index - 1);
    // Creamos una variable donde guardaremos el dato que eliminaremos.
    let removeNode = prevNode.next;
    // Como estamos parados en el dato anterior este apunta al dato que queremos eliminar,
    // entonces le decimos que ahora no apunte a ese dato sino al next de ese dato. El siguiente de el siguiente.
    prevNode.next = prevNode.next.next;
    // Decrecemos
    this.length--;
    // Devolvemos el dato que acabamos de eliminar.
    return removeNode;
}

  reverse() {
    // revierte esta lista
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    for (let p = 0; p < this.length; p++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  }
 

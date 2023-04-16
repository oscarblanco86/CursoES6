function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}


const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


// solucion al problema gracias a uno de los comentarios

export function* getId() {
    let value = 1
    while (true) {
      yield value++
    }
  }
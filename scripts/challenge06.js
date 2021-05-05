/* 6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7] */

function newArray(array) {
  const auxArray = []

  for (value of array) {
    if (auxArray.indexOf(value) === -1) {
      auxArray.push(value)
    }
  }

  return auxArray
}

var array = newArray([1, 2, 3, 3, 2, 4, 5, 4, 7, 6, 3, 9, 6])
console.log(array)

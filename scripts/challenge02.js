/* 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1] */

function createArray(array) {
  var auxArray = []
  var length = array.length

  for (length; length > 0; length--) {
    auxArray.push(array[length - 1])
  }

  return auxArray
}

var array = createArray([1, 2, 3, 4, 5, 6, 7])
console.log(array)

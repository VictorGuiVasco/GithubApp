 /* 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5] */

function newArray(array) {
  var auxArray = []

  for (let value of array) {
    if(value.length >= 1) {
      for (let auxValue of value) {
        auxArray.push(auxValue)
      }
    }
    else auxArray.push(value)
  }

  return auxArray
}

var array = newArray([1, 2, [3], [4, 5], [3], 7])
console.log(array)

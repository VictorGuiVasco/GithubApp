/* 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]] */

function newArray(array, number) {
  var auxArray = []
  var newArr = []

  do {
    if (array.length < number) {
      newArr.push(array[0])
    }
    else for (let j = 0; j < number; j++) {
      auxArray.push(array[j])
    }
    array.splice(0, number)
    newArr.push(auxArray)
    auxArray = []
    console.log(array)
  } while (array.length !== 0)

  newArr.pop()
  return newArr
}

var array = newArray([1, 2, 3, 4, 5, 6, 7], 3)
console.log(array)

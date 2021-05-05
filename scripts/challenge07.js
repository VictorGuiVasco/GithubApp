/* 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true */

function newArray(array1, array2) {

  if (array1.length !== array2.length) return false;
  for (var i = 0, length = array1.length; i < length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }

  return true;
}

var arrayIsEqual = newArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
console.log(arrayIsEqual)

/* 10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8] */

function newArray(array1, array2) {

  array1 = array1.filter(index => array2.includes(index))
  
  return array1
}

var array = newArray ([6, 8, 7, 9, 0], [8, 9,, 5, 3])
console.log(array)

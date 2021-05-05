/* 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2] */

function createArray(array) {
  var length = array.length
  var newArray = array.filter(number => number >= 1)
  
  return newArray
}

var array = createArray([1,2,'gerg', 3, undefined, null, false])
console.log(array)

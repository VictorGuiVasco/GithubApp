/* 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2] */

function newArray(array, number1, number2) {
  var newArray1 = array.filter(newarray => newarray !== number1 && newarray !== number2)


  return newArray1;
}

var array = newArray([5, 4, 3, 2, 5, 4, 7], 5, 3)
console.log(array)
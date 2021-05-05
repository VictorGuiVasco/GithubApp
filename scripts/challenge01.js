/* 1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a'] */

function createArray(number, item) {
  var array = []

  for (let index = 0; index < number; index++) {
    array.push(item)
  }

  return array
}

var array = createArray(3, 'a')
console.log(array)

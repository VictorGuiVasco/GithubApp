/* 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4} */

function newObject(array) {
  const map = new Map(array)
  const objeto = Object.fromEntries(array)

  return objeto
}

var objeto = newObject([["c", 2], ["d", 4], ["f", 47], ["e", 4]])
console.log(objeto)

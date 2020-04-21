lista = [1, 5, 6, 0, 23, 'Ana']

/*let c = 0
do{
    console.log(`A posição do valor ${lista[c]} é ${c}`)
    c++
}while (c < lista.length)*/

var removerItem = lista.splice(0, 2)

console.log(lista)
var anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(anos['2'])

var promessa = {
    'var': 'texto',
    'array': [1, 2, 3, 4]
  };
  
  console.log(promessa['var']);
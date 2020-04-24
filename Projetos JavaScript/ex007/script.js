let todos = [] // Criando array
let res = document.getElementById('res')

function media(n) { // Média de todos valores da array
    let media = somarValores(n) / n.length
    return media
}

function somarValores(n) { // Função para somar todos valores do array
    let soma = 0
    for (let c = 0; c < n.length; c++) {
        soma += Number(n[c])
    }
    return soma
}

function add() {
    let num = document.getElementById('txtn')
    if (num.value == 0 || num.value > 100){
        window.alert('Por favor, digite um número válido.')
    } else {
        let lista = document.getElementById('lista')
        let item = document.createElement('option')
        item.text = `${num.value} foi adicionado`
        lista.append(item)
        todos.push(Number(num.value))
        res.innerHTML = ''
    }
}

function finalizar() {
    res.innerHTML = `Ao todo, temos ${todos.length} números cadastrados</br>`
    res.innerHTML += `O maior valor informado foi ${Math.max.apply(null, todos)}</br>`
    res.innerHTML += `O menor valor informado foi ${Math.min.apply(null, todos)}</br>`
    res.innerHTML += `Somando todos os valores temos ${somarValores(todos)}</br>`
    res.innerHTML += `A média dos valores adicionados é ${media(todos)}`
 }
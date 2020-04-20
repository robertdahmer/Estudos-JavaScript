function resultado() {
    let numero = window.document.getElementById('numero')
    let resultado = window.document.getElementById('resultado')
    if (numero.value.length == 0){
        window.alert('Valor inválido!')
    } else {
        resultado.innerHTML = ''
        let n = Number(numero.value)
        let c = 1
        while (c <= 10) {
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            resultado.appendChild(item)
            c++
        }
    }

    

}
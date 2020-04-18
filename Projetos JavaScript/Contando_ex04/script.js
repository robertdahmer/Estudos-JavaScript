function contar() {
var inicio = window.document.getElementById('inicio')
var final = window.document.getElementById('final')
var passo = window.document.getElementById('passo')
var res = window.document.getElementById('resultado')

if (inicio.value.length == 0 || final.value.length == 0){
    res.innerHTML = `Impossível contar!`
    window.alert('[ERRO] Consulte os valores e tente novamente!')
}
else {
    var i = Number(inicio.value)
    var f = Number(final.value)
    var p = Number(passo.value)
    if (p <= 0) {
        window.alert('PASSO INVÁLIDO! Considerando valor 1')
        p = 1
    } 
    var c = i
    if (i > f){
        for (c; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
        }
    res.innerHTML += `\u{1F3C1}`
    } else {
        for (c; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
        }
res.innerHTML += `\u{1F3C1}`
}

    }
}
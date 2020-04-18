function contar() {
var inicio = window.document.getElementById('inicio')
var final = window.document.getElementById('final')
var passo = window.document.getElementById('passo')
var res = window.document.getElementById('resultado')

if (i == 0 || f == 0 || p == 0){
    window.alert('[ERRO] Consulte os valores e tente novamente!')
    p = 1
} else {
    var i = Number(inicio.value)
    var f = Number(final.value)
    var p = Number(passo.value)
}
var c = i
if (i > f){
    for (c; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
    }
} else {
    for (c; c <= f; c += p) {
    res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
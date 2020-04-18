function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('final')
    var passo = window.document.getElementById('passo')

    var Valor_inicio = inicio.value
    var Valor_final = fim.value
    var Valor_passo = passo.value
    if (Valor_passo == 0){
        window.alert('PASSO INVÁLIDO! Considerando valor 1')
    }
    if (Valor_inicio == 0){
        window.alert('INÍCIO INVÁLIDO! Considerando valor 1')
    }
    if (Valor_final == 0) {
            window.alert('FINAL INVÁLIDO! Considerando valor 1')
    }
    var cont = 0
    for(Valor_inicio; cont != Valor_final; cont += Valor_passo){
      
    }
}
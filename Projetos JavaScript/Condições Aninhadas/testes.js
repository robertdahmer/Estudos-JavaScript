var idade = 18
if (idade < 16){
    console.log('Menor de idade. Não vota.')
}
else if (idade >= 16 && idade < 18) { // A parte dos operadores lógicos pode ser tirada porque se não é menor que 16, ele para nessa condição idade < 18 e vai fazer os testes.
    console.log(`Adolescente de ${idade} anos. Voto opcional.`)
}
else if (idade > 75) {
    console.log('Voto opcional')
}

else if (idade >= 18) {
    console.log(`${idade} anos. Voto obrigatório`)

}

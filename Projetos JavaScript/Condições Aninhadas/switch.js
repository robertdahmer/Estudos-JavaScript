var agora = new Date()
var diaSemana = agora.getDay()
// diaSemana =7
/*
Domingo 0
Segunda 1
Terça 2
Quarta 3
Quinta 4
Sexta 5
Sábado 6
*/

switch (diaSemana) {
    case 0: {diaSemana = 'Domingo'
    break}
    case 1: {diaSemana = 'Segunda' 
    break}
    case 2: {diaSemana = 'Terça' 
    break}
    case 3: {diaSemana = 'Quarta'
    break}
    case 4: {diaSemana = 'Quinta'
    break}
    case 5: {diaSemana = 'Sexta'
    break}
    case 6: {diaSemana = 'Sábado'
    break}

    default:{console.log('WHAT DE FUCK IS THAT DAY?!')
        break}
}
console.log(`Hoje é ${diaSemana}`)

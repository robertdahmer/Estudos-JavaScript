var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
minutos.toString()
minutos = `0${minutos}`
var horárioB = `${horas}:${minutos}`


if (horas >= 0 && horas < 12){ // manhã
    var horaDia = window.document.getElementById('horário')
    var corpo = window.document.getElementById('corpo')
    var imagem = window.document.getElementById('imagem')
    horaDia.innerHTML = `Agora são ${horárioB} horas. Bom dia! :)`
    imagem.src = 'fotomorning.png'
    corpo.style.background = 'rgb(217, 91, 42)'
}
else if (horas >= 12 && horas < 19){ // tarde
    var horaDia = window.document.getElementById('horário')
    var corpo = window.document.getElementById('corpo')
    var imagem = window.document.getElementById('imagem')
    horaDia.innerHTML = `Agora são ${horárioB} horas. Boa tarde!`
    imagem.src = 'fotoafternoon.png'
    corpo.style.background = 'rgb(0, 166, 233)'
}
if (horas >= 19){ // noite
    var horaDia = window.document.getElementById('horário')
    var corpo = window.document.getElementById('corpo')
    corpo.style.background = 'rgb(7, 60, 99)'
    
    horaDia.innerHTML = `Agora são ${horárioB} horas. Boa Noite!`

}
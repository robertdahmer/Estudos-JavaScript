var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
var horárioB = `${horas}:${minutos}`
console.log(horárioB)
if (horas > 6 && horas < 12){ // manhã
    var horaDia = window.document.getElementById('horário')
    horaDia.innerHTML = `Agora são ${horárioB} horas.`
}
if (horas < 19){ // tarde
    var horaDia = window.document.getElementById('horário')
    var corpo = window.document.getElementById('corpo')
    var imagem = window.document.getElementById('imagem')
    horaDia.innerHTML = `Agora são ${horárioB} horas.`
    imagem.innerHTML = '<img id="imagem"src="fotoafternoon.png" alt="Foto da noite">'
    corpo.style.background = ''
}
if (horas >= 19){ // noite
    var horaDia = window.document.getElementById('horário')
    var corpo = window.document.getElementById('corpo')
    corpo.style.background = 'rgb(7, 60, 99)'
    
    horaDia.innerHTML = `Agora são ${horárioB} horas.`

}
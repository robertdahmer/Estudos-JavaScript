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
    horaDia.innerHTML = `Agora são ${horárioB} horas.`
}
if (horas >= 19){ // noite
    var horaDia = window.document.getElementById('horário')
    var corpo = window.document.getElementById('corpo')
    corpo.style.background = 'rgb(39, 40, 44)'
    
    
    horaDia.innerHTML = `Agora são ${horárioB} horas.`

}
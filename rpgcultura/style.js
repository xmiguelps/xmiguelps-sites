var agora = new Date()
var hora = agora.getHours()
var agora2 = new Date()
var minuto = agora2.getMinutes()
var txt = document.getElementById('horas')
if (minuto <= 9 && minuto >=1) {
    txt.innerHTML += `${hora}:0${minuto}`
} else {
    txt.innerHTML += ` ${hora}:${minuto}`
}
if (hora >= 5 && hora < 12) {
    txt.innerHTML += ' Bom dia☀'
} else if(hora >= 12 && hora < 19) {
    txt.innerHTML += ' Boa tarde🌤'
} else if(hora >= 19 && hora < 24) {
    txt.innerHTML += ' Boa noite🌙'
} else {
    txt.innerHTML += ' Boa madrugada🌑'
}


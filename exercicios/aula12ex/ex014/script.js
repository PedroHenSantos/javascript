function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 19//data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //será bom dia
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#e2cd9f'
        msg.innerHTML = `Agora são ${hora} horas. </br> Bom Dia!!!`
    } else if (hora >= 12 && hora <= 18){
        // será boa tarde
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#b9846f'
        msg.innerHTML = `Agora são ${hora} horas. </br> Boa Tarde!!!`
    } else {
        // será boa noite
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#3b3b42ff'
        msg.innerHTML = `Agora são ${hora} horas. </br> Boa Noite!!!`
    }
}

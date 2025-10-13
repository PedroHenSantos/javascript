function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[EROO] Verifique os dados e tente novamente!')
    }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'foto-bebe-h.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'foto-jovem-h.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto-h.png')
            } else {
                img.setAttribute('src', 'foto-idoso-h.png')
            }
       }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}
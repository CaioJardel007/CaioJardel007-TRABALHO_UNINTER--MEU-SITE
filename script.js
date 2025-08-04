function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] VERIQUE OS DADOS E TENTE NOVAMENTE!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'HOMEM'
            if(idade >=0 && idade<10){
                //criança
                img.setAttribute('src', 'criancahomem.jpg')
            }else if( idade< 21){
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            }else if( idade< 50){
                //adulto
                img.setAttribute('src', 'homemadulto.avif')
            }else{
                //idoso
                img.setAttribute('src', 'velho homem.jpg')
            }
        }
        else if(fsex[1].checked) {
            genero = 'MULHER'
            if(idade >=0 && idade<10){
                //criança
                img.setAttribute('src', 'criancamulher.jpg')
            } else if( idade< 21){
                //jovem
                img.setAttribute('src', 'jovem mulher.jpg')
            } else if( idade< 50){
                //adulto
                img.setAttribute('src', 'adulto mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'velho mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `DETECTAMOS ${genero} COM ${idade} ANOS`
        res.appendChild(img)
    }
}
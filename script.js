function carregar(){
var msg = window.document.getElementById ('msg')
var img = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours ()
var minuto = data.getMinutes()
var agora = data.getDay() 
var semana = window.document.getElementById ('hr')
var ad = window.document.getElementById ('av')
var matematica = matematica                       
     msg.innerHTML = `agora sao ${hora}:${minuto} hora`
     if  (hora >= 0  &&  hora < 12   )  {
    // bom dia 
    img.src =  'manha.png' 
    document.body.style.background = '#e2cd9f'
     }  else if (hora >= 12 && hora <= 18 ) {
         //boa tarde 
          img.src = 'tarde.png'
          document.body.style.background = '#b9846f'
     } else {
         //boa noite 
         img.src = 'noite.png'
         document.body.style.background =  '#515154'
     }
     switch (agora) {
        case 0:
            semana.innerHTML =  'dormingo'
            break
            case 1:
              semana.innerHTML =   'Segunda-feira'
            break
            case 2:
                semana.innerHTML = 'Terça-feira'
            break
            case 3:
                semana.innerHTML = 'Quarta-feira'
            break
            case 4:
                semana.innerHTML =  'Quinta-feira'
            break
            case 5:
                semana.innerHTML =  'Sexta-feira'
            break
            case 6:
                semana.innerHTML = 'Sábado	'
            break
            default:
                semana.innerHTML ='dia nao entrado'
            break
    }
if(hora == 7 && minuto >= 30 && hora < 8 && agora == 1){ 
    ad.innerHTML = " MATEMÁTICA  - https://fundacaobradesco.webex.com/meet/jamille.garcia"
}else if (hora == 8 && minuto >= 10 && minuto < 50  && agora == 1 ){
    ad.innerHTML = 'INGLÊS - https://fundacaobradesco.webex.com/meet/thais.moreira'
}else if (hora == 8  &&  minuto >= 50 && hora < 9 && agora == 1 ) {
    ad.innerHTML = 'INTERVALO'
}else if (hora == 9  && minuto < 40 && agora  == 1 ){
    ad.innerHTML = 'BIOLOGIA - https://fundacaobradesco.webex.com/meet/luan.miolo'
}else if (hora == 9 && minuto >= 40 && hora < 10  && agora == 1 ){
    ad.innerHTML = ' LP - https://fundacaobradesco.webex.com/meet/sandra.baptista'
}else if (hora == 10 && minuto >= 20 && minuto < 30  && agora == 1 ){
    ad.innerHTML = ' *INTERVALO*'
} else if (hora == 10 && minuto >= 30  && hora < 11 && agora == 1 ){
    ad.innerHTML = ' QUÍMICA - https://fundacaobradesco.webex.com/meet/valdemir.figueredo'
}else if (hora == 11 && minuto >= 10  && hora < 12  && agora == 1 ){
    ad.innerHTML = 'HISTÓRIA - https://fundacaobradesco.webex.com/meet/juliana.silvestre'
}else if (hora == 7 && minuto  >= 30 && hora < 8  && agora == 2 ) {
    ad.innerHTML = ' MATEMÁTICA - https://fundacaobradesco.webex.com/meet/jamille.garcia'
}else if (hora == 8 && minuto >= 10  && minuto < 50  && agora == 2 ){
    ad.innerHTML = ' BIOLOGIA - https://fundacaobradesco.webex.com/meet/luan.miolo'
}else if (hora == 8 && minuto >= 50  && hora < 9  && agora == 2 ){
    ad.innerHTML =' INTERVALO'
}else if (hora == 9 && minuto < 40  && agora == 2 ){
    ad.innerHTML =' ARTE - https://fundacaobradesco.webex.com/meet/jucara.souza'
}else if (hora == 9 && minuto >= 40  && hora < 10   && agora == 2 ){
    ad.innerHTML ='SOCIOLOGIA - https://fundacaobradesco.webex.com/meet/jackson.freitas'
}else if (hora == 10 && minuto >= 20  && minuto < 30 && agora == 2 ){
    ad.innerHTML =' INTERVALO'
}else if (hora == 10 && minuto >= 30  && hora < 11 && agora == 2 ){
    ad.innerHTML ='QUIMÍCA - https://fundacaobradesco.webex.com/meet/valdemir.figueredo'
}else if (hora == 11 && minuto >= 10  && minuto < 50 && agora == 2 ){
    ad.innerHTML =' FÍSICA - https://fundacaobradesco.webex.com/meet/clayton.santos'
}else if (hora == 11 && minuto >= 50 && hora < 12  && agora == 2 ){
    ad.innerHTML ='ESPANHOL - https://fundacaobradesco.webex.com/meet/bruna.martiniani'
}else if (hora == 7 && minuto >= 30 && hora < 8  && agora == 3 ){
    ad.innerHTML =' GEOGRAFIA - https://fundacaobradesco.webex.com/meet/fabio.policarpo'
}else if (hora == 8 && minuto >= 10 && minuto < 50 && agora == 3 ){
    ad.innerHTML =' INGLÊS - https://fundacaobradesco.webex.com/meet/thais.moreira'
}else if (hora == 8 && minuto >= 50  && hora < 9 && agora == 3 ){
    ad.innerHTML ='INTERVALO'
}else if (hora == 9 && minuto < 40  && agora == 3 ){
    ad.innerHTML ='FILOSOFIA - https://fundacaobradesco.webex.com/meet/jackson.freitas'
}else if (hora == 9 && minuto >= 40 && hora < 10 && agora == 3 ){
    ad.innerHTML =' LP - https://fundacaobradesco.webex.com/meet/sandra.baptista'
}else if (hora == 10 && minuto >= 20 && minuto < 30 && agora == 3 ){
    ad.innerHTML =' INTERVALO'
}else if (hora == 10 && minuto >= 30 && hora < 11   && agora == 3 ){
    ad.innerHTML =' HISTÓRIA - https://fundacaobradesco.webex.com/meet/juliana.silvestre'
}else if (hora == 11 && minuto >= 10 && minuto < 50  && agora == 3 ){
    ad.innerHTML =' MATEMÁTICA - https://fundacaobradesco.webex.com/meet/jamille.garcia'
}else if (hora == 11 && minuto >= 50 && hora < 12 && agora == 3 ){
    ad.innerHTML ='FÍSICA - https://fundacaobradesco.webex.com/meet/clayton.santos'
}else if (hora == 7 && minuto >= 30 && hora < 8  && agora == 4 ){
    ad.innerHTML ='MATEMÁTICA - https://fundacaobradesco.webex.com/meet/jamille.garcia'
}else if (hora == 8 && minuto >= 10 && minuto < 50 && agora == 4 ){
    ad.innerHTML =' PROJETO DE VIDA - https://fundacaobradesco.webex.com/meet/gisleine.dias'
}else if (hora == 8 && minuto >= 50  && hora < 9 && agora == 4 ){
    ad.innerHTML ='INTERVALO'
}else if (hora == 9 && minuto < 40  && agora == 4 ){
    ad.innerHTML =' GEOGRAFIA - https://fundacaobradesco.webex.com/meet/fabio.policarpo'
}else if (hora == 9 && minuto >= 40 && hora < 10 && agora == 4 ){
    ad.innerHTML = ' FÍSICA - https://fundacaobradesco.webex.com/meet/clayton.santos'
}else if (hora == 10 && minuto >= 20 && minuto < 30 && agora == 4 ){
    ad.innerHTML =' INTERVALO'
}else if (hora == 10 && minuto >= 30 && hora < 11   && agora == 4 ){
    ad.innerHTML =' LP - https://fundacaobradesco.webex.com/meet/sandra.baptista'
}else if (hora == 11 && minuto >= 10 && minuto < 50  && agora == 4 ){
    ad.innerHTML =' LP - https://fundacaobradesco.webex.com/meet/sandra.baptista'
}else if (hora == 7 && minuto >= 30 && hora < 8  && agora == 5 ){
    ad.innerHTML =' Geografia – https://fundacaobradesco.webex.com/meet/fabio.policarpo'
}else if (hora == 8 && minuto >= 10 && minuto < 50 && agora == 5 ){
    ad.innerHTML ='Biologia –  https://fundacaobradesco.webex.com/meet/luan.miolo'
}else if (hora == 8 && minuto >= 50  && hora < 9 && agora == 5 ){
    ad.innerHTML ='INTERVALO'
}else if (hora == 9 && minuto < 40  && agora == 5 ){
    ad.innerHTML =' LP – https://fundacaobradesco.webex.com/meet/sandra.baptista'
}else if (hora == 9 && minuto >= 40 && hora < 10  && agora == 5 ){
    ad.innerHTML =' Química – https://fundacaobradesco.webex.com/meet/valdemir.figueredo'
}else if (hora == 10 && minuto >= 20 && minuto < 30 && agora == 5 ){
    ad.innerHTML =' INTERVALO'
}else if (hora == 10 && minuto >= 30 && hora < 11   && agora == 5 ){
    ad.innerHTML =' História - https://fundacaobradesco.webex.com/meet/juliana.silvestre'
}else if (hora == 11 && minuto >= 10 && minuto < 50  && agora == 5 ){
    ad.innerHTML ='Matemática – https://fundacaobradesco.webex.com/meet/jamille.garcia'
}else if (hora == 11 && minuto >= 50 && hora < 12  && agora == 5 ){
    ad.innerHTML ='Ed  Física - https://fundacaobradesco.webex.com/meet/rafael.pereira'
}else {
    ad.innerHTML = 'nao tem aula no momento'
}

}


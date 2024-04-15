function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 5 && hora < 12) {
    img.src = 'imagens/foto-manha.jpg'
    document.body.style.background = '#F3DFC0'
} else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/foto-tarde.jpg'
    document.body.style.background = '#843B18'
} else {
    img.src = 'imagens/foto-noite.jpg'
    document.body.style.background = '#3A4F79'
}
    
}
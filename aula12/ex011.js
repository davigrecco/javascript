var idade = 18
console.log(`Você tem ${idade} anos`)
if (idade < 16) { // se a sua idade for menor que 16
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) { // se sua idade for entre 16 a 18 anos, ou maior de 65
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

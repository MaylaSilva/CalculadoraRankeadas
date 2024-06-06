let vitorias = 100
let derrotas = 11

function calculadora(vitorias, derrotas){
    return vitorias-derrotas;
}

function nivel (saldo){
    if (saldo <= 10){
        return "Ferro"
    } else if (saldo > 11 && saldo <= 20){
        return "Bronze"
    } else if (saldo > 21 && saldo <= 50){
        return "Prata"
    } else if (saldo > 51 && saldo <= 80){
        return "Ouro"
    } else if (saldo > 81 && saldo <= 90){
        return "Diamante"
    } else if (saldo > 91 && saldo <= 100){
        return "Lendário"
    } else {
        return "Imortal"
    }
}

function main (){
    const saldoRank = calculadora(vitorias,derrotas);
    const nivelHeroi = nivel(saldoRank);
    console.log ("O Herói tem de saldo de " + saldoRank + " está no nível de " + nivelHeroi)
}

main ()
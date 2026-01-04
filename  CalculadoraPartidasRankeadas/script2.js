const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let nivel = "Ferro"
let heroi = "Anônimo"
let vitorias = 0;
let derrotas = 0;
let vidas = 10
let seguidas = 1

rl.question(`Olá herói! Qual o seu nome? `, string => {
    if (string !== "") heroi = string
    console.log(`\n${heroi}, você tem ${vidas} vidas e está no nível de ${nivel}. 
        Você pode subir de nível no par ou impar\n
        Escolher par   -> 0, 2 ou 4
        Escolher Impar -> 1, 3 ou 5
        Qualquer outra tecla para encerrar.`)
    // Inicia o jogo
    playGame()
})

function CalcularRanking(vitorias, derrotas) {
    saldo = vitorias - derrotas
    return saldo

}

function playGame() {
    rl.question(`\nEscolha -> `, function (string) {
        let escolha = Math.floor(Number(string));

        // Verifica se a entrada está dentro do intervalo ou é válida para continuar o jogo
        if (!isNaN(escolha) && escolha >= 0 && escolha <= 5) {
            let adversario = Math.floor(Math.random() * 6);
            const isSumEven = (escolha + adversario) % 2 === 0;
            const vitoriaHeroi = (escolha % 2 === 0 && isSumEven) || (escolha % 2 !== 0 && !isSumEven);

            if (vitoriaHeroi) {
                vitorias++
                seguidas++
                console.log(`Escolhi ${adversario}. Você venceu! Vitórias: ${vitorias}`)
                if(seguidas%4==0){
                    console.log("3 seguidas! Multiplicando vidas e vitorias por 2!")
                    vitorias*=2
                    vidas*=2
                }
                
            } else {
                derrotas++
                seguidas = 1
                vidas--
                console.log(`Escolhi ${adversario}. Você perdeu! Vidas: ${vidas}`);
            }

            if (vidas)
                // Chama a função novamente para continuar o loop
                playGame()
            else {

                saldoVitorias = CalcularRanking(vitorias, derrotas)

                if (saldoVitorias <= 10) {
                    nivel = "Ferro"
                } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
                    nivel = "Bronze"
                } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
                    nivel = "Prata"
                } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
                    nivel = "Ouro"
                } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
                    nivel = "Diamante"
                } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
                    nivel = "Lendário"
                } else {
                    nivel = "Imortal"
                }

                console.log(`\nVitórias: ${vitorias}`);
                console.log(`Derrotas: ${derrotas}`);
                console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
                rl.close()
            }
        }
        else
            rl.close()
    });
}


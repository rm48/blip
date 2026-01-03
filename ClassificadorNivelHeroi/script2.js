const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let xp = 0
let nivel = "Ferro"
let heroi = "Anônimo"
let vitorias = 0;
let derrotas = 0;
let vidas = 3

rl.question(`Olá herói! Qual o seu nome? `, string => {
    if (string !== "") heroi = string
    console.log(`\n${heroi}, você tem ${vidas} vidas e ${xp} de XP (nível de ${nivel}). 
        Você pode obter mais XP no par ou impar\n
        Escolher par   -> 0, 2 ou 4
        Escolher Impar -> 1, 3 ou 5
        Qualquer outra tecla para encerrar.`)
    // Inicia o jogo
    playGame()
})

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
                xp += 500
                console.log(`Escolhi ${adversario}. Você venceu! XP: ${xp}`)
            } else {
                derrotas++;
                vidas--
                console.log(`Escolhi ${adversario}. Você perdeu! Vidas: ${vidas}`);
            }
              
            if (vidas)
                // Chama a função novamente para continuar o loop
                playGame()
            else {
                
                if (xp < 1000)
                    nivel = "Ferro"
                else if (xp > 1000 && xp <= 2000)
                    nivel = "Bronze"
                else if (xp > 2000 && xp <= 5000)
                    nivel = "Prata"
                else if (xp > 5000 && xp <= 7000)
                    nivel = "Ouro"
                else if (xp > 7000 && xp <= 8000)
                    nivel = "Platina"
                else if (xp > 8000 && xp <= 9000)
                    nivel = "Ascendente"
                else if (xp > 9000 && xp <= 10000)
                    nivel = "Imortal"
                else if (xp > 10000)
                    nivel = "Radiante"

                console.log(`\nVitórias: ${vitorias}`);
                console.log(`Derrotas: ${derrotas}`);
                console.log(`XP: ${xp}`);
                console.log(`\nO Herói de nome ${heroi} está no nível de ${nivel}.`)
                rl.close()
            }
        }
    });
}


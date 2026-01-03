const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let xp = 0
let nivel = "Ferro"
let nomeHeroi = "Anônimo"
rl.question(`Olá herói! Qual o seu nome? `, string => {
    if (string !== "") nomeHeroi = string
    rl.question(`\n${nomeHeroi}, você tem ${xp} de XP e está no nível de ${nivel}. 
        Você quer lutar para obter mais XP? \nEnter = Sim\nn + Enter = Não\n`, function (resposta) {
        if (resposta !== "n")
            playGame()
        else {
            console.log(`Até logo, ${nomeHeroi}`)
            rl.close()
        }
    })
})

function playGame() {
    console.log("lutando...")
    xp += 500
    console.log(`Você tem ${xp} de XP`)
    rl.question(`Continuar lutando?\n`, function (resposta) {
        if (resposta !== "n")
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

            console.log(`\nO Herói de nome ${nomeHeroi} está no nível de ${nivel}.`)
            rl.close()
        }
    })
}
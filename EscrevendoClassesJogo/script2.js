const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let nivel = "Ferro"
let lider = "Anônimo"
let vitorias = 0
let derrotas = 0
let vidas = 10
let seguidas = 1
let ataque = ""
let herois = {
    0: { tipo: "guerreiro", idade: 18, nome: "Guerreiro" },
    1: { tipo: "mago", idade: 18, nome: "Mago" },
    2: { tipo: "monge", idade: 18, nome: "Monge" },
    3: { tipo: "ninja", idade: 18, nome: "Ninja" },
    4: { tipo: "cavaleiro", idade: 18, nome: "Cavaleiro" },
    5: { tipo: "gladiador", idade: 18, nome: "Gladiador" }
}

let tropa = []

class Heroi {
    constructor(nome, heroi, tipo) {
        this.nome = nome
        this.heroi = heroi
        this.tipo = tipo
    }
    atacar() {
        switch (this.heroi) {
            case 0: {
                ataque = "espada"
                break
            }
            case 1: {
                ataque = "magia"
                break
            }
            case 2: {
                ataque = "artes marciais"
                break
            }
            case 3: {
                ataque = "shuriken"
                break
            }
            case 4: {
                ataque = "lança"
                break
            }
            case 5: {
                ataque = "machado"
                break
            }
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

alistar(0)

function alistar(heroi) {
    rl.question(`Olá ${herois[heroi].tipo}! Qual o seu nome? `, string => {
        if (string !== "")
            herois[heroi].nome = string
        rl.question(`${herois[heroi].nome}, qual sua idade? `, string => {
            if (!isNaN(Number(string)) && Number(string) > 17)
                herois[heroi].idade = Number(string)
            else
                herois[heroi].idade = 18
            tropa[heroi] = new Heroi(herois[heroi].nome, heroi, herois[heroi].tipo)
            if (heroi++ < 5) {
                alistar(heroi)
            }

            else {
                console.log(herois)

                console.log(`
                Você tem ${vidas} vidas e está no nível de ${nivel}.\n
                Você pode subir de nível vencendo batalhas\n
                Escolha seu lutador de 0 a 5\n
                Qualquer outra tecla para encerrar.`)
                // Inicia o jogo
                playGame()
            }
        })
    })
}

function CalcularRanking(vitorias, derrotas) {
    saldo = vitorias - derrotas
    return saldo

}

function playGame() {
    rl.question(`\n> `, function (string) {
        let escolha = Math.floor(Number(string));

        // Verifica se a entrada está dentro do intervalo ou é válida para continuar o jogo
        if (!isNaN(escolha) && escolha >= 0 && escolha <= 5) {
            let adversario = Math.floor(Math.random() * 6);
            const isSumEven = (escolha + adversario) % 2 === 0;
            const vitoriaHeroi = (escolha % 2 === 0 && isSumEven) || (escolha % 2 !== 0 && !isSumEven);

            if (vitoriaHeroi) {
                vitorias++
                seguidas++
                tropa[escolha].atacar()
                console.log(`Venceu o ${tropa[adversario].tipo}. Vitórias: ${vitorias}`)
                if (seguidas % 4 == 0) {
                    console.log("3 seguidas! Multiplicando vidas e vitorias por 2!")
                    vitorias *= 2
                    vidas *= 2
                }

            } else {
                derrotas++
                seguidas = 1
                vidas--
                tropa[escolha].atacar()
                console.log(`Derrotado pelo ${tropa[adversario].tipo}. Vidas: ${vidas}`)
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
                console.log(`Saldo de ${saldoVitorias} vitórias - Nível de ${nivel}`)
                rl.close()
            }
        }
        else
            rl.close()
    });
}


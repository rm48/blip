
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 
versão 1
```
node ./script.js
O ninja atacou usando shuriken.
Seu nome é Fumashu e tem 27 anos.

```
versão 2
```
node ./script2.js
Olá guerreiro! Qual o seu nome? 
Guerreiro, qual sua idade? 
Olá mago! Qual o seu nome? 
Mago, qual sua idade? 
Olá monge! Qual o seu nome? 
Monge, qual sua idade? 
Olá ninja! Qual o seu nome? 
Ninja, qual sua idade? 
Olá cavaleiro! Qual o seu nome? 
Cavaleiro, qual sua idade? 
Olá gladiador! Qual o seu nome? 
Gladiador, qual sua idade? 
{
  '0': { tipo: 'guerreiro', idade: 18, nome: 'Guerreiro' },
  '1': { tipo: 'mago', idade: 18, nome: 'Mago' },
  '2': { tipo: 'monge', idade: 18, nome: 'Monge' },
  '3': { tipo: 'ninja', idade: 18, nome: 'Ninja' },
  '4': { tipo: 'cavaleiro', idade: 18, nome: 'Cavaleiro' },
  '5': { tipo: 'gladiador', idade: 18, nome: 'Gladiador' }
}

                Você tem 10 vidas e está no nível de Ferro.

                Você pode subir de nível vencendo batalhas

                Escolha seu lutador de 0 a 5

                Qualquer outra tecla para encerrar.

> 3
O ninja atacou usando shuriken
Derrotado pelo ninja. Vidas: 9

> 4
O cavaleiro atacou usando lança
Derrotado pelo gladiador. Vidas: 8

> 2
O monge atacou usando artes marciais
Venceu o guerreiro. Vitórias: 1

> 
O guerreiro atacou usando espada
Derrotado pelo ninja. Vidas: 7

> 5
O gladiador atacou usando machado
Venceu o cavaleiro. Vitórias: 2

> 2
O monge atacou usando artes marciais
Venceu o guerreiro. Vitórias: 3

> 3
O ninja atacou usando shuriken
Derrotado pelo gladiador. Vidas: 6

> 4
O cavaleiro atacou usando lança
Venceu o guerreiro. Vitórias: 4

> 4
O cavaleiro atacou usando lança
Derrotado pelo ninja. Vidas: 5

> 3
O ninja atacou usando shuriken
Venceu o guerreiro. Vitórias: 5

> 2
O monge atacou usando artes marciais
Venceu o monge. Vitórias: 6

> 1
O mago atacou usando magia
Derrotado pelo mago. Vidas: 4

> 2
O monge atacou usando artes marciais
Derrotado pelo mago. Vidas: 3

> 2
O monge atacou usando artes marciais
Derrotado pelo ninja. Vidas: 2

> 3
O ninja atacou usando shuriken
Derrotado pelo ninja. Vidas: 1

> 4
O cavaleiro atacou usando lança
Derrotado pelo gladiador. Vidas: 0

Vitórias: 6
Derrotas: 10
Saldo de -4 vitórias - Nível de Ferro
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

- Versão 1 
```
node ./script.js
Olá herói! Qual o seu nome? 

Anônimo, você tem 0 de XP e está no nível de Ferro. 
        Você quer lutar para obter mais XP? 
Enter = Sim
n + Enter = Não
 
lutando...
Você tem 500 de XP
Continuar lutando?
 
lutando...
Você tem 1000 de XP
Continuar lutando?
 
lutando...
Você tem 1500 de XP
Continuar lutando?
n

O Herói de nome Anônimo está no nível de Bronze.
```
- Versão 2
```
node ./script2.js
Olá herói! Qual o seu nome? Malone

Malone, você tem 3 vidas e 0 de XP (nível de Ferro). 
        Você pode obter mais XP no par ou impar

        Escolher par   -> 0, 2 ou 4
        Escolher Impar -> 1, 3 ou 5
        Qualquer outra tecla para encerrar.

Escolha -> 1
Escolhi 2. Você venceu! XP: 500

Escolha -> 2
Escolhi 1. Você perdeu! Vidas: 2

Escolha -> 1
Escolhi 1. Você perdeu! Vidas: 1

Escolha -> 0
Escolhi 3. Você perdeu! Vidas: 0

Vitórias: 1
Derrotas: 3
XP: 500

O Herói de nome Malone está no nível de Ferro.
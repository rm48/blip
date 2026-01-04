# Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

- Versão 1
``` 
node ./script.js
O Herói tem saldo de 21 vitórias e está no nível de Prata
```

- Versão 2
```
node ./script2.js
Olá herói! Qual o seu nome? 

Anônimo, você tem 10 vidas e está no nível de Ferro. 
        Você pode subir de nível no par ou impar

        Escolher par   -> 0, 2 ou 4
        Escolher Impar -> 1, 3 ou 5
        Qualquer outra tecla para encerrar.

Escolha -> 
Escolhi 1. Você perdeu! Vidas: 9

. . .

Escolha -> 
Escolhi 1. Você perdeu! Vidas: 3

Escolha -> 
Escolhi 0. Você venceu! Vitórias: 7

Escolha -> 
Escolhi 0. Você venceu! Vitórias: 8

Escolha -> 
Escolhi 0. Você venceu! Vitórias: 9
3 seguidas! Multiplicando vidas e vitorias por 2!

. . .

Escolha -> 
Escolhi 3. Você perdeu! Vidas: 3

Escolha -> 
Escolhi 4. Você venceu! Vitórias: 22

Escolha -> 
Escolhi 2. Você venceu! Vitórias: 23

Escolha -> 
Escolhi 2. Você venceu! Vitórias: 24
3 seguidas! Multiplicando vidas e vitorias por 2!

Escolha -> 
Escolhi 0. Você venceu! Vitórias: 49

Escolha -> 
Escolhi 2. Você venceu! Vitórias: 50

Escolha -> 
Escolhi 4. Você venceu! Vitórias: 51

Escolha -> 
Escolhi 0. Você venceu! Vitórias: 52
3 seguidas! Multiplicando vidas e vitorias por 2!

...

Escolha -> 
Escolhi 3. Você perdeu! Vidas: 1

Escolha -> 
Escolhi 2. Você venceu! Vitórias: 107

Escolha -> 
Escolhi 5. Você perdeu! Vidas: 0

Vitórias: 107
Derrotas: 22
O Herói tem saldo de 85 vitórias e está no nível de Diamante
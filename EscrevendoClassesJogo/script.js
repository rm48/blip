class Heroi {
    constructor( nome, idade, tipo ){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque = ""
        if(this.tipo == "guerreiro"){
            ataque = "espada";
        } else if (this.tipo == "mago"){
            ataque = "magia";
        } else if (this.tipo == "monge"){
            ataque = "artes marciais";
        } else if (this.tipo == "ninja"){
            ataque = "shuriken";
        } 
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
    apresentar(){
        console.log(`Seu nome é ${this.nome} e tem ${this.idade} anos.`);
    }
}

let heroi = new Heroi("Fumashu", 27, "ninja");

heroi.atacar();
heroi.apresentar();
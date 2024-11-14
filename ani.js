//Definindo a classe animal
class Animal {
    //Método construtor serve para inicializar as propriedades do objeto
    constructor(raça,cor){
        this.raça = raça; // A propriedade 'modelo' será passada quando criarmos o carro
        this.cor = cor; //A propriedade 'cor' será passada quando criarmos o carro
    }

    //Metódo para mostrar as informações do aniaml
    mostrarInformacoes() {
        console.log(`O animal é um ${this.raça} e a cor dele é ${this.cor}.`);
    }
}

//Criando um novo objeto (instância)de Animal
let Animaldaana = new Animal ("Cachorro", "amarelo");
let Animaldamileni = new Animal ("Gato", "branco")

//Chamando o método para mostrar as informações do carro
Animaldaana.mostrarInformacoes();
Animaldamileni.mostrarInformacoes();
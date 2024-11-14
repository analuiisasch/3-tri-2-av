//Definindo a classe carro
class Carro {
    //Método construtor serve para inicializar as propriedades do objeto
    constructor(modelo,cor){
        this.modelo = modelo; // A propriedade 'modelo' será passada quando criarmos o carro
        this.carro = cor; //A propriedade 'cor' será passada quando criarmos o carro
        this.potencia = this.potencia;
    }

    //Metódo para mostrar as informações do carro
    mostrarInformacoes() {
        console.log(`O carro é um ${this.modelo} e a cor dele é ${this.cor} a potência dele em cc é ${this.potencia}`);
    }
}

//Criando um novo objeto (instância)de Carro
let meuCarro = new Carro("Fusca", "azul", "200");
let carrodoFelipe = new Carro ("Fiat 147", "amarelo", "300")
//Chamando o método para mostrar as informações do carro
meuCarro.mostrarInformacoes();
carrodoFelipe.mostrarInformacoes();

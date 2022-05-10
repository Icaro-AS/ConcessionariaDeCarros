import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

/* --- criar carros --- */
let carro1 = new Carro('Fusca', 2)
let carro2 = new Carro('Uno', 4)
let carro3 = new Carro('Gol', 2)

/* --- montar a lista de carros da concessionaria ---*/
let listaDeCarros: Array<Carro> = [carro1, carro2, carro3]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* --- exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())

let pessoa: Pessoa = new Pessoa('Joãozinho','Fusca');

concessionaria.mostrarListaDeCarros().map((carro:Carro) => {
     if(carro ['modelo']== pessoa.dizerCarroPreferido()){
           pessoa .comprarCarro(carro)
     }
})

console.log(pessoa.dizerCarroQueTem())
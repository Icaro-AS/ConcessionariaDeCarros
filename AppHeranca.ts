import Veiculo from "./Veiculo"
import Moto from "./Moto"
import Carro from "./Carro"
import Concessionaria from "./Concessionaria"


let moto = new Moto()

//------------------------------//
console.log('--------------------------\n')
console.log(moto)
moto.acelerar()
moto.acelerar()
console.log(moto)

//------------------------------//console.log('--------------------------\n')
console.log('--------------------------\n')
let carro = new Carro('Fusca',2)
console.log(carro)
carro.parar()
console.log(carro)

//--------------------------------//
console.log('--------------------------\n')
let veiculo: Veiculo = new Carro("Fusca",2) //Polimorfismo, variável do tipo base Veículo tendo o comportamento especializado do tipo da classe derivada Carro.
console.log(veiculo)
veiculo.acelerar
console.log(veiculo)


//--------------------------------//
//--Outro Exemplo de Polomorfismo//
console.log('--------------------------\n')

console.log(moto)
moto.acelerar()
moto.acelerar()
console.log(moto)

let veiculo2: Veiculo = new Veiculo();
console.log(veiculo2)
veiculo2.acelerar()
console.log(veiculo2)

let veiculo3: Veiculo = new Moto()
console.log(veiculo3)
veiculo3.acelerar()
veiculo3.velocidadeAtual()


//--------------------------------//
//--Outro Exemplo de Interface//
console.log('--------------------------\n')
let concessionaria =  new Concessionaria('Avenida 2', []);
console.log(concessionaria.retornaData())

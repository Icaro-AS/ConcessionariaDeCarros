import Veiculo from "./Veiculo";

export default class Moto extends Veiculo{

    public acelerar(): void {
        let velocidade = this.velocidade + 20
        console.log('Veículo:' + velocidade )
    }

}

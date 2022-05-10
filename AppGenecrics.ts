import Carro from './Carro'
import DaoGenerico  from './DaoGenerico'
import Concessionaria from './Concessionaria'


let carro: Carro = new Carro('Fusca',2);
let dao1: DaoGenerico<Carro> = new DaoGenerico<Carro>();
let concessionaria: Concessionaria = new Concessionaria('',[]);
let dao2: DaoGenerico<Concessionaria> = new DaoGenerico<Concessionaria>(); 

dao1.atualizar(carro);
dao2.atualizar(concessionaria);

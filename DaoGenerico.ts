import DaoInterface from "./DaoInterface";

export default class DaoGenerico<T> implements DaoInterface<T>{

     nomeTabela: string
    
    inserir(object: T) : boolean 
    {
        console.log('Insert')
        return true
    }
    
    atualizar(object: T): boolean {
        console.log('update')
        return true
    }

    remover(id: number): T{
        console.log('delete')
        return Object()
    }

    selecionar(id: number): T{
        console.log('select where')
        return Object()
    }

    selecionarTodos(): T
    {
        console.log('select all')
        return Object()
    }

}
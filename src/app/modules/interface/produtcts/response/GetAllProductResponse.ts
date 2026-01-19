export interface GetAllProductsResponse {
    _id: string,
    nome:string,
    descricao:string,
    estoqueAtual:number,
    estoqueMinimo:number,
    preco:string,
    categoria:{
        id: string,
        nameCategoria: string 

    }


}
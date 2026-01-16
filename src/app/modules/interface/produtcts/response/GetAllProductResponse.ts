export interface GetAllProductsResponse {
    id: string,
    nome:string,
    descricao:string,
    estoqueAtual:number,
    preco:string,
    categoria:{
        id: string,
        nameCategoria: string 

    }


}
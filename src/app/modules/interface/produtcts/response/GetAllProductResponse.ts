export interface GetAllProductsResponse {
    id: string,
    nameProduto:string,
    descricao:string,
    quantidade:number,
    preco:string,
    categoria:{
        id: string,
        nameCategoria: string 

    }


}
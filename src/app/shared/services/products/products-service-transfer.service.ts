import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { GetAllProductsResponse } from '../../../modules/interface/produtcts/response/GetAllProductResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceTransferService {

 public productDatasEmitter$ = new BehaviorSubject<Array<GetAllProductsResponse> | null>(null);
 public productDatas: Array<GetAllProductsResponse> = [];

 setProductsDatas(products: Array<GetAllProductsResponse>):void {
  this.productDatasEmitter$.next(products);
  this.getPrdoutsDatas();

 }

 getPrdoutsDatas() { 
  this.productDatasEmitter$
    .pipe(
      take(1),

      map((data)=>data?.filter((pdt:any) => pdt.quantidade > 0))

    )

    .subscribe({
        next: (response)=>{
          if(response){
            this.productDatas = response;
          }
        }
      }
        
      );

    return this.productDatas
  }


}

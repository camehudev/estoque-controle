import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetAllProductsResponse } from '../../../../interface/produtcts/response/GetAllProductResponse';
import { ProductsService } from '../../../../../service/products/products.service';
import { ProductsServiceTransferService } from '../../../../../shared/services/products/products-service-transfer.service';
import { Subject, takeUntil } from 'rxjs';
import { ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

   constructor(
    private estoqueService:ProductsService,
    private productsService: ProductsService,
    private productsServiceTransferService: ProductsServiceTransferService
  ) {}

  public productList : Array<GetAllProductsResponse> = [];

  getProductDatas(): void{
    this.productsService.getAllProducts()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response)=>{

        if(response.length){
          this.productList = response;          
          this.productsServiceTransferService.setProductsDatas(this.productList);
        }

      },
      error:(error)=>{
        console.log(error)
      }
    })



  }  


   chartData!: ChartData<'bar'>;
   isCharData: boolean = false;

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#303030ff',
          font: {
            size: 12
          }
        }
      }
    }
  };


  carregarGrafico() {
    this.estoqueService.getAllProducts().subscribe({
      next: (produtos) =>
        { 
           if(produtos){
             this.montarGrafico(produtos);
             this.isCharData = true;    
           }        
      },
      
      error: (err) => console.error(err)
    });
  }

  montarGrafico(produtos: GetAllProductsResponse[]) {
    this.chartData = {
      labels: produtos.map(p => p?.nome),
      datasets: [
        {
          label: 'Estoque baixo',
          data: produtos.map(p => p?.estoqueAtual),
          backgroundColor: '#ef4444'
        }
      ]
    };
  }

  ngOnInit(): void {
    this.getProductDatas();  
    this.carregarGrafico();  
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetAllProductsResponse } from '../../../../interface/produtcts/response/GetAllProductResponse';
import { ProductsService } from '../../../../../service/products/products.service';
import { ProductsServiceTransferService } from '../../../../../shared/services/products/products-service-transfer.service';
import { Subject, takeUntil } from 'rxjs';
import { ChartData, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  public pdrDatas: Array<GetAllProductsResponse> =[];
  public productListLow : Array<GetAllProductsResponse> = [];

   constructor(
    private estoqueService:ProductsService,
    private productsService: ProductsService,
    private productsServiceTransferService: ProductsServiceTransferService,
    private router:Router,

  ) {}

  

  getProductDatas(): void{
    this.productsService.getAllProducts()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response)=>{

        if(response.length){
          this.pdrDatas = response;    
          console.log(response)      
          this.productsServiceTransferService.setProductsDatas(this.pdrDatas);
        }

      },
      error:(error)=>{
        console.log(error)
      }
    })

  }  


  getProductDataslow(): void{
    this.productsService.getAllProductslOW()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response)=>{

        if(response.length){
          this.productListLow = response;    
          
        }

      },
      error:(error)=>{
        console.log(error)
      }
    })

  } 


  getAllProductDatas(): void{
    this.productsService.getAllProducts()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response)=>{

        if(response.length){
          this.pdrDatas = response;    
          console.log(response); 
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
    this.estoqueService.getAllProductslOW().subscribe({
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

  getServiceProductDatas(){
    const productLoaded=  this.productsServiceTransferService.getPrdoutsDatas();

    if(productLoaded.length > 0){
      this.pdrDatas = productLoaded;
      console.log(this.pdrDatas);

    }else{

      this.getAllProductDatas();

    }

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

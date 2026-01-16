import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { enviroment } from '../../../enviroments/enviroment';
import { map, Observable } from 'rxjs';
import { GetAllProductsResponse } from '../../modules/interface/produtcts/response/GetAllProductResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = enviroment.API_URL;
  private JWT_TOKEN = this.cookie.get('token');

  private getHttpOptions() {
  const token = this.JWT_TOKEN; // ou localStorage.getItem('token')

  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    })
  };
}


  constructor(
    private http: HttpClient,
    private cookie: CookieService,



  ) { }


  getAllProducts(): Observable<GetAllProductsResponse[]> {
  return this.http
    .get<GetAllProductsResponse[]>(
      `${this.API_URL}/api/v1/produtos/list`,this.getHttpOptions()
    )
    .pipe(
      map((products) =>
        products.filter(product => product.estoqueAtual <= 10 )
      )
    );
}

}

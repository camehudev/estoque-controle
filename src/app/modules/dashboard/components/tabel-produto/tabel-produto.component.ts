import { Component, Input } from '@angular/core';
import { GetAllProductsResponse } from '../../../interface/produtcts/response/GetAllProductResponse';

@Component({
  selector: 'app-tabel-produto',
  templateUrl: './tabel-produto.component.html',
  styleUrl: './tabel-produto.component.scss'
})
export class TabelProdutoComponent {

  @Input() pdrDatas: Array<GetAllProductsResponse> = [];

}

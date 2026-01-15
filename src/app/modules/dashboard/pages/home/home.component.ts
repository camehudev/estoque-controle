import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',  
  standalone:false
})
export class HomeComponent {


  barChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Fev', 'Mar'],
    datasets: [
      { data: [100, 200, 150], label: 'Vendas' }
    ]
  };

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrl: './grafico-barra.component.scss'
})
export class GraficoBarraComponent {

  // 📥 ENTRADAS
  @Input() data!: ChartData;
  @Input() type: ChartType = 'bar';
  @Input() options: ChartOptions = {
    responsive: true
  };

  // 📤 SAÍDA (eventos)
  @Output() chartClick = new EventEmitter<any>();

}

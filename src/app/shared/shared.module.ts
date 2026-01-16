import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts'; // 👈 AQUI

import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';

@NgModule({
  declarations: [
    SideBarComponent,
    MenuBarComponent,
    CabecalhoComponent,
    GraficoBarraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BaseChartDirective // 👈 ESSENCIAL
  ],
  exports: [
    SideBarComponent,
    MenuBarComponent,
    CabecalhoComponent,
    GraficoBarraComponent
  ]
})
export class SharedModule {}

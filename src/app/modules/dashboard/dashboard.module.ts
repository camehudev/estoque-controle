import { BaseChartDirective } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DASHBOARD_ROUTES } from './dashboard.routing';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './pages/products/products/products.component';





@NgModule({  
declarations: [
    DashboardComponent,
    HomeComponent,
    ProductsComponent
     
  ],
  imports: [
    CommonModule,  
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BaseChartDirective,
    SharedModule,  
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],

  providers:[
    CookieService
  ]
})

export class DashboardModule { }

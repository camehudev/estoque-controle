import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from './dashboard.routing';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
     HomeComponent,
     
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    
  
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],

  providers:[
    CookieService
  ]
})

export class DashboardModule { }

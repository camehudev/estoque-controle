import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MenuBarComponent,
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],

  exports:[
    SideBarComponent,
    MenuBarComponent,
    CabecalhoComponent
  ]
})
export class SharedModule { }

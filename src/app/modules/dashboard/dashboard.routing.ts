import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DashboardComponent } from "./dashboard.component";
import { ProductsComponent } from "./pages/products/products/products.component";


export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' }, 
      { path: 'home', component: HomeComponent },
      { path: 'produtos', component: ProductsComponent },
    ]
  }
];

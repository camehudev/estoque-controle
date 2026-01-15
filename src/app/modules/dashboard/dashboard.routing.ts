import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DashboardComponent } from "./dashboard.component";
import { LoginComponent } from "../../pages/login/login.component";


export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
   }, 
   
   {
    path: 'home',
    component: HomeComponent
   }, 

    {
        path:'dashboard',
        component: DashboardComponent
    }

]
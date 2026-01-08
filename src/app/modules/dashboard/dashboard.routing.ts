import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DashboardComponent } from "./dashboard.component";


export const DASHBOARD_ROUTES: Routes = [
   {
    path: '',
    component: HomeComponent
   }, 

    {
        path:'dashboard',
        component: DashboardComponent
    }

]
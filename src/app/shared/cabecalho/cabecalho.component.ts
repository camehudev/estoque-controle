import { Component } from '@angular/core';
import { ClockServiceService } from '../../service/clock-service.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
  constructor( 
    public clockService: ClockServiceService,
    private router: Router,
    private cookie: CookieService
  
  ){  

  }

  handleLogged(){
    this.cookie.delete('token')
    void this.router.navigate(['/login'])
  }



}

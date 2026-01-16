import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { SignupUser } from '../../modules/interface/SignupUser';
import { Observable } from 'rxjs';
import { SignupUserResponse } from '../../modules/interface/SignupUserResponse';
import { AuthRequest } from '../auth/AuthRequest';
import { AuthResponse } from '../auth/AuthResponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = enviroment.API_URL;

  constructor( private http: HttpClient, private cookie: CookieService ){}

  signupUser(requestDatas: SignupUser): Observable<SignupUserResponse>{   
    return this.http.post<SignupUserResponse>(`${this.API_URL}/api/v1/usuario/nUsuario`,requestDatas)

  }

  authUser(authRsquestDatas: AuthRequest): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.API_URL}/api/v1/usuario/search`, authRsquestDatas)

  }

  isLoggedIn():boolean{

    // Verificar se o usuario possui um token ou cookie
    const JWT_token  = this.cookie.get('token');
    return JWT_token ? true: false;
    
  }
  
}








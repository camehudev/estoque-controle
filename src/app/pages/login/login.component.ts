
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { SignupUserRequest } from '../../modules/interface/SignupUserRequest';
import { AuthRequest } from '../../service/auth/AuthRequest';
import { AuthResponse } from './../../service/auth/AuthResponse';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone:false,
})
export class LoginComponent {
  isLoginCard: boolean = true;
  isSuccess: boolean = false;
  isError: boolean = false;
  isSuccessCreateUser: boolean = false;
  isErrorCreateUser:boolean = false;
  usuarioLogged: string = '';

  loginForm = this.formBuilder.group({
    userName:['', Validators.required],
    passUser:['',Validators.required]
  })

  sigUpForm = this.formBuilder.group({
    userName:['',Validators.required],
    email:['', Validators.required],
    passUser:['',Validators.required],
    tipoUser:['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private cookService: CookieService,
    private router : Router

  ){
    this.sigUpForm.reset();

  }

  
  onSubmitLogin(): void{
    if (this.loginForm.value && this.loginForm.valid){
      this.userService.authUser(this.loginForm.value as AuthRequest).subscribe({
        next: (response: AuthResponse)=>{
          console.log(response)
             if(response){
                
              this.isSuccess = true;         
              this.cookService.set( "token", response?.token);
              this.usuarioLogged = response?.name;                      
              this.loginForm.reset();
              this.router.navigate(['/dashboard'])
             }
        },

        error:(error)=>{
          this.isError =true;
          console.log(error)
        }
      })
    }

  }

  onSubmitSigUp():void {
    if (this.sigUpForm. value && this.sigUpForm.valid){
      this.userService.signupUser(this.sigUpForm.value as unknown as SignupUserRequest).subscribe({

        next: (response)=>{
          if(response){
            this.isSuccessCreateUser = true;
            this.sigUpForm.reset();
            

          }

        },

        error:(error)=>{
          this.isErrorCreateUser = true;
          console.log(error)
        }

      })
    }
    
  }

}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone:false,
})
export class LoginComponent {
  isLoginCard: boolean = true;

  loginForm = this.formBuilder.group({
    email:['', Validators.required],
    password:['',Validators.required]
  })

  sigUpForm = this.formBuilder.group({
    name:['',Validators.required],
    email:['', Validators.required],
    password:['',Validators.required]
  })

  constructor(private formBuilder: FormBuilder){

  }

  onSubmitLogin(): void{
    console.log(this.loginForm.value)

  }

  onSubmitSigUp():void {
    console.log(this.sigUpForm.value);
  }

}

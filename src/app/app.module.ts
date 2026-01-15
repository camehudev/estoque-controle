import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './pages/login/login.component';

import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  
    
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    CookieService,
    provideCharts(withDefaultRegisterables()),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

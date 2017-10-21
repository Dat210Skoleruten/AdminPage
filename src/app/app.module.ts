import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { KommuneFormComponent } from './kommune-form/kommune-form.component';

import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { KommuneService } from './services/kommune/kommune.service';
import { AuthGuard } from './auth-guard/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BsNavbarComponent,
    KommuneFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'kommuner/new',
        component: KommuneFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'kommuner/:id',
        component: KommuneFormComponent,
        canActivate: [AuthGuard]
      },
    ])
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    KommuneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

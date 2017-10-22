import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public auth: AuthService) { }

  login() {
    this.auth.login(this.email, this.password);
  }

  register() {
    this.auth.register(this.email, this.password);
  }
}

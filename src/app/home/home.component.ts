import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appUser: AppUser;

  constructor(
    private auth: AuthService) {
    auth.appUser$.subscribe(AppUser => this.appUser = AppUser);
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit() {
  }
}
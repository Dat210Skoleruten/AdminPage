import { AppUser } from './../models/app-user';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
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

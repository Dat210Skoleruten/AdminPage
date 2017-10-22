import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private userService: UserService,
    router: Router) {
    auth.user.subscribe(user => {
      if (!user) {
        return;
      }

      const returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) {
        return;
      }

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}

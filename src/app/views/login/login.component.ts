import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { LoginResult } from '../../models/login-result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  authService: AuthService;
  router: Router;

  showErrorMessage: boolean;
  username: string;
  password: string;

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  login() {
    this.authService.login(this.username, this.password).subscribe((resp: LoginResult) => {
      if (resp.success) {
          localStorage.setItem('auth_id', resp.token);
          this.router.navigateByUrl('dashboard');
      } else {
          this.showErrorMessage = true;
      }
    });
  }
}

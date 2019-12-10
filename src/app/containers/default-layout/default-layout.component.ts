import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  public router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    const authToken = localStorage.getItem('auth_id');

    if (!authToken) {
      this.router.navigateByUrl('login');
    }
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    // TODO: Logout user
    this.router.navigateByUrl('login');
    localStorage.removeItem('auth_id');
  }
}

import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AccountService } from "../_services";

@Component({ templateUrl: "login.component.html" })
export class LoginComponent {
  constructor(private router: Router, private accountService: AccountService) {
    // redirect to home if already logged in
    if (this.accountService.accountValue) {
      this.router.navigate(["/"]);
    }
  }

  login() {
    this.accountService.login();
  }

  share() {
    this.accountService.share();
  }
}

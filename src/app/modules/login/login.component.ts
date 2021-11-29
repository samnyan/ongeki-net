import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error?: string;
  appIdName = environment.appIdName;
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private route: Router,
  ) {}

  ngOnInit(): void {
    if (this.auth.currentUserValue != null) {
      this.route.navigate(['aimeList']);
    }
  }

  login() {
    this.route.navigate(['aimeList']);
    return true;
  }
}

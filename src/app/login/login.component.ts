import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { CommonModule } from '@angular/common';
import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HoverDirective, CommonModule, EmailvalidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = ''
  password: string = ''

  constructor(private route:Router, private loginService: LoginService) { }

  login() {
    if (this.loginService.login(this.email, this.password)) {
      this.route.navigate(['/rooms'])
    }
  }

}

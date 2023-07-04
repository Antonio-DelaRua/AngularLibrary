import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  error: string = '';
  constructor(private authService: AuthService) { }

ngOnInit() {
  }
  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.user_id);
        // Redirigir a la página principal o realizar otras acciones necesarias
      },
      error => {
        this.error = error.error.non_field_errors[0];
      }
    );
  }

}

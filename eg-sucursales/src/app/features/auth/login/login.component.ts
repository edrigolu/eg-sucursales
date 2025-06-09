import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private message: NzMessageService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.message.warning('Por favor, complete todos los campos correctamente.');
      return;
    }

    this.isLoading = true;

    const loginData = this.loginForm.value;

    this.http.post<any>('https://localhost:5001/api/auth/login', loginData)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.message.success('Inicio de sesión exitoso');
          this.router.navigate(['/dashboard']); // Cambia a la ruta protegida que uses
        },
        error: (err) => {
          this.message.error(err.error?.mensaje || 'Credenciales incorrectas');
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }
}
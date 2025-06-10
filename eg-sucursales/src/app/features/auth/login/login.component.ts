import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit(): void {
    console.log('onSubmit ejecutado');
    if (this.loginForm.invalid) {
      this.message.warning(
        'Por favor, complete todos los campos correctamente.'
      );
      return;
    }

    const loginData = this.loginForm.value;
    console.log('Login data a enviar:', loginData);

    this.isLoading = true;

    this.authService.login(loginData).subscribe({
      next: (res) => {
        console.log('Respuesta del backend:', res.token);
        this.message.success('Inicio de sesión exitoso');
        this.router.navigate(['/sucursales']);
      },
      error: (err) => {
        //console.error('Error en login:', err);
        this.message.error(err.error?.mensaje || 'Credenciales incorrectas');
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  logSubmit() {
    console.log('submit del formulario recibido');
  }
}

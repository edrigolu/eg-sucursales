import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../../../services/auth.service'; // Asegúrate que la ruta sea correcta

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
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(): void {

    console.log('onSubmit ejecutado'); // <- para verificar
    
    if (this.loginForm.invalid) {
      this.message.warning('Por favor, complete todos los campos correctamente.');
      return;
    }

    this.isLoading = true;

    const loginData = this.loginForm.value;

    this.authService.login(loginData).subscribe({
      next: () => {
        this.message.success('Inicio de sesión exitoso');
        this.router.navigate(['/sucursales']);
      },
      error: (err) => {
        this.message.error(err.error?.mensaje || 'Credenciales incorrectas');
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  logSubmit() {
  console.log('submit del formulario recibido');
}


  

}

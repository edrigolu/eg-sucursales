import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registro-usuario',
  standalone: false,
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})

export class RegistroUsuarioComponent implements OnInit {
  registroForm!: FormGroup;
  roles: { id: number; nombre: string }[] = [
    { id: 1, nombre: 'Admin' },
    { id: 2, nombre: 'Usuario' }
  ];

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
      rol: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.registroForm.invalid) {
      this.message.warning('Complete correctamente el formulario.');
      return;
    }

    const { nombre, correo, clave, rol } = this.registroForm.value;

    this.usuarioService.registrarUsuario({
      nombreCompleto: nombre,
      correo,
      clave,
      idRol: rol
    }).subscribe({
      next: () => {
        this.message.success('Usuario registrado exitosamente');
        this.router.navigate(['/sucursales']);
      },
      error: err => {
        console.error(err);
        this.message.error('Ocurrió un error al registrar el usuario');
      }
    });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './features/auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'sucursales',
    loadChildren: () =>
      import('./sucursales/sucursales.module').then(m => m.SucursalesModule),
    canActivate: [AuthGuard],
  }

  // {
  //   path: 'registrar-usuario',
  //   component: RegistroUsuarioComponent,
  //   canActivate: [AuthGuard], // Ya definido antes
  //   data: { roles: ['Admin'] }, // Protección adicional opcional por rol
  // },
  // {
  //   path: 'usuarios',
  //   loadChildren: () =>
  //     import('./features/usuarios/usuarios.module').then(
  //       (m) => m.UsuariosModule
  //     ),
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [RegistroUsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsuariosRoutingModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzMessageModule
  ]
})
export class UsuariosModule {}

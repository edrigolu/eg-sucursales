import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { SucursalesComponent } from './sucursales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    SucursalesComponent
  ],
  imports: [
    CommonModule,
    SucursalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule
  ]
})
export class SucursalesModule { }

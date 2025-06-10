import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormControlComponent, NzFormItemComponent, NzFormLabelComponent, NzFormModule } from 'ng-zorro-antd/form';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SucursalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    NzFormControlComponent,
    NzFormLabelComponent,
    NzFormItemComponent,
    NzTableModule,
    NzButtonModule,
    NzSwitchModule,
    NzFormModule,
    NzFlexModule
    
  ],
})
export class SucursalesModule {}

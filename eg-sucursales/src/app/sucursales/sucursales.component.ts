import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../services/sucursal.service';
import { MonedaService } from '../services/moneda.service';
import { Sucursal } from '../models/sucursal.model';
import { Moneda } from '../models/moneda.model';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css'],
  imports: [],
})
export class SucursalesComponent implements OnInit {
  sucursales: Sucursal[] = [];
  monedas: Moneda[] = [];
  selectedSucursal: Sucursal | null = null;
  showForm: boolean = false;

  constructor(
    private sucursalService: SucursalService,
    private monedaService: MonedaService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.loadSucursales();
    this.loadMonedas();
  }

  loadSucursales(): void {
    this.sucursalService.getSucursales().subscribe(
      (data) => {
        this.sucursales = data;
      },
      (error) => {
        this.message.error('Error al cargar las sucursales');
      }
    );
  }

  loadMonedas(): void {
    this.monedaService.getMonedas().subscribe((data) => {
      this.monedas = data;
    });
  }

  openCreateModal(): void {
    this.selectedSucursal = null; // No hay sucursal seleccionada para crear
    this.showForm = true;
  }

  openEditModal(sucursal: Sucursal): void {
    this.selectedSucursal = sucursal;
    this.showForm = true;
  }

  onSave(sucursal: Sucursal, id: number): void {
    if (this.selectedSucursal) {
      this.sucursalService.updateSucursal(id, sucursal).subscribe(() => {
        this.loadSucursales();
        this.showForm = false;
      });
    } else {
      this.sucursalService.createSucursal(sucursal).subscribe(() => {
        this.loadSucursales();
        this.showForm = false;
      });
    }
  }

  onCancel(): void {
    this.showForm = false;
  }

  deleteSucursal(id: number): void {
    this.sucursalService.deleteSucursal(id).subscribe(() => {
      this.loadSucursales();
    });
  }
}

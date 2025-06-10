export interface Sucursal {
  id?: number;              // id es opcional para la creación
  codigo: string;
  descripcion: string;
  direccion: string;
  identificacion: string;
  monedaId: number;         // Moneda seleccionada por el usuario
}
export interface IReunion {
  id?: number;
  nombre: string;
  fecha: Date;
  hora: string;
  duracion: number;
  participantes: Array<string>;
  detalle: string;
  }
export class Reunion {
  constructor(
    public id?: number,
    public nombre?: string,
    public fecha?: Date,
    public hora?: string,
    public duracion?: number,
    public participantes?: Array<string>,
    public detalle?: string
  ) {}
}



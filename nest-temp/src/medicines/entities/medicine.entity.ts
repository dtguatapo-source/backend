
import { EstadoMedicamento } from '../dto/create-medicine.dto.js';

export class Medicine {
  id!: string;
  name!: string;
  laboratory!: string;
  category?: string;
  description!: string;
  keywords?: string;
  stock!: number;
  purchasePrice!: number;
  salePrice!: number;
  status!: EstadoMedicamento;
}
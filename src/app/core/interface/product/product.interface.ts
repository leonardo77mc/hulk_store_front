/**
 * Interfaz para referenciar un producto.
 * @interface IProductInterface
 * @author Leonardo Castillo
 */
export interface IProductInterface {
  article: string;
  createAt: string;
  id: number;
  lote: string;
  measure: string;
  price: number;
  providers: string;
  purchases: { createAt: string, id: number, quantity: number }[]
  reference: string;
  stock: number;
  store: boolean;
}

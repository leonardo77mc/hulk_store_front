/**
 * NameSemace conlas accciones relacionadas al producto
 * @author Leonardo Castillo
 */
export namespace ProductActions {

  /** Accion para obtener todos los prductos */
  export class AllProduct {
    static readonly type = '[Product] Get all product';
  }

  /** Guardar una compra */
  export class SavePurchase {
    static readonly type = '[Product] Save purchase';
    constructor(public payload: {lote: string, quantity: number}) {
    }
  }

  /** Obtener un producto por el lote */
  export class GetProductByLote {
    static readonly type = '[Product] Get Product by lote';
    constructor(public payload: string) {
    }
  }
}

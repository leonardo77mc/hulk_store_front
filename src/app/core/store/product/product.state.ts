import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {ProductActions} from "./product.actions";
import {tap} from "rxjs";
import {IProductInterface} from "../../interface/product/product.interface";


interface ProductStateModel {
  productList: IProductInterface[];
  product: IProductInterface
}

const defaults = {
  productList: [],
  products: {}
}

@State({
  defaults,
  name: 'ProductState'
})
@Injectable({
  providedIn: 'root'
})
/**
 * Clase para manejar el estado del proeducto
 * @author Leonardo Castillo
 * @class ProductState
 */
export class ProductState {

  @Selector()
  static getAllProduct(state: ProductStateModel): any[] {
    return state.productList;
  }

  @Selector()
  static getProduct(state: ProductStateModel): any {
    return state.product;
  }

  constructor(private readonly _productService: ProductService) {
  }

  @Action(ProductActions.AllProduct)
  allProduct(ctx: StateContext<ProductStateModel>) {
    return this._productService.allProduct()
      .pipe(
        tap((success) => {
          ctx.patchState({productList: success})
        })
      )
  }

  @Action(ProductActions.SavePurchase)
  savePurchase(
    ctx: StateContext<ProductStateModel>,
    action: ProductActions.SavePurchase
  ) {
    return this._productService.savePurchase(action.payload)
      .pipe(
        tap((success) => {
          success['store'] = true;
          ctx.patchState({product: success});
        }));
  }

  @Action(ProductActions.GetProductByLote)
  getProductByLote(
    ctx: StateContext<ProductStateModel>,
    action: ProductActions.GetProductByLote
  ) {
     return this._productService.getAllPurchaseByProduct(action.payload)
       .pipe(
         tap((success) => {
           success['store'] = false;
           ctx.patchState({product: success});
         }));
  }
}

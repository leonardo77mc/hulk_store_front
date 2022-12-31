import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Store} from "@ngxs/store";
import {ProductActions} from "../../../core/store/product/product.actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public quantity: number;
  public product: any;

  constructor(
    private readonly _store: Store,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.quantity = 1;
    this.product = this.data;
  }

  /**
   * Metodo para confirmar la venta del producto
   * @return {void}
   */
  tosell(): void {
      this._store.dispatch(new ProductActions.SavePurchase({
        lote: this.product?.lote,
        quantity: this.quantity
      }));
  }

  /**
   * Metodo para agregar o remover un producto al carro
   * @param {any} event
   */
  add(event: any) {
    const id = event.target.id;
    if (id == 'add') {
      this.quantity++;
    } else if (id == 'remove') {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }
  }
}

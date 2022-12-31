import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductState} from "../../../core/store/product/product.state";
import {Actions, ofActionDispatched, Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {ProductActions} from "../../../core/store/product/product.actions";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CartComponent} from "../cart/cart.component";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {IProductInterface} from "../../../core/interface/product/product.interface";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {

  public productList: IProductInterface[] = [];
  public productListSelect: IProductInterface[] = [];

  private model: MatDialogRef<any>;

  constructor(
    public _dialog: MatDialog,
    private readonly _router: Router,
    private readonly _store: Store) {
  }

  @Select(ProductState.getAllProduct) $productList: Observable<any[]>;
  @Select(ProductState.getProduct) $product: Observable<any>;
  selected: any;

  ngOnInit(): void {
    this._store.dispatch(ProductActions.AllProduct);
    this.$productList.subscribe((list) => {
      this.productListSelect = [];
      this.productList = [];
      let listMap = new Map();
      for (let item of list) {
        listMap.set(`${item.article}`, item);
      }
      listMap.forEach((value) => {
        this.productListSelect.push(value);
      });
      this.productList = list;
    });

    this.$product.subscribe(product => {
      if (product && product['store']) {
        this._store.dispatch(ProductActions.AllProduct);
        this.model.close();
        Swal.fire(
          'Compra exitosa',
          '',
          'success'
        );
      }
    });
  }

  /**
   * Metodo para seleccionar un articulo para la venta.
   * @param {IProductInterface} item
   */
  selectArticle(item: IProductInterface): void {
    this.model = this._dialog.open(CartComponent, {data: item});
  }

  /**
   * Metodo para ver el reporte del lote del producto vendido.
   * @param product
   */
  seeReport(product: IProductInterface): void {
    this._router.navigate(['kardex', {lote: product?.lote}]);
  }

  ngOnDestroy(): void {
    this.$product.subscribe().unsubscribe();
    this.$productList.subscribe().unsubscribe();
  }
}

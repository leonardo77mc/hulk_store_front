import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductState} from "../../../core/store/product/product.state";
import {Observable} from "rxjs";
import {ProductActions} from "../../../core/store/product/product.actions";
import {ActivatedRoute} from "@angular/router";
import {IProductInterface} from "../../../core/interface/product/product.interface";

@Component({
  selector: 'app-kardex-system',
  templateUrl: './kardex-system.component.html',
  styleUrls: ['./kardex-system.component.scss']
})
export class KardexSystemComponent implements OnInit {

  private lote: string;
  public product: IProductInterface;

  @Select(ProductState.getProduct) $product: Observable<any>;

  constructor(
    private readonly _activateRouter: ActivatedRoute,
    private readonly _store: Store) {
  }

  ngOnInit(): void {
    this.lote = this._activateRouter.snapshot.params['lote'];
    this._store.dispatch(new ProductActions.GetProductByLote(this.lote));
    this.$product.subscribe(product => {
      if (product && !product['store']) {
        this.product = product;
        console.log(product);
      }
    });
  }

}

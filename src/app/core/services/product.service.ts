import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProductInterface} from "../interface/product/product.interface";


@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para manejar datos relacionados a los productos.
 * @author Leonardo Castillo
 */
export class ProductService {

  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private _http: HttpClient) {
  }

  allProduct(): Observable<IProductInterface[]> {
    return this._http.get<IProductInterface[]>('http://localhost:3000/api/product/allProduct', {headers: this.header});
  }

  savePurchase(param: { lote: string, quantity: number }): Observable<IProductInterface> {
    return this._http.post<IProductInterface>('http://localhost:3000/api/product/savePurchase', param, {headers: this.header});
  }

  getAllPurchaseByProduct(lote: string): Observable<IProductInterface> {
    return this._http.get<IProductInterface>(`http://localhost:3000/api/store/allPurchase?lote=${lote}`, {headers: this.header});
  }
}

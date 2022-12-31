import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {StoreComponent} from "./component/store/store.component";
import {KardexSystemComponent} from "./component/kardex-system/kardex-system.component";

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'kardex',
    component: KardexSystemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

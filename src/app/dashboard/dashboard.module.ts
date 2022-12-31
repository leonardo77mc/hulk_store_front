import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { KardexSystemComponent } from './component/kardex-system/kardex-system.component';
import {StoreComponent} from "./component/store/store.component";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    KardexSystemComponent,
    StoreComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class DashboardModule { }

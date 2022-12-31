import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IMenu} from "../core/interface/menu/menu.interface";

declare var $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public menuList: IMenu[];
  public user;

  constructor(private readonly _route: Router) {
    this.menuList = [
      {
        id: 1,
        title: 'Opciones',
        body: [
          {
            id: 1,
            title: 'Tienda para vender',
            target: 'shopping'
          },
          {
            id: 2,
            title: 'Tienda para comprar',
            target: 'shopping'
          }
        ]
      }
    ];
  }

  ngOnInit(): void {
    $('.collapsible').collapsible();
    const user = localStorage.getItem('user');
    if(user) {
      this.user = JSON.parse(user);
    } else {
      this._route.navigate(['']);
    }
  }

  logout() {
    localStorage.clear();
    this._route.navigate(['']);
  }

  openModalSetting(ic: any) {

  }

  optionPage(ic: any) {
    switch (ic.id) {
      case 1:
        this._route.navigate(['store']);
        break;
      default:
    }
  }
}

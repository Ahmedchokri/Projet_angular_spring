import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Acceuil',  icon: 'dashboard', class: '' },
    { path: '/produit', title: 'Produit',  icon:'content_paste', class: '' },
    { path: '/stock', title: 'Stock',  icon:'library_books', class: '' },
    { path: '/fournisseur', title: 'Fournisseur',  icon:'people', class: '' },
    { path: '/client', title: 'Client',  icon:'groups', class: '' },
    { path: '/rayon', title: 'Rayon',  icon:'inventory', class: '' },
    { path: '/facture', title: 'Facture',  icon:'shopping_cart', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

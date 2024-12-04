import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import womendata from "../../assets/data/women-sidebar.json"
import mendata from "../../assets/data/men-sidebar.json"
import bagsdata from "../../assets/data/bags-sidebar.json"
import v2kdata from "../../assets/data/v2k-sidebar.json"
import couturedata from "../../assets/data/couture-sidebar.json"
import homedata from "../../assets/data/home-sidebar.json"
import cosmeticdata from "../../assets/data/cosmetic-sidebar.json"
import latelierdata from "../../assets/data/latelier-sidebar.json"
import outletdata from "../../assets/data/outlet-sidebar.json"
import aboudata from "../../assets/data/about-sidebar.json"
import menudata from "../../assets/data/menu.json"

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() isOpen: boolean = false;
  @Output() dataEvent: EventEmitter<boolean> = new EventEmitter();


  closeSidenav() {
    this.isOpen = false;
    this.dataEvent.emit(this.isOpen);
  }

  activeDropdown: string | null = null;

  showDropdown(menu: string) {
    this.activeDropdown = menu;
  }

  womenSidebarData = womendata;
  menSidebarData = mendata;
  bagsSidebarData = bagsdata ; 
  v2kSidebarData = v2kdata
  coutureSidebarData = couturedata;
  homeSidebarData = homedata;
  cosmeticSidebarData = cosmeticdata;
  latelierSidebarData = latelierdata;
  outletSidebarData = outletdata;
  aboutSidebarData = aboudata;
  menuData = menudata ;
}

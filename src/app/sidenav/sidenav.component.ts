import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  
}
